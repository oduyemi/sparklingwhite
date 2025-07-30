"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  useColorModeValue,
  HStack,
  Divider,
  Stack,
  Icon,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Image from "next/image";
import "animate.css";

const MotionBox = motion(Box);

export const AboutIntro: React.FC = () => {
  const textColor = useColorModeValue("gray.800", "gray.200");
  const subTextColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Box className="about py-5" bg={useColorModeValue("white", "gray.900")}>
      <div className="container">
        <div className="row align-items-center gy-5">
          {/* Image Section */}
          <div className="col-lg-5 col-md-6">
            <MotionBox
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="2xl"
              h="100%"
              position="relative"
              minH="320px"
              className="animate__animated animate__fadeInLeft"
              _hover={{
                transform: "scale(1.03)",
                transition: "0.4s ease-in-out",
              }}
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
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              color={textColor}
            >
              <VStack align="start" spacing={6}>
                {/* Sleek Styled Heading */}
                <Box>
                  <Text
                    fontSize="sm"
                    color="#00b4f2"
                    textTransform="uppercase"
                    fontWeight="bold"
                    letterSpacing="wider"
                    mb={2}
                  >
                    Trusted & Detail-Oriented
                  </Text>

                  <Heading
                    as="h2"
                    fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
                    fontWeight="extrabold"
                    lineHeight="short"
                  >
                    <Box as="span" color="#00b4f2" display="inline-block">
                      Professional Cleaning
                    </Box>{" "}
                    <br />
                    You Can Count On
                  </Heading>

                  <Divider
                    mt={4}
                    mb={2}
                    borderColor="#00b4f2"
                    borderWidth="2px"
                    width="60px"
                    borderRadius="full"
                  />
                </Box>

                {/* Description Text */}
                <Stack spacing={4}>
                  <Text fontSize="lg" color={subTextColor}>
                    Based in the UK, we bring a strong 
                    foundation in cleaning and facility 
                    care, delivering reliability, precision, 
                    and a detail-driven approach to every 
                    space we service.
                  </Text>
                  <Text fontSize="lg" color={subTextColor}>
                    From residential and commercial 
                    properties to industrial sites, 
                    our focus is simple: deliver 
                    spotless results, ensure peace 
                    of mind, and build lasting 
                    relationships through trust 
                    and quality.
                  </Text>
                </Stack>

                {/* CTA */}
                <Button
                  as="a"
                  href="#"
                  bg="#00b4f2"
                  color="white"
                  size="lg"
                  px={8}
                  py={6}
                  fontWeight="medium"
                  borderRadius="full"
                  rightIcon={<ChevronRightIcon />}
                  boxShadow="lg"
                  _hover={{
                    bg: "#009ed3",
                    boxShadow: "xl",
                    transform: "translateY(-2px)",
                  }}
                  transition="all 0.3s ease-in-out"
                >
                  Learn More
                </Button>
              </VStack>
            </MotionBox>
          </div>
        </div>
      </div>
    </Box>
  );
};
