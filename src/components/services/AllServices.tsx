"use client";
import React from "react";
import {
  Box,
  Heading,
  Text,
  Grid,
  Stack,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import {
  FaBroom,
  FaPaintRoller,
  FaCogs,
  FaTools,
  FaLeaf,
  FaWater,
  FaClinicMedical
} from "react-icons/fa";
import "animate.css";


const allServices = [
  {
    title: "Domestic Cleaning",
    img: "/images/domestic.jpg",
    desc: "Reliable home cleaning for kitchens, bathrooms, bedrooms, and living areas—tailored to your lifestyle.",
    icon: FaBroom,
  },
  {
    title: "End of Tenancy Cleaning",
    img: "/images/tenancy.jpg",
    desc: "Comprehensive deep cleaning for rented properties to help you pass inspections and reclaim your deposit.",
    icon: FaPaintRoller,
  },
  {
    title: "Office Cleaning",
    img: "/images/office.jpg",
    desc: "Efficient cleaning solutions for workspaces, ensuring a tidy, sanitized, and productive environment.",
    icon: FaCogs,
  },
  {
    title: "Appliances Cleaning",
    img: "/images/appliances.jpg",
    desc: "Detailed internal and external cleaning of kitchen and household appliances to restore freshness and function.",
    icon: FaTools,
  },
  {
    title: "Gardening",
    img: "/images/gardening.jpg",
    desc: "Expert maintenance of lawns, hedges, flower beds, and green spaces for a pristine outdoor look.",
    icon: FaLeaf,
  },
  {
    title: "Outdoor Cleaning",
    img: "/images/outdoor.jpg",
    desc: "Power washing and outdoor upkeep for patios, driveways, walls, and external windows.",
    icon: FaWater,
  },
  {
    title: "Specialized Cleaning",
    img: "/images/specialized.jpg",
    desc: "Bespoke cleaning for post-construction, medical, industrial, or sensitive environments.",
    icon: FaClinicMedical,
  },
];

export const AllServices: React.FC = () => {
  const bg = useColorModeValue("white", "gray.800");
  const border = useColorModeValue("gray.200", "gray.700");

  return (
    <Box px={{ base: 4, md: 10 }} py={10} bg={useColorModeValue("gray.50", "gray.900")}>
      {/* <Heading mb={6} textAlign="center" size="xl" fontWeight="bold">
        Our Services
      </Heading> */}

      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={8}
        maxW="7xl"
        mx="auto"
      >
        {allServices.map((service, index) => (
          <Box
            key={index}
            p={6}
            bg={bg}
            borderRadius="xl"
            border="1px"
            borderColor={border}
            shadow="md"
            _hover={{ shadow: "lg", transform: "translateY(-4px)" }}
            transition="all 0.3s ease"
          >
            <Stack direction="row" spacing={4} align="center">
              <Icon as={service.icon} boxSize={8} color="blue.500" />
              <Box>
                <Heading size="md" mb={1}>
                  {service.title}
                </Heading>
                <Text fontSize="sm" color="gray.600">
                  {service.desc}
                </Text>
              </Box>
            </Stack>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};