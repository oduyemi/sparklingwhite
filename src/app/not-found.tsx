"use client";
import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const MotionBox = motion(Box);

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      bg="gray.100"
      px={4}
    >
      <MotionBox
        textAlign="center"
        bg="white"
        p={8}
        borderRadius="2xl"
        boxShadow="2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <VStack spacing={6}>
          <Heading fontSize="6xl" color="red.400">
            404
          </Heading>
          <Text fontSize="xl" fontWeight="semibold">
            Oops! Page not found.
          </Text>
          <Text color="gray.500" fontSize="md">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </Text>
          <Button
            onClick={() => router.push("/")}
            bg="blue.700"
            color="white"
            size="lg"
            _hover={{ bg: "blue.600" }}
          >
            Go Home
          </Button>
        </VStack>
      </MotionBox>
    </Box>
  );
};

export default NotFoundPage;
