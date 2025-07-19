"use client";
import React from "react";
import {
  Box,
  Text,
  Heading,
  VStack,
  Button,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaHome,
  FaStar,
  FaGift,
  FaShoppingCart,
} from "react-icons/fa";
import "animate.css";

const plans = [
  {
    name: "Standard",
    icon: FaHome,
    price: 99,
    features: [
      "3 Bedrooms cleaning",
      "2 Bathrooms cleaning",
      "1 Living room cleaning",
      "Vacuum Cleaning",
      "Within 6 Hours",
    ],
  },
  {
    name: "Premium",
    icon: FaStar,
    price: 149,
    features: [
      "5 Bedrooms cleaning",
      "3 Bathrooms cleaning",
      "2 Living rooms",
      "Vacuum Cleaning",
      "Within 6 Hours",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    icon: FaGift,
    price: 199,
    features: [
      "8 Bedrooms cleaning",
      "5 Bathrooms cleaning",
      "3 Living rooms",
      "Vacuum Cleaning",
      "Within 12 Hours",
    ],
  },
];

export const PricingTable: React.FC = () => {
  return (
    <Box
      className="price animate__animated animate__fadeInUp"
      py={{ base: 12, md: 20 }}
      bg={useColorModeValue("#f7f9fb", "#1A202C")}
    >
      <div className="container text-center mb-5">
        <Text color="#00B4F2" fontWeight="bold" textTransform="uppercase" mb={2}>
          Pricing Plan
        </Text>
        <Heading color="#004646" fontSize="3xl">
          No Extra Hidden Charges
        </Heading>
      </div>

      <div className="container">
        <div className="row">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className="col-md-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Box
                className={`price-item ${plan.featured ? "featured-item" : ""}`}
                borderRadius="md"
                boxShadow="lg"
                overflow="hidden"
                bg="white"
                _hover={{ transform: "translateY(-5px)", boxShadow: "2xl" }}
                transition="all 0.3s"
              >
                {/* Header */}
                <Box
                  py={8}
                  bg={plan.featured ? "#00539C" : "#00B4F2"}
                  color={plan.featured ? "white" : "black"}
                >
                  <Icon as={plan.icon} boxSize={10} mb={2} />
                  <Heading fontSize="xl" mb={1}>
                    {plan.name}
                  </Heading>
                  <Heading fontSize="4xl" fontWeight="light">
                    <Box as="small" fontSize="md" mr={1}>
                      £
                    </Box>
                    {plan.price}
                  </Heading>
                </Box>

                {/* Body */}
                <VStack
                  spacing={3}
                  py={6}
                  bg="white"
                  px={6}
                  align="stretch"
                  borderTopRadius="30px"
                  mt={-6}
                  zIndex={1}
                  position="relative"
                >
                  {plan.features.map((feature, i) => (
                    <Text
                      key={i}
                      fontSize="sm"
                      borderBottom="1px solid #eee"
                      pb={2}
                      color="#2A293E"
                    >
                      {feature}
                    </Text>
                  ))}
                </VStack>

                {/* Footer */}
                <Box py={6} bg="white">
                  <Button
                    color={plan.featured ? "white" : "black"}
                    bg={plan.featured ? "#00539C" : "#00B4F2"}
                    _hover={{
                      bg: plan.featured ? "#00B4F2" : "#00539C",
                      color: plan.featured ? "black" : "white",
                    }}
                    leftIcon={<FaShoppingCart />}
                    size="lg"
                    borderRadius="md"
                  >
                    Book Now
                  </Button>
                </Box>
              </Box>
            </motion.div>
          ))}
        </div>
      </div>
    </Box>
  );
};
