"use client";
import { ApplyDialog } from "@/dialog/ApplyDialog";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  useDisclosure,
  Divider,
} from "@chakra-ui/react";
import { Transition, motion } from "framer-motion";

const spring: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 20,
};
const positions = [
  {
    title: "Professional Cleaner",
    location: "London, UK",
    type: "Full-time",
    description:
      "Join our elite team delivering top-notch cleaning services to residential and commercial clients.",
  },
  {
    title: "Customer Success Officer",
    location: "Remote",
    type: "Part-time",
    description:
      "Support our clients, schedule appointments, and ensure satisfaction with every interaction.",
  },
  {
    title: "Operations Supervisor",
    location: "Manchester, UK",
    type: "Full-time",
    description:
      "Coordinate cleaning schedules, manage staff, and maintain high service quality across teams.",
  },
];

const perks = [
  "Flexible Working Hours",
  "Health Insurance (UK only)",
  "Bonuses & Recognition",
  "Professional Development",
  "Supportive Team Culture",
];

export const Careers = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <motion.div
        className="your-class"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={spring} // ✅ Valid transition object
    >
        <Box px={{ base: 6, md: 20 }} py={16} bg="gray.50">
        <VStack spacing={4} textAlign="center">
            <Text fontSize="lg" color="gray.700" maxW="3xl">
            Sparkling White is always on the lookout for driven individuals who
            take pride in clean, professional work. Explore open positions or send us your resume.
            </Text>
        </VStack>

        <Box mt={20}>
            <Heading
            as="h2"
            size="xl"
            mb={10}
            textAlign="center"
            color="gray.800"
            letterSpacing="wide"
            >
            Open Positions
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            {positions.map((job, i) => (
                <Box
                key={i}
                p={6}
                bg="white"
                borderRadius="2xl"
                boxShadow="lg"
                border="1px solid #e2e8f0"
                transition="0.3s ease-in-out"
                >
                <VStack align="start" spacing={4}>
                    <Heading size="md" color="teal.700">
                    {job.title}
                    </Heading>
                    <Text fontSize="sm" color="gray.600">
                    {job.location} &bull; {job.type}
                    </Text>
                    <Text fontSize="sm" color="gray.700">
                    {job.description}
                    </Text>
                    <ApplyDialog />
                </VStack>
                </Box>
            ))}
            </SimpleGrid>
        </Box>

        <Divider my={20} />

        <Box textAlign="center">
            <Heading as="h2" size="xl" color="teal.700" mb={4}>
            Why Work with Us?
            </Heading>
            <Text color="gray.600" fontSize="md" maxW="2xl" mx="auto">
            We invest in our people. Our team thrives in an environment that promotes
            personal and professional growth.
            </Text>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} mt={12}>
            {perks.map((perk, i) => (
                <Box
                key={i}
                p={6}
                bg="white"
                borderRadius="xl"
                boxShadow="base"
                border="1px solid #e2e8f0"
                >
                <Text fontWeight="semibold" fontSize="lg" color="gray.700">
                    {perk}
                </Text>
                </Box>
            ))}
            </SimpleGrid>
        </Box>
        </Box>
    </motion.div>
  );
};
