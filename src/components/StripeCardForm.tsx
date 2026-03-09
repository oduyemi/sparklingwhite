"use client";

import { useState } from "react";
import {
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import {
  Box,
  Button,
  Text,
  VStack,
  Heading,
  Alert,
  AlertIcon,
  Spinner,
} from "@chakra-ui/react";

export default function StripeCardForm({ clientSecret }: any) {
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    if (!stripe || !elements) return;

    setLoading(true);
    setErrorMsg(null);

    const card = elements.getElement(CardElement);

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card!,
        },
      }
    );

    setLoading(false);

    if (error) {
      setErrorMsg(error.message || "Payment failed.");
      return;
    }

    if (paymentIntent?.status === "succeeded") {
      setSuccess(true);
    }
  };

  return (
    <Box
      bg="white"
      p={8}
      rounded="xl"
      shadow="lg"
      border="1px solid"
      borderColor="gray.100"
      maxW="420px"
      w="full"
    >
      <VStack spacing={6} align="stretch">
        <Heading size="md">Secure Payment</Heading>

        <Text fontSize="sm" color="gray.500">
          Your card information is encrypted and processed securely by Stripe.
        </Text>

        {errorMsg && (
          <Alert status="error" rounded="md">
            <AlertIcon />
            {errorMsg}
          </Alert>
        )}

        {success ? (
          <Alert status="success" rounded="md">
            <AlertIcon />
            Payment successful!
          </Alert>
        ) : (
          <>
            <Box
              p={4}
              border="1px solid"
              borderColor="gray.200"
              rounded="md"
              bg="gray.50"
            >
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#1A202C",
                      "::placeholder": {
                        color: "#A0AEC0",
                      },
                    },
                    invalid: {
                      color: "#E53E3E",
                    },
                  },
                }}
              />
            </Box>

            <Button
              size="lg"
              colorScheme="teal"
              onClick={handleSubmit}
              isDisabled={!stripe}
              w="full"
            >
              {loading ? <Spinner size="sm" /> : "Pay Securely"}
            </Button>
          </>
        )}

        <Text fontSize="xs" color="gray.400" textAlign="center">
          Payments are securely processed by Stripe.
        </Text>
      </VStack>
    </Box>
  );
}