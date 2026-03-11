"use client";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Box } from "@chakra-ui/react";
import { TopHeader } from "@/navigation/TopHeader";
import { Header } from "@/navigation/Header";
import { Footer } from "@/navigation/Footer";
import { WhatsAppChatButton } from "@/components/LiveChat";

export const ClientSideLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
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