"use client";
import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Grid,
  GridItem,
  // useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import "animate.css";

const MotionBox = motion(Box);

const coreValues = [
  {
    title: "Precision in Every Detail",
    description:
      "We don’t just clean—we elevate environments. Our team approaches each task with care and attention, ensuring nothing is overlooked.",
  },
  {
    title: "Consistency You Can Trust",
    description:
      "Whether it’s your home, office, or facility, we deliver the same high standard of service every time, building confidence through consistency.",
  },
  {
    title: "Professionalism with Purpose",
    description:
      "We take pride in maintaining clear communication, respectful service, and dependable delivery from start to finish.",
  },
  {
    title: "Care That Goes Beyond",
    description:
      "We treat every space like it’s our own—with respect, integrity, and a commitment to leaving it better than we found it.",
  },
  {
    title: "Sustainability Matters",
    description:
      "We embrace eco-conscious practices by using non-toxic products and mindful processes to care for both your space and the environment.",
  },
];

export const Story: React.FC = () => {
  // const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box bg="white" py={{ base: 10, md: 16 }} px={{ base: 4, sm: 6 }} maxW="6xl" mx="auto">
      <VStack spacing={3} textAlign="center" mb={{ base: 10, md: 14 }}>
        <Text
          color="#00b4f2"
          fontWeight="bold"
          fontSize="lg"
          className="animate__animated animate__fadeInDown"
        >
          Our Values
        </Text>
        <Heading
          fontSize={{ base: "2xl", md: "4xl" }}
          className="animate__animated animate__fadeInUp"
        >
          What We Stand For
        </Heading>
      </VStack>

      <VStack spacing={10}>
        {coreValues.map((item, index) => (
          <MotionBox
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            w="full"
          >
            <Grid
              templateColumns={{ base: "1fr", md: "1fr 1fr" }}
              gap={6}
              alignItems="start"
            >
              <GridItem
                order={{ base: 1, md: index % 2 === 0 ? 1 : 2 }}
                display="flex"
                justifyContent={{ base: "center", md: "flex-start" }}
                flexDirection="column"
              ></GridItem>

              <GridItem
                order={{ base: 2, md: index % 2 === 0 ? 2 : 1 }}
                bg="gray.50"
                borderLeft="5px solid #00b4f2"
                p={6}
                borderRadius="lg"
                boxShadow="md"
              >
                <Heading fontSize="xl" color="#00b4f2" mb={2}>
                  {item.title}
                </Heading>
                <Text fontSize="md" color="gray.700">
                  {item.description}
                </Text>
              </GridItem>
            </Grid>
          </MotionBox>
        ))}
      </VStack>
    </Box>
  );
};
