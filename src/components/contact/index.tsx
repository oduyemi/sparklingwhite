"use client";
import React from "react";
import {
  Box,
  Heading,
  VStack,
  Input,
  Textarea,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  FormControl,
  FormLabel,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import "animate.css";

const MotionBox = motion(Box);

export const ContactUs: React.FC = () => {
  const formSpacing = useBreakpointValue({ base: 4, md: 6 });

  return (
    <Box bg="white" py={16} px={{ base: 4, md: 12 }} className="contact">
      <div className="container">
        <VStack spacing={4} textAlign="center" mb={10}>
          <p className="animate__animated animate__fadeInDown" style={{ color: "#00b4f2", fontWeight: "bold" }}>
            Contact Us
          </p>
          <Heading fontSize={{ base: "2xl", md: "4xl" }} className="animate__animated animate__fadeInUp">
            Got Questions or Need Help?
          </Heading>
        </VStack>

        <div className="row">
          {/* FAQs */}
          <div className="col-md-6 mb-4">
            <Accordion allowToggle>
              {[
                {
                  question: "How quickly can I book a cleaning?",
                  answer:
                    "You can schedule same-day service if booked before 12 PM. Otherwise, next-day slots are always available.",
                },
                {
                  question: "Are your cleaning products eco-friendly?",
                  answer:
                    "Yes! We use only certified eco-friendly and non-toxic cleaning agents for your safety and the planet.",
                },
                {
                  question: "What’s your cancellation policy?",
                  answer:
                    "Free cancellation if done 12 hours before the scheduled time. Late cancellations may incur a fee.",
                },
                {
                  question: "Do I need to be home during the service?",
                  answer:
                    "Not necessarily. You can leave instructions or share access details securely with our team.",
                },
                {
                  question: "Can I request recurring services?",
                  answer:
                    "Absolutely. Weekly, bi-weekly, or monthly plans are available with discounts!",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} border="none" mb={2}>
                  <h2>
                    <AccordionButton _expanded={{ bg: "#00b4f2", color: "white" }}>
                      <Box flex="1" textAlign="left" fontWeight="semibold">
                        {faq.question}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} color="gray.600">
                    {faq.answer}
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Contact Form */}
          <div className="col-md-6">
            <MotionBox
              borderRadius="lg"
              p={formSpacing}
              boxShadow="lg"
              bg="gray.50"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <form>
                <VStack spacing={formSpacing}>
                  <FormControl isRequired>
                    <FormLabel>Your Name</FormLabel>
                    <Input placeholder="Enter your name" />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Email Address</FormLabel>
                    <Input type="email" placeholder="Enter your email" />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Subject</FormLabel>
                    <Input placeholder="Subject of your message" />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Message</FormLabel>
                    <Textarea rows={5} placeholder="Your message here..." />
                  </FormControl>

                  <Button
                    bg="#00b4f2"
                    color="white"
                    _hover={{ bg: "#009cd3" }}
                    type="submit"
                    size="lg"
                    w="full"
                  >
                    Send Message
                  </Button>
                </VStack>
              </form>
            </MotionBox>
          </div>
        </div>
      </div>
    </Box>
  );
};
