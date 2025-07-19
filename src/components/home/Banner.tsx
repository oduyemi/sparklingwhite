"use client";
import React from "react";
import { motion } from "framer-motion";
import { Input, Select, Textarea, Button, Box, Heading, VStack } from "@chakra-ui/react";
import { FaBroom } from "react-icons/fa";
import "animate.css";

export const Banner: React.FC = () => {
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
            Lorem ipsum dolor sit amet elit pretium facilisis ornare
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
              <Input placeholder="Your Name" bg="rgba(255,255,255,0.2)" color="white" _placeholder={{ color: "white" }} />
              <Input placeholder="Mobile Number" bg="rgba(255,255,255,0.2)" color="white" _placeholder={{ color: "white" }} />
              <Select placeholder="Choose a service" bg="rgba(255,255,255,0.2)" color="white" _placeholder={{ color: "white" }}>
                <option style={{ color: "#333" }} value="1">House Cleaning</option>
                <option style={{ color: "#333" }} value="2">Apartment Cleaning</option>
                <option style={{ color: "#333" }} value="3">Office Cleaning</option>
              </Select>
              <Textarea placeholder="Comment" bg="rgba(255,255,255,0.2)" color="white" _placeholder={{ color: "white" }} rows={4} />
              <Button
                width="100%"
                bg="#00B4F2"
                color="black"
                textTransform="uppercase"
                _hover={{ bg: "white", color: "#00539C" }}
              >
                Get A Quote
              </Button>
            </VStack>
          </Box>
        </motion.div>
      </div>
    </Box>
  );
};
