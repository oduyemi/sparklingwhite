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
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionModalContent = motion(ModalContent);

export const QuestionDialog = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
              <Input placeholder="Your Name" />
              <Input placeholder="Email Address" />
              <Textarea placeholder="Type your question..." rows={4} />
              <Button
                width="100%"
                bg="#00B4F2"
                color="black"
                textTransform="uppercase"
                _hover={{ bg: "blue.500", color: "white" }}
              >
                Submit
              </Button>
            </VStack>
          </ModalBody>
        </MotionModalContent>
      </Modal>
    </>
  );
};
