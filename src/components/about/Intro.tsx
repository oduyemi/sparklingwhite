"use client";
import React from "react";
import { motion } from "framer-motion";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Image from "next/image";
import "animate.css";

const MotionBox = motion(Box);


export const AboutIntro: React.FC = () => {
  return (
    <Box className="about py-5">
      <div className="container">
        <div className="row align-items-center gy-4">
          {/* Image Section */}
          <div className="col-lg-5 col-md-6">
            <MotionBox
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                borderRadius="md"
                overflow="hidden"
                boxShadow="md"
                h="100%"
                position="relative"
                minH="300px"
            >
              <Image
                src="/images/header.jpg"
                alt="About us image"
                fill
                style={{ objectFit: "cover" }}
              />
            </MotionBox>
          </div>

          {/* Text Section */}
          <div className="col-lg-7 col-md-6">
            <MotionBox
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                color="#333"
            >
              <Heading as="h2" size="xl" mb={4}>
                <Text as="span" color="#00b4f2" fontWeight="bold" fontSize="5xl">
                  10
                </Text>{" "}
                Years Experience
              </Heading>

              <Text mb={3} fontSize="md" color="gray.600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
              </Text>

              <Text mb={4} fontSize="md" color="gray.600">
                Curabitur non nisl nec nisi scelerisque maximus. Aenean consectetur convallis porttitor. Aliquam interdum at lacus non blandit.
              </Text>

              <Button
                as="a"
                href="#"
                bg="#00b4f2"
                color="white"
                _hover={{ bg: "#009ed3" }}
                size="lg"
                fontWeight="semibold"
                borderRadius="full"
              >
                Learn More
              </Button>
            </MotionBox>
          </div>
        </div>
      </div>
    </Box>
  );
};
