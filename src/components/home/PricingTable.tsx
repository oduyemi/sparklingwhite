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
  Divider,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaHome, FaStar, FaGift, FaShoppingCart } from "react-icons/fa";
import "animate.css";
import { BookingFormDialog } from "@/dialog/BookingDialog";

const plans = [
  {
    name: "Standard Cleaning",
    icon: FaHome,
    priceRange: "£15 - £25",
    price: 99,
    description: "Perfect for regular tidy-ups",
    features: [
      "3 Bedrooms",
      "2 Bathrooms",
      "1 Living Room",
      "Vacuum & Dusting",
      "Completed Within 6 Hours",
    ],
  },
  {
    name: "Deep Cleaning",
    icon: FaStar,
    priceRange: "Up to £40",
    price: 149,
    description: "Detailed top-to-bottom cleaning",
    features: [
      "5 Bedrooms",
      "3 Bathrooms",
      "2 Living Rooms",
      "Appliance Cleaning",
      "Completed Within 6 Hours",
    ],
    featured: true,
  },
  {
    name: "Full Home Service",
    icon: FaGift,
    priceRange: "Custom Quote",
    price: 199,
    description: "For large homes or special events",
    features: [
      "8 Bedrooms",
      "5 Bathrooms",
      "3 Living Rooms",
      "Full-Scale Deep Clean",
      "Completed Within 12 Hours",
    ],
  },
];

export const PricingTable: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [selectedPlan, setSelectedPlan] = React.useState<string | undefined>();

  return (
    <Box
      className="price animate__animated animate__fadeInUp"
      py={{ base: 12, md: 20 }}
      px={4}
      bg={useColorModeValue("#f7f9fb", "#1A202C")}
    >
      <Box textAlign="center" mb={12}>
        <Text color="#00B4F2" fontWeight="bold" textTransform="uppercase" mb={2}>
          Pricing Plan
        </Text>
        <Heading color="#004646" fontSize="3xl">
          Transparent & Flexible
        </Heading>
        <Text mt={2} fontSize="sm" color="gray.600">
          No hidden fees. Choose the right plan for your space.
        </Text>
      </Box>

      <Box className="container">
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
                borderRadius="2xl"
                boxShadow="lg"
                overflow="hidden"
                bg="white"
                _hover={{ transform: "translateY(-8px)", boxShadow: "2xl" }}
                transition="all 0.3s ease"
                mb={8}
              >
                {/* Header */}
                <Box
                  py={8}
                  px={6}
                  bg={plan.featured ? "#004646" : "#00B4F2"}
                  color={plan.featured ? "white" : "black"}
                  textAlign="center"
                >
                  <Icon as={plan.icon} boxSize={10} mb={2} />
                  <Heading fontSize="xl" mb={1}>
                    {plan.name}
                  </Heading>
                  <Text fontSize="sm" mb={2}>
                    {plan.description}
                  </Text>
                  <Heading fontSize="3xl" fontWeight="bold">
                    {plan.priceRange}
                  </Heading>
                </Box>

                {/* Body */}
                <VStack
                  spacing={3}
                  py={6}
                  px={6}
                  align="stretch"
                  position="relative"
                  bg="white"
                >
                  {plan.features.map((feature, i) => (
                    <Text
                      key={i}
                      fontSize="sm"
                      color="gray.700"
                      borderBottom="1px solid #eee"
                      pb={2}
                    >
                      {feature}
                    </Text>
                  ))}
                </VStack>

                <Divider />

                {/* Footer */}
                <Box py={6} px={6} bg="white" textAlign="center">
                  <Button
                    onClick={() => {
                      setSelectedPlan(plan.name);
                      setIsDialogOpen(true);
                    }}
                    color={plan.featured ? "white" : "black"}
                    bg={plan.featured ? "#00539C" : "#00B4F2"}
                    _hover={{
                      bg: plan.featured ? "#00B4F2" : "#00539C",
                      color: plan.featured ? "black" : "white",
                    }}
                    leftIcon={<FaShoppingCart />}
                    size="lg"
                    borderRadius="full"
                    w="full"
                  >
                    Book Now
                  </Button>
                </Box>
              </Box>
            </motion.div>
          ))}
        </div>
      </Box>
        <BookingFormDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          selectedPlan={selectedPlan}
        />
    </Box>
  );
};
