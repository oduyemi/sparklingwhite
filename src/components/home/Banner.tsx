"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Input,
  Select,
  Textarea,
  Button,
  Box,
  Heading,
  VStack,
  Alert,
  AlertIcon,
  Spinner,
} from "@chakra-ui/react";
import { FaBroom } from "react-icons/fa";
import "animate.css";

export const Banner: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xkovpkel", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(result?.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <Box bg="#004646" py={{ base: 10, md: 16 }} px={{ base: 4, md: 10 }} className="shadow-sm">
      <div className="row align-items-center">
        {/* Left Text Block */}
        <motion.div
          className="col-md-7"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Heading as="h2" size="2xl" color="white" fontWeight="hairline">
            Best & Trusted
          </Heading>
          <Heading as="h2" size="2xl" color="#00B4F2" mb={4}>
            <span className="text-white">Cleaning </span>Service
          </Heading>
          <p className="text-white fs-5 mb-4">
            Hand over your cleaning to us.
            <br />
            Your peace of mind is guaranteed.
          </p>
          <Button
            rightIcon={<FaBroom />}
            size="lg"
            color="#00539C"
            bg="white"
            _hover={{ bg: "#00B4F2", color: "white" }}
            textTransform="uppercase"
          >
            Explore Now
          </Button>
        </motion.div>

        {/* Right Quote Form */}
        <motion.div
          className="col-md-5"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Box
            as="form"
            onSubmit={handleSubmit}
            bg="rgba(255,255,255,0.15)"
            border="1px solid rgba(255,255,255,0.4)"
            borderRadius="lg"
            p={8}
            backdropFilter="blur(8px)"
            mt={{ base: 10, md: 0 }}
          >
            <Heading as="h3" size="md" color="white" mb={5} fontWeight="light">
              Get A Quote
            </Heading>

            <VStack spacing={4}>
              <Input
                name="name"
                placeholder="Your Name"
                required
                bg="rgba(255,255,255,0.2)"
                color="white"
                _placeholder={{ color: "white" }}
              />

              <Input
                name="phone"
                type="tel"
                placeholder="Mobile Number"
                required
                bg="rgba(255,255,255,0.2)"
                color="white"
                _placeholder={{ color: "white" }}
              />

              <Select
                name="service"
                placeholder="Choose a service"
                required
                bg="rgba(255,255,255,0.2)"
                color="white"
              >
                <option style={{ color: "#333" }} value="House Cleaning">
                  House Cleaning
                </option>
                <option style={{ color: "#333" }} value="Apartment Cleaning">
                  Apartment Cleaning
                </option>
                <option style={{ color: "#333" }} value="Office Cleaning">
                  Office Cleaning
                </option>
              </Select>

              <Textarea
                name="message"
                placeholder="Comment"
                required
                rows={4}
                bg="rgba(255,255,255,0.2)"
                color="white"
                _placeholder={{ color: "white" }}
              />

              {status === "success" && (
                <Alert status="success" borderRadius="md">
                  <AlertIcon />
                  Your quote request has been sent successfully!
                </Alert>
              )}

              {status === "error" && (
                <Alert status="error" borderRadius="md">
                  <AlertIcon />
                  {errorMessage}
                </Alert>
              )}

              <Button
                width="100%"
                type="submit"
                bg="#00B4F2"
                color="black"
                textTransform="uppercase"
                _hover={{ bg: "white", color: "#00539C" }}
                isDisabled={loading}
              >
                {loading ? <Spinner size="sm" /> : "Get A Quote"}
              </Button>
            </VStack>
          </Box>
        </motion.div>
      </div>
    </Box>
  );
};