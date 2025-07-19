"use client";
import React from "react";
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
} from "@chakra-ui/react";

export const ApplyDialog = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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

      <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent bg="white" borderRadius="xl" p={2}>
          <ModalHeader fontWeight="light">Apply for a Role</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <Input placeholder="Full Name" />
              <Input placeholder="Email Address" type="email" />
              <Input placeholder="Phone Number" />
              <Select placeholder="Select Role">
                <option value="cleaner">Professional Cleaner</option>
                <option value="admin">Admin Assistant</option>
                <option value="operations">Operations Manager</option>
              </Select>
              <Textarea placeholder="Tell us briefly why you're a good fit" rows={4} />
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button
              bg="#00B4F2"
              color="black"
              _hover={{ bg: "#e6faff" }}
              w="full"
              textTransform="uppercase"
              onClick={onClose}
            >
              Submit Application
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
