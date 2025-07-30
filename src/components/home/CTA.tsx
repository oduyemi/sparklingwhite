"use client";
import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionBox = motion(Box);

export const CTA: React.FC = () => {
  return (
    <MotionBox
      className="call-to-action"
      py={10}
      px={4}
      bg="#00b4f2"
      color="white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="row align-items-center gy-4">
          {/* Text */}
          <div className="col-md-9">
            <Heading as="h2" size="lg" mb={2}>
              Get A Free Cleaning Service
            </Heading>
            <Text fontSize="md">
              We offer a wide range of cleaning 
              services including janitorial, 
              carpet cleaning, upholstery 
              cleaning and other specialty 
              cleaning services
            </Text>
          </div>

          {/* Button */}
          <div className="col-md-3 text-md-end text-start">
            <Link href="/contact" passHref>
              <Button
                bg="white"
                color="#00b4f2"
                fontWeight="bold"
                _hover={{ bg: "gray.100" }}
                size="lg"
                borderRadius="full"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </MotionBox>
  );
};
