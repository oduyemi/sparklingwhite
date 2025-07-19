"use client";
import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Grid,
  GridItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import "animate.css";

const MotionBox = motion(Box);

const timeline = [
  {
    date: "01 Jan 2018",
    title: "Company Launch",
    description:
      "Started with a mission to redefine cleanliness and client satisfaction. We began with just a team of 3.",
  },
  {
    date: "01 Jun 2018",
    title: "100 Clients Milestone",
    description:
      "Crossed our first 100 happy clients and received glowing testimonials from home and business owners.",
  },
  {
    date: "01 Dec 2018",
    title: "Expanded to 2 New Cities",
    description:
      "Successfully launched operations in two more cities, marking our first regional footprint.",
  },
  {
    date: "01 Jun 2019",
    title: "Eco-Friendly Services",
    description:
      "Launched our eco-clean line using sustainable, non-toxic cleaning products.",
  },
  {
    date: "01 Dec 2019",
    title: "1,000 Clients Served",
    description:
      "A huge leap! We surpassed 1,000 homes cleaned with consistent 5-star ratings.",
  },
  {
    date: "01 Jun 2020",
    title: "Mobile App Launch",
    description:
      "We introduced on-demand booking and service tracking via our mobile app.",
  },
  {
    date: "01 Dec 2020",
    title: "National Recognition",
    description:
      "Recognized nationally for cleaning excellence and customer service innovation.",
  },
  {
    date: "Now",
    title: "Today & Beyond",
    description:
      "Over 10,000+ spaces cleaned, and we’re just getting started. Join our journey.",
  },
];

export const Story: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box bg="white" py={{ base: 10, md: 16 }} px={{ base: 4, sm: 6 }} maxW="6xl" mx="auto">
      <VStack spacing={3} textAlign="center" mb={{ base: 10, md: 14 }}>
        <Text
          color="#00b4f2"
          fontWeight="bold"
          fontSize="lg"
          className="animate__animated animate__fadeInDown"
        >
          Company Story
        </Text>
        <Heading
          fontSize={{ base: "2xl", md: "4xl" }}
          className="animate__animated animate__fadeInUp"
        >
          Learn About Our Journey
        </Heading>
      </VStack>

      <VStack spacing={10}>
        {timeline.map((item, index) => (
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
            //   direction={index % 2 === 0 ? "row" : "row-reverse"}
            >
              <GridItem
                order={{ base: 2, md: index % 2 === 0 ? 1 : 2 }}
                display="flex"
                justifyContent={{ base: "center", md: "flex-start" }}
                flexDirection="column"
              >
                <Text
                  fontWeight="semibold"
                  fontSize="sm"
                  color="gray.500"
                  mb={2}
                  textAlign={{ base: "center", md: "left" }}
                >
                  {item.date}
                </Text>
              </GridItem>

              <GridItem
                order={{ base: 1, md: index % 2 === 0 ? 2 : 1 }}
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
