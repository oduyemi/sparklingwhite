"use client";
import React from "react";
import { Box, Grid, Heading, Text, VStack, Button, useColorModeValue } from "@chakra-ui/react";
import { FaRegClock, FaShieldAlt, FaPeopleCarry, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { QuoteDialog } from "@/dialog/QuoteDialog";

const features = [
  {
    icon: FaRegClock,
    title: "Punctual & Reliable",
    desc: "We value your time. Our team is always on schedule and works efficiently without compromising quality.",
  },
  {
    icon: FaShieldAlt,
    title: "Vetted Professionals",
    desc: "All our staff are background-checked, trained, and insured for your peace of mind.",
  },
  {
    icon: FaPeopleCarry,
    title: "Eco-Friendly Solutions",
    desc: "We use safe, environmentally-friendly products for the health of your family and pets.",
  },
  {
    icon: FaStar,
    title: "Excellent Reviews",
    desc: "Sparkling White is trusted by homes and offices across the UK with a 5-star service track record.",
  },
];

export const Why: React.FC = () => {
  const bg = useColorModeValue("gray.50", "gray.800");

  return (
    <Box bg={bg} py={{ base: 10, md: 16 }} px={{ base: 4, md: 12 }}>
      <VStack spacing={6} mb={10}>
        <Heading fontSize="3xl" textAlign="center">Why Hire Sparkling White?</Heading>
        <Text fontSize="md" maxW="3xl" textAlign="center">
          We go above and beyond to deliver premium cleaning services tailored to meet your needs. Here's why hundreds of UK households and businesses trust us.
        </Text>
      </VStack>

      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={8}
        maxW="6xl"
        mx="auto"
      >
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.2 }}
          >
            <Box
              bg="white"
              p={6}
              rounded="2xl"
              shadow="md"
              _hover={{ shadow: "lg" }}
              transition="all 0.3s ease"
            >
              <VStack align="start" spacing={4}>
                <Box
                  fontSize="2xl"
                  color="teal.500"
                  as={feature.icon}
                />
                <Heading fontSize="xl">{feature.title}</Heading>
                <Text fontSize="sm" color="gray.600">{feature.desc}</Text>
              </VStack>
            </Box>
          </motion.div>
        ))}
      </Grid>

      <VStack mt={12}>
        <QuoteDialog />
      </VStack>
    </Box>
  );
}
