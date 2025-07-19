"use client";
import React from "react";
import { motion } from "framer-motion";
import { Box, Heading, Text, HStack, Link as ChakraLink } from "@chakra-ui/react";
import "animate.css";
import Link from "next/link";

const MotionBox = motion(Box); 

export const ServicesBanner: React.FC = () => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }} 
      background= "#004646"
      color="white"
      py={20}
      px={{ base: 6, md: 20 }}
      textAlign="center"
      className="animate__animated animate__fadeIn"
    >
      <Heading as="h2" fontSize={{ base: "3xl", md: "5xl" }} mb={4}>
        Our Services
      </Heading>

      <HStack spacing={2} justify="center" fontSize="sm" fontWeight="medium">
        <i className="bi bi-house" style={{ fontSize: "1rem" }}></i>
        <Link href="/" passHref>
          <ChakraLink color="whiteAlpha.800" _hover={{ color: "white" }}>
            Home
          </ChakraLink>
        </Link>
        <Text>/</Text>
        <Link href="/services" passHref>
          <ChakraLink color="white" fontWeight="bold">
            Our Services
          </ChakraLink>
        </Link>
      </HStack>
    </MotionBox>
  );
};
