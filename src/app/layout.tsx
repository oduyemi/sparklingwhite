import { ChakraProvider, Box } from "@chakra-ui/react";
import "./globals.css";
import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Script from "next/script";
import type { Metadata } from "next";
import { ClientSideLayout } from "@/components/ClientsideLayout";

export const metadata: Metadata = {
  title: "Professional Cleaning Services UK | Sparkling White Limited",
  description:
    "Sparkling White Limited provides professional domestic and commercial cleaning services across the UK. Deep cleaning, end-of-tenancy cleaning, carpet cleaning, and office cleaning available 24/7.",
  keywords: [
    "cleaning services UK",
    "professional cleaners UK",
    "domestic cleaning UK",
    "commercial cleaning UK",
    "end of tenancy cleaning UK",
    "deep cleaning UK",
    "carpet cleaning UK",
  ],
  openGraph: {
    title: "Professional Cleaning Services UK | Sparkling White Limited",
    description:
      "Trusted domestic and commercial cleaning company serving customers across the United Kingdom.",
    url: "https://sparklingwhitelimited.co.uk",
    siteName: "Sparkling White Limited",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <ChakraProvider>
          <Box minH="100vh" display="flex" flexDirection="column" m={0} p={0}>
            <ClientSideLayout>{children}</ClientSideLayout>
          </Box>
        </ChakraProvider>

        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}