"use client";
import React from "react";
import Image from "next/image";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Heading,
  Text,
  Button,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaChevronDown,
  FaChevronUp,
  FaQuestionCircle,
} from "react-icons/fa";
import { QuestionDialog } from "@/dialog/QuestionDialog";

const faqs = [
  {
    question: "What cleaning services do you offer?",
    answer: "We provide domestic, tenancy, office, appliances, outdoor, and specialized cleaning.",
  },
  {
    question: "Are your cleaning products eco-friendly?",
    answer: "Yes, we use non-toxic, eco-conscious products safe for children and pets.",
  },
  {
    question: "Do I need to be present during the service?",
    answer: "You don’t need to be home; we offer flexible, secure access arrangements.",
  },
  {
    question: "How long does a typical cleaning take?",
    answer: "Depending on the service, it ranges from 1.5 to 4 hours.",
  },
  {
    question: "Can I schedule recurring services?",
    answer: "Absolutely. We offer weekly, bi-weekly, and monthly cleaning plans.",
  },
];

const MotionBox = motion(Box);

export const FAQ: React.FC = () => {
  const accentColor = "#00B4F2";
  const iconBg = useColorModeValue("white", "gray.800");

  return (
    <Box bg="#f8f9fa" py={{ base: 16, md: 24 }} px={{ base: 6, md: 20 }}>
      <Box
        display="grid"
        gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={12}
        alignItems="center"
      >
        {/* Left Image + Text */}
        <MotionBox
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Text
            fontSize="sm"
            fontWeight="bold"
            color={accentColor}
            textTransform="uppercase"
            mb={2}
            letterSpacing="wide"
          >
            You Might Ask
          </Text>
          <Heading size="2xl" color="#004646" mb={6}>
            Frequently Asked Questions
          </Heading>

          <Box
            overflow="hidden"
            borderRadius="2xl"
            boxShadow="2xl"
          >
            <Image
              src="/images/faqs.jpg"
              alt="FAQ"
              width={600}
              height={400}
              style={{ width: "100%", height: "auto", borderRadius: "inherit" }}
            />
          </Box>
        </MotionBox>

        {/* Right Accordion */}
        <MotionBox
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Accordion allowToggle borderRadius="lg" boxShadow="base">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                border="none"
                mb={4}
                bg="white"
                borderRadius="lg"
                px={4}
                py={2}
                boxShadow="sm"
                _hover={{ boxShadow: "md" }}
              >
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton
                        py={4}
                        _expanded={{ bg: accentColor, color: "white" }}
                        transition="all 0.25s ease"
                      >
                        <Box
                          flex="1"
                          textAlign="left"
                          fontSize="lg"
                          fontWeight="semibold"
                          display="flex"
                          alignItems="center"
                          gap={3}
                        >
                          <Icon
                            as={FaQuestionCircle}
                            boxSize={5}
                            color={isExpanded ? "white" : accentColor}
                          />
                          {faq.question}
                        </Box>
                        <Icon
                          as={isExpanded ? FaChevronUp : FaChevronDown}
                          boxSize={4}
                          color={isExpanded ? "white" : "#004646"}
                        />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      pb={4}
                      fontSize="md"
                      color="gray.600"
                      lineHeight="1.8"
                      pt={2}
                    >
                      {faq.answer}
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            ))}
          </Accordion>

          <Box mt={10} textAlign="center">
            <QuestionDialog />
          </Box>
        </MotionBox>
      </Box>
    </Box>
  );
};
