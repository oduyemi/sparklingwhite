"use client";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";

interface BookingFormDialogProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: string;
}

export const BookingFormDialog: React.FC<BookingFormDialogProps> = ({
  isOpen,
  onClose,
  selectedPlan = "",
}) => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    date: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate API or handle submission
    toast({
      title: "Booking Submitted",
      description: `Thank you, ${formData.name}. We'll contact you shortly.`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    onClose();
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      date: "",
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
      <ModalOverlay />
      <ModalContent borderRadius="xl" p={4}>
        <ModalHeader>Book: {selectedPlan}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4} align="stretch">
              <FormControl isRequired>
                <FormLabel>Full Name</FormLabel>
                <Input
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Phone Number</FormLabel>
                <Input
                  name="phone"
                  placeholder="+44 123 456 789"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Booking Date</FormLabel>
                <Input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Address</FormLabel>
                <Textarea
                  name="address"
                  placeholder="Your full address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </FormControl>
            </VStack>
          </form>
        </ModalBody>

        <ModalFooter>
          <Button onClick={onClose} variant="ghost" mr={3}>
            Cancel
          </Button>
          <Button colorScheme="blue" onClick={handleSubmit}>
            Confirm Booking
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};