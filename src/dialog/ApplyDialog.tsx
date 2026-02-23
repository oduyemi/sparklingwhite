"use client";
import React, { useState } from "react";
import {
  Button,
  Input,
  Textarea,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  VStack,
  useDisclosure,
  Select,
  useToast,
  Spinner,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

export const ApplyDialog = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { placeholder, value, name } = e.target as HTMLInputElement;
    const field = name || placeholder;

    if (field === "Full Name") {
      setFormData((prev) => ({ ...prev, name: value }));
    } else if (field === "Email Address") {
      setFormData((prev) => ({ ...prev, email: value }));
    } else if (field === "Phone Number") {
      setFormData((prev) => ({ ...prev, phone: value }));
    } else if (field === "Select Role") {
      setFormData((prev) => ({ ...prev, role: value }));
    } else {
      setFormData((prev) => ({ ...prev, message: value }));
    }
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.role) {
      toast({
        title: "Missing Required Fields",
        description: "Please complete all required fields.",
        status: "warning",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/mzdakyqk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Application Submitted",
          description: "Thank you for applying. We will review your application shortly.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          role: "",
          message: "",
        });

        onClose();
      } else {
        toast({
          title: "Submission Failed",
          description:
            result?.error || "Something went wrong. Please try again.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Network Error",
        description: "Please check your connection and try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }

    setLoading(false);
  };

  return (
    <>
      <Button
        onClick={onOpen}
        bg="#00539C"
        color="white"
        _hover={{ bg: "#003f7d" }}
        size="md"
        rounded="md"
      >
        Apply Now
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="lg"
        isCentered
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent bg="white" borderRadius="xl" p={2}>
          <ModalHeader fontWeight="light">Apply for a Role</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Full Name</FormLabel>
                <Input
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Email Address</FormLabel>
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Phone Number</FormLabel>
                <Input
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Select Role</FormLabel>
                <Select
                  placeholder="Select Role"
                  value={formData.role}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, role: e.target.value }))
                  }
                >
                  <option value="Professional Cleaner">Professional Cleaner</option>
                  <option value="Admin Assistant">Admin Assistant</option>
                  <option value="Operations Manager">Operations Manager</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel>Why You're a Good Fit</FormLabel>
                <Textarea
                  placeholder="Tell us briefly why you're a good fit"
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, message: e.target.value }))
                  }
                />
              </FormControl>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button
              bg="#00B4F2"
              color="black"
              _hover={{ bg: "#e6faff" }}
              w="full"
              textTransform="uppercase"
              onClick={handleSubmit}
              isDisabled={loading}
            >
              {loading ? <Spinner size="sm" /> : "Submit Application"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};