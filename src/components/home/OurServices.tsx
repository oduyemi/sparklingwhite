// @ts-nocheck
"use client";
import React from "react";
import Image from "next/image";
import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import "animate.css";

const services = [
  {
    title: "Domestic Cleaning",
    img: "/images/domestic.jpg",
    desc: "Reliable home cleaning for kitchens, bathrooms, bedrooms, and living areas—tailored to your lifestyle.",
  },
  {
    title: "End of Tenancy Cleaning",
    img: "/images/tenancy.jpg",
    desc: "Comprehensive deep cleaning for rented properties to help you pass inspections and reclaim your deposit.",
  },
  {
    title: "Office Cleaning",
    img: "/images/office.jpg",
    desc: "Efficient cleaning solutions for workspaces, ensuring a tidy, sanitized, and productive environment.",
  },
  {
    title: "Gardening",
    img: "/images/gardening.jpg",
    desc: "Expert maintenance of lawns, hedges, flower beds, and green spaces for a pristine outdoor look.",
  },
];



export const OurServices: React.FC = () => {
  return (
    <Box py={16} bg="#f8f9fa" className="service animate__animated animate__fadeIn">
      <Box textAlign="center" mb={10}>
        <Text fontSize="xl" color="#00B4F2" fontWeight="medium">
          Our Services
        </Text>
        <Heading size="2xl" fontWeight="bold" color="#004646">
          Provide Services Worldwide
        </Heading>
      </Box>

      <div className="container">
        <div className="row">
          {services.map((service, i) => (
            <motion.div
              className="col-lg-3 col-md-6"
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <Box
                bg="white"
                borderRadius="lg"
                boxShadow="lg"
                overflow="hidden"
                textAlign="center"
                mb={8}
                _hover={{ boxShadow: "xl", transform: "translateY(-4px)" }}
                transition="all 0.3s"
              >
                <Image
                  src={service.img}
                  alt={service.title}
                  width={500}
                  height={300}
                  style={{ width: "100%", height: "auto" }}
                />
                <VStack spacing={3} p={6}>
                  <Heading as="h3" size="md" color="#00539C" fontWeight="semibold">
                    {service.title}
                  </Heading>
                  <Text fontSize="sm" color="gray.700">
                    {service.desc}
                  </Text>
                  <Button
                    size="sm"
                    rightIcon={<FaArrowRight />}
                    color="black"
                    bg="#00B4F2"
                    borderRadius="md"
                    textTransform="uppercase"
                    _hover={{ bg: "#00539C", color: "white" }}
                  >
                    Learn More
                  </Button>
                </VStack>
              </Box>
            </motion.div>
          ))}
        </div>
        <Box textAlign="center" mt={10}>
            <Button
                size="lg"
                colorScheme="teal"
                variant="solid"
                textTransform="uppercase"
                as="a"
                href="/services"
                className="animate__animated animate__fadeInUp"
            >
                View All Services
            </Button>
            </Box>
      </div>
    </Box>
  );
};
