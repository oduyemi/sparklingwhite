/* eslint-disable */
"use client";
import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Grid,
  Stack,
  Icon,
  Button,
  Input,
  Textarea,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useColorModeValue,
  Badge,
  Divider,
  Select,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBroom,
  FaPaintRoller,
  FaTools,
  FaLeaf,
  FaWater,
  FaCogs,
  FaSchool,
  FaChurch,
  FaStore,
  FaWarehouse,
  FaClinicMedical,
} from "react-icons/fa";
import { loadStripe } from "@stripe/stripe-js";
import StripeCardForm from "../StripeCardForm";
import { Elements } from "@stripe/react-stripe-js";



const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const MotionBox = motion(Box);
const MotionSelect = motion(Select);

const BRAND = "#00B4F2";
const BRANDG = "#004646";

const DOMESTIC_BASE_PRICES = [
  { label: "Studio Flat (Appliances)", price: 130 },
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

const SERVICE_MAP = {
  Residential: [
    "Domestic Cleaning",
    "End of Tenancy Cleaning",
    "Gardening",
    "Outdoor Cleaning",
  ],
  Commercial: [
    "Office Cleaning",
    "School Cleaning",
    "Church Cleaning",
    "Mall Cleaning",
    "Warehouse Cleaning",
    "Specialized Cleaning",
  ],
};


const residential = {
  featured: {
    title: "Domestic Cleaning",
    desc: "White-glove residential cleaning delivered with discretion, precision, and uncompromising standards.",
    icon: FaBroom,
  },
  others: [
    { title: "End of Tenancy Cleaning", desc: "Inspection-ready preparation for premium properties.", icon: FaPaintRoller },
    { title: "Appliances Cleaning", desc: "Detailed care restoring performance and longevity.", icon: FaTools },
    { title: "Gardening", desc: "Refined outdoor and landscape maintenance.", icon: FaLeaf },
    { title: "Outdoor Cleaning", desc: "Pressure washing and exterior detailing.", icon: FaWater },
  ],
};

const commercial = {
  featured: {
    title: "Office Cleaning",
    desc: "Discreet, professional cleaning for executive and high-performance workspaces.",
    icon: FaCogs,
  },
  others: [
    { title: "School Cleaning", desc: "Safe, hygienic learning environments.", icon: FaSchool },
    { title: "Church Cleaning", desc: "Respectful care for sacred spaces.", icon: FaChurch },
    { title: "Mall Cleaning", desc: "Large-scale retail environment maintenance.", icon: FaStore },
    { title: "Warehouse Cleaning", desc: "Industrial-grade deep cleaning solutions.", icon: FaWarehouse },
    { title: "Specialized Cleaning", desc: "Controlled sanitation for sensitive facilities.", icon: FaClinicMedical },
  ],
};


export const AllServices = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [basePrice, setBasePrice] = useState<number | null>(null);
  const [addons, setAddons] = useState<string[]>([]);
  const [clientSecret, setClientSecret] = useState("");
  const [serviceType, setServiceType] = useState<"Residential" | "Commercial" | "">("");
  const [selectedService, setSelectedService] = useState("");
  const [serviceTypeLocked, setServiceTypeLocked] = useState(false);

  // const cardBg = useColorModeValue(
  //   "rgba(255,255,255,0.7)",
  //   "rgba(18,18,18,0.7)"
  // );
  const borderColor = useColorModeValue(
    "rgba(255,255,255,0.6)",
    "rgba(255,255,255,0.1)"
  );

  const totalPrice =
  (basePrice || 0) +
  addons.reduce((acc, addonLabel) => {
    const addon = DOMESTIC_ADDONS.find(a => a.label === addonLabel);
    return acc + (addon?.price || 0);
  }, 0);

  const startPayment = async () => {
    const res = await fetch("/api/create-payment-intent", {
      method: "POST",
      body: JSON.stringify({
        amount: totalPrice,
      }),
    });
  
    const data = await res.json();
  
    setClientSecret(data.clientSecret);
  };

  const openBooking = (
    type: "Residential" | "Commercial",
    service: string
  ) => {
    setServiceType(type);
    setSelectedService(service);
    setServiceTypeLocked(true);
    onOpen();
  };

  const closeBooking = () => {
    setServiceType("");
    setSelectedService("");
    setServiceTypeLocked(false);
    setBasePrice(null);
    setAddons([]);
    onClose();
  };

  return (
    <Box position="relative" py={{ base: 24, md: 32 }} px={{ base: 6, md: 16 }}>
      {/* INTRO */}
      <Stack spacing={6} maxW="780px" mx="auto" textAlign="center" mb={28}>
        <Badge px={5} py={1.5} borderRadius="full" bg={`${BRANDG}25`} color={BRANDG} fontWeight="700">
          OUR EXPERTISE
        </Badge>
        <Heading size="2xl" fontWeight="900" color="teal.700">Curated Cleaning Services</Heading>
        <Text fontSize="lg" color="gray.500">
          Precision-crafted cleaning solutions for residential and commercial spaces.
        </Text>
      </Stack>

      {/* RESIDENTIAL */}
      <SignatureSection
        title="Residential Cleaning"
        data={residential}
        cardBg="#004646"
        borderColor={borderColor}
        onBook={(s: string) => openBooking("Residential", s)}
      />

      <Divider my={32} />

      {/* COMMERCIAL */}
      <SignatureSection
        title="Commercial Cleaning"
        data={commercial}
        cardBg="#004646"
        borderColor={borderColor}
        onBook={(s: string) => openBooking("Commercial", s)}
      />

      {/* BOOKING MODAL */}
      <Modal isOpen={isOpen} onClose={closeBooking} isCentered size="lg">
        <ModalOverlay backdropFilter="blur(8px)" />
        <ModalContent borderRadius="2xl" p={6}>
          <ModalHeader fontWeight="800">
            Book {selectedService || "Service"}
          </ModalHeader>
          <ModalCloseButton />
            <ModalBody>
              {selectedService === "Domestic Cleaning" ? (
                <Stack spacing={6}>
                  
                  {/* Property Size */}
                  <Box>
                    <Text fontWeight="600" mb={2}>
                      Property Size
                    </Text>
                    <Select
                      placeholder="Select Property Size"
                      onChange={(e) => {
                        const selected = DOMESTIC_BASE_PRICES.find(
                          (p) => p.label === e.target.value
                        );
                        setBasePrice(selected?.price || 0);
                      }}
                    >
                      {DOMESTIC_BASE_PRICES.map((p) => (
                        <option key={p.label} value={p.label}>
                          {p.label} — £{p.price}
                        </option>
                      ))}
                    </Select>
                  </Box>

                  {/* Add-ons */}
                  <Box>
                    <Text fontWeight="600" mb={3}>
                      Extra Services
                    </Text>

                    <CheckboxGroup>
                      <Stack spacing={2}>
                        {DOMESTIC_ADDONS.map((a) => (
                          <Checkbox
                            key={a.label}
                            isChecked={addons.includes(a.label)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setAddons([...addons, a.label]);
                              } else {
                                setAddons(addons.filter((x) => x !== a.label));
                              }
                            }}
                          >
                            {a.label} — £{a.price}
                          </Checkbox>
                        ))}
                      </Stack>
                    </CheckboxGroup>
                  </Box>

                  {/* Price Summary */}
                  <Box p={4} borderRadius="lg" bg="gray.50">
                    <Text fontWeight="700">Total Price</Text>
                    <Heading size="lg">£{totalPrice}</Heading>
                  </Box>

                  {/* Stripe Checkout */}
                  {clientSecret ? (
                    <Elements stripe={stripePromise} options={{ clientSecret }}>
                      <StripeCardForm clientSecret={clientSecret} />
                    </Elements>
                  ) : (
                    <Button
                      size="lg"
                      borderRadius="xl"
                      bgGradient={`linear(to-r, ${BRAND}, #009ed6)`}
                      color="white"
                      onClick={startPayment}
                      isDisabled={!basePrice}
                    >
                      Pay £{totalPrice}
                    </Button>
                  )}

                </Stack>
              ) : (
                <Stack spacing={4}>
                  <Input placeholder="Full Name" size="lg" borderRadius="xl" />
                  <Input placeholder="Email" size="lg" borderRadius="xl" />
                  <Input placeholder="Phone Number" size="lg" borderRadius="xl" />
                  <Input placeholder="Address" size="lg" borderRadius="xl" />

                  <Textarea
                    placeholder="Service details..."
                    rows={4}
                    borderRadius="xl"
                  />

                  <Button
                    size="lg"
                    borderRadius="xl"
                    bgGradient={`linear(to-r, ${BRAND}, #009ed6)`}
                    color="white"
                    fontWeight="700"
                  >
                    Confirm Booking
                  </Button>
                </Stack>
              )}
            </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};


const SignatureSection = ({
  title,
  data,
  cardBg,
  borderColor,
  onBook,
}: any) => (
  <Stack spacing={12}>
    <Heading size="lg" fontWeight="800" color="teal.700">{title}</Heading>

    <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={10}>
      <MotionBox
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        p={12}
        borderRadius="3xl"
        bg={cardBg}
        border={`1px solid ${borderColor}`}
      >
        <Stack spacing={6}>
          <Icon as={data.featured.icon} boxSize={8} color={BRAND} />
          <Heading size="xl" color="#fff">{data.featured.title}</Heading>
          <Text color="gray.300">{data.featured.desc}</Text>
          <Button
            size="lg"
            borderRadius="xl"
            bgGradient={`linear(to-r, ${BRAND}, #009ed6)`}
            color="white"
            onClick={() => onBook(data.featured.title)}
          >
            Book Signature Service
          </Button>
        </Stack>
      </MotionBox>

      <Stack spacing={4}>
        {data.others.map((s: any) => (
          <Box key={s.title} p={5} borderRadius="xl" border={`1px solid ${borderColor}`}>
            <Heading size="sm">{s.title}</Heading>
            <Text fontSize="sm" color="gray.500">{s.desc}</Text>
          </Box>
        ))}
      </Stack>
    </Grid>
  </Stack>
);
