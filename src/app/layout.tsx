"use client";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ChakraProvider, Box } from "@chakra-ui/react";
import "./globals.css";
import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { TopHeader } from "@/navigation/TopHeader";
import { Header } from "@/navigation/Header";
import { Footer } from "@/navigation/Footer";
import { WhatsAppChatButton } from "@/components/LiveChat";
import Head from "next/head";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin") ?? false;

  return (
    <html lang="en">
      <Head>
        <title>Sparkling White</title>
        <meta name="description" content="Reliable local cleaning & janitorial services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* Android Icons */}
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" />
        {/* More icons if needed */}
      </Head>
      <body style={{ margin: 0, padding: 0 }}>
        <ChakraProvider>
          <Box minH="100vh" display="flex" flexDirection="column" m={0} p={0}>
            {isAdminRoute ? children : <ClientSideLayout>{children}</ClientSideLayout>}
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

const ClientSideLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const isAdminLogin = pathname === "/admin/login";

  useEffect(() => {
    if (pathname.startsWith("/admin") && !isAdminLogin) {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/admin/login");
      }
    }
  }, [pathname, router, isAdminLogin]);

  const isAdminPage = pathname.startsWith("/admin");

  return (
    <>
      {!isAdminPage && (
        <>
          <TopHeader />
          <Header />
        </>
      )}
      <Box flex="1" m={0} p={0}>
        {children}
      </Box>
      {!isAdminPage && (
        <>
          <WhatsAppChatButton />
          <Footer />
        </>
      )}
    </>
  );
};
