"use client";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Textarea,
  Input,
  VStack,
  useDisclosure,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";

const MotionModalContent = motion(ModalContent);

export const QuestionDialog = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { placeholder, value } = e.target;

    if (placeholder === "Your Name") {
      setFormData((prev) => ({ ...prev, name: value }));
    } else if (placeholder === "Email Address") {
      setFormData((prev) => ({ ...prev, email: value }));
    } else {
      setFormData((prev) => ({ ...prev, message: value }));
    }
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Fields",
        description: "Please fill out all fields.",
        status: "warning",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xaqdlazj", {
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
          title: "Question Submitted",
          description: "Thanks! We'll get back to you shortly.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });

        setFormData({
          name: "",
          email: "",
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
      <Button onClick={onOpen} colorScheme="blue">
        Ask a Question
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <MotionModalContent
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          bg="white"
          borderRadius="lg"
          boxShadow="lg"
        >
          <ModalHeader>Have a Question?</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <VStack spacing={4}>
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />
              <Textarea
                placeholder="Type your question..."
                rows={4}
                value={formData.message}
                onChange={handleChange}
              />
              <Button
                width="100%"
                bg="#00B4F2"
                color="black"
                textTransform="uppercase"
                _hover={{ bg: "blue.500", color: "white" }}
                onClick={handleSubmit}
                isDisabled={loading}
              >
                {loading ? <Spinner size="sm" /> : "Submit"}
              </Button>
            </VStack>
          </ModalBody>
        </MotionModalContent>
      </Modal>
    </>
  );
};