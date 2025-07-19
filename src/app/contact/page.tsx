"use client";
import { ContactUs } from "@/components/contact";
import { ContactsBanner } from "@/components/contact/Banner";



export default function ContactPage() {
  return (
    <div>
        <ContactsBanner />
        <ContactUs />
    </div>
  );
}
