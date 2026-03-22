/* eslint-disable */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Select,
  Stack,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import StripeCardForm from "../StripeCardForm";
import { QuoteDialog } from "@/dialog/QuoteDialog";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const services = [
  {
    title: "Domestic Cleaning",
    img: "/images/domestic.jpg",
    desc: "Reliable home cleaning for kitchens, bathrooms, bedrooms, and living areas.",
  },
  {
    title: "End of Tenancy Cleaning",
    img: "/images/tenancy.jpg",
    desc: "Comprehensive deep cleaning for rented properties.",
  },
  {
    title: "Office Cleaning",
    img: "/images/office.jpg",
    desc: "Efficient cleaning solutions for workspaces.",
  },
  {
    title: "Gardening",
    img: "/images/gardening.jpg",
    desc: "Expert maintenance of lawns and green spaces.",
  },
];

const DOMESTIC_BASE_PRICES = [
  { label: "1 Bed • 1 Bath + Kitchen & Living (Appliances)", price: 165 },
  { label: "2 Bed • 1 Bath + Kitchen & Living (Appliances)", price: 195 },
  { label: "2 Bed • 2 Bath + Kitchen & Living (Appliances)", price: 240 },
  { label: "3 Bed • 1 Bath + Kitchen & Living (Appliances)", price: 270 },
  { label: "3 Bed • 2 Bath + Kitchen & Living (Appliances)", price: 295 },
  { label: "4 Bed • 1 Bath + Kitchen & Living (Appliances)", price: 330 },
  { label: "4 Bed • 2 Bath + Kitchen & Living (Appliances)", price: 360 },
  { label: "5 Bed • 1 Bath + Kitchen & Living (Appliances)", price: 400 },
  { label: "5 Bed • 2 Bath + Kitchen & Living (Appliances)", price: 445 },
  { label: "6 Bed • 1 Bath + Kitchen & Living (Appliances)", price: 480 },
  { label: "6 Bed • 2 Bath + Kitchen & Living (Appliances)", price: 525 },
];

const DOMESTIC_ADDONS = [
  { label: "Conservatory", price: 40 },
  { label: "Cloakroom", price: 20 },
  { label: "Balcony", price: 25 },
  { label: "Garage", price: 35 },
  { label: "Additional Kitchen", price: 45 },
  { label: "Additional Living Room", price: 40 },
  { label: "Study", price: 25 },
  { label: "Utility Room", price: 20 },
  { label: "Ensuite", price: 30 },
  { label: "Double Oven", price: 35 },
  { label: "AGA Oven", price: 55 },
  { label: "Washing Machine", price: 20 },
  { label: "Dish Washer", price: 20 },
  { label: "Tumble Dryer", price: 20 },
  { label: "Range Cooker", price: 40 },
  { label: "Cooker", price: 35 },
  { label: "Hood", price: 20 },
  { label: "Fridge", price: 20 },
  { label: "Freezer", price: 20 },
  { label: "Extractor Fan", price: 20 },
];

export const OurServices: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [basePrice, setBasePrice] = useState<number>(0);
  const [addons, setAddons] = useState<string[]>([]);
  const [clientSecret, setClientSecret] = useState("");
  const [propertySize, setPropertySize] = useState("");
  const [loadingIntent, setLoadingIntent] = useState(false);
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const openBooking = (service: string) => {
    setSelectedService(service);
    setBasePrice(0);
    setAddons([]);
    setClientSecret("");
    setPropertySize("");
  
    setCustomer({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
  };

  const closeBooking = () => {
    setSelectedService(null);
  };

  const totalPrice =
    basePrice +
    addons.reduce((acc, label) => {
      const addon = DOMESTIC_ADDONS.find((a) => a.label === label);
      return acc + (addon?.price || 0);
    }, 0);

    const createPaymentIntent = async () => {
      try {
        setLoadingIntent(true);
    
        const res = await fetch("/api/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            customer,
            service: selectedService,
            propertySize,
            addons,
          }),
        });
        
        if (!res.ok) {
          const err = await res.json();
          throw new Error(err.error);
        }
        
        const data = await res.json();
        setClientSecret(data.clientSecret);
        
        if (!data.clientSecret) {
          throw new Error("Failed to initialize payment");
        }
        
      } catch (err) {
        console.error("Payment init error:", err);
      } finally {
        setLoadingIntent(false);
      }
    };

  return (
    <Box py={16} bg="#f8f9fa">
      <Box textAlign="center" mb={10}>
        <Text fontSize="xl" color="#00B4F2">
          Our Services
        </Text>

        <Heading size="2xl" color="#004646">
          Professional Cleaning Services
        </Heading>
      </Box>

      <div className="container">
        <div className="row">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="col-lg-3 col-md-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
            >
              <Box
                bg="white"
                borderRadius="lg"
                boxShadow="lg"
                overflow="hidden"
                textAlign="center"
                mb={8}
              >
                <Image
                  src={service.img}
                  alt={service.title}
                  width={500}
                  height={300}
                  style={{ width: "100%", height: "auto" }}
                />

                <VStack spacing={3} p={6}>
                  <Heading size="md">{service.title}</Heading>

                  <Text fontSize="sm" color="gray.700">
                    {service.desc}
                  </Text>

                  {service.title === "Domestic Cleaning" ? (
                    <Button
                      size="sm"
                      rightIcon={<FaArrowRight />}
                      bg="#00B4F2"
                      color="black"
                      _hover={{ bg: "#00539C", color: "white" }}
                      onClick={() => openBooking(service.title)}
                    >
                      Book & Pay
                    </Button>
                  ) : (
                    <QuoteDialog />
                  )}
                </VStack>
              </Box>
            </motion.div>
          ))}
        </div>
      </div>

      {/* DOMESTIC BOOKING MODAL */}
      <Modal isOpen={!!selectedService} onClose={closeBooking} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Book Domestic Cleaning</ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={6}>
            <Stack spacing={4}>

              <Text fontWeight="bold">Property Size</Text>

              <Select
                placeholder="Select property size"
                onChange={(e) => {
                  const selected = DOMESTIC_BASE_PRICES.find(
                    (p) => p.label === e.target.value
                  );
                  setBasePrice(selected?.price || 0);
                  setPropertySize(e.target.value);
                }}
              >
                {DOMESTIC_BASE_PRICES.map((p) => (
                  <option key={p.label} value={p.label}>
                    {p.label} — £{p.price}
                  </option>
                ))}
              </Select>

              <Text fontWeight="bold">Add-ons</Text>
              <CheckboxGroup value={addons} onChange={(val) => setAddons(val as string[])}>
                <Stack>
                  {DOMESTIC_ADDONS.map((addon) => (
                    <Checkbox key={addon.label} value={addon.label}>
                      {addon.label} — £{addon.price}
                    </Checkbox>
                  ))}
                </Stack>
              </CheckboxGroup>

              <Text fontWeight="bold">Your Details</Text>
                <Stack spacing={3}>
                  <input
                    placeholder="Full Name"
                    value={customer.name}
                    onChange={(e) =>
                      setCustomer({ ...customer, name: e.target.value })
                    }
                  />

                  <input
                    placeholder="Email"
                    value={customer.email}
                    onChange={(e) =>
                      setCustomer({ ...customer, email: e.target.value })
                    }
                  />

                  <input
                    placeholder="Phone"
                    value={customer.phone}
                    onChange={(e) =>
                      setCustomer({ ...customer, phone: e.target.value })
                    }
                  />

                  <input
                    placeholder="Service Address"
                    value={customer.address}
                    onChange={(e) =>
                      setCustomer({ ...customer, address: e.target.value })
                    }
                  />
                </Stack>

                {propertySize && totalPrice > 0 && (
                <>
                  <Box p={4} bg="gray.100" borderRadius="md">
                  <Text>Service: {selectedService}</Text>
                  <Text>Property: {propertySize}</Text>

                  {addons.map((addonLabel) => {
                    const addon = DOMESTIC_ADDONS.find(a => a.label === addonLabel);

                    return (
                      <Text key={addonLabel}>
                        {addonLabel} — £{addon?.price}
                      </Text>
                    );
                  })}

                  <Text fontWeight="bold">
                    Total: £{totalPrice}
                  </Text>
                  </Box>

                  {!clientSecret && (
                    <Button
                    colorScheme="teal"
                    onClick={createPaymentIntent}
                    isLoading={loadingIntent}
                    isDisabled={
                      !basePrice ||
                      !propertySize ||
                      !customer.name ||
                      !customer.email ||
                      !customer.phone ||
                      !customer.address
                    }
                  >
                    Continue to Payment
                  </Button>
                  )}
                </>
              )}

              {clientSecret && (
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                  <StripeCardForm clientSecret={clientSecret} />
                </Elements>
              )}
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};