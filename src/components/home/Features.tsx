"use client";
import React from "react";
import Image from "next/image";
import { Box, Heading, Text, Button, VStack, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import "animate.css";

const features = [
  {
    title: "Expert Cleaners",
    img: "/images/one.jpg",
    desc: "Highly trained professionals using industry-standard tools and eco-friendly products.",
  },
  {
    title: "Reasonable Prices",
    img: "/images/two.jpg",
    desc: "Quality services that are affordable, with flexible packages tailored to your needs.",
  },
  {
    title: "Quick & Best Services",
    img: "/images/three.jpg",
    desc: "Fast response times and efficient service delivery without compromising quality.",
  },
];

export const WhyUs: React.FC = () => {
  return (
    <Box className="feature animate__animated animate__fadeIn" py={16}>
      <div className="container">
        <div className="row">
          {/* Left Content Block */}
          <motion.div
            className="col-md-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Box mb={6}>
              <Text color="#00B4F2" fontWeight="medium" fontSize="lg">
                Why Choose Us
              </Text>
              <Heading size="xl" color="#004646" fontWeight="bold" mb={4}>
                Expert Cleaners and World-Class Services
              </Heading>
              <Text fontSize="md" color="gray.700" mb={5}>
                We combine industry expertise with modern equipment and eco-conscious practices to give you an exceptional cleaning experience. Our services are customized to your environment and expectations.
              </Text>
              <Button
                color="white"
                bg="#00B4F2"
                _hover={{ bg: "#00539C" }}
                textTransform="uppercase"
                px={8}
                py={6}
                fontSize="sm"
                borderRadius="md"
              >
                Learn More
              </Button>
            </Box>
          </motion.div>

          {/* Right Features List */}
          <div className="col-md-7">
            {features.map((item, index) => (
              <motion.div
                className="row align-items-center feature-item mb-4"
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="col-5">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={500}
                    height={100}
                    style={{ width: "30%", borderRadius: "8px" }}
                  />
                </div>
                <div className="col-7">
                  <HStack spacing={3} align="start">
                    <FaCheckCircle color="#00B4F2" size={20} />
                    <VStack align="start" spacing={1}>
                      <Heading as="h3" size="sm" color="#00539C">
                        {item.title}
                      </Heading>
                      <Text fontSize="sm" color="gray.700">
                        {item.desc}
                      </Text>
                    </VStack>
                  </HStack>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Box>
  );
};
