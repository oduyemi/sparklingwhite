"use client";
import { ContactUs } from "@/components/contact";
import { ContactsBanner } from "@/components/contact/Banner";



export default function Contact() {
  return (
    <div>
        <ContactsBanner />
        <ContactUs />
    </div>
  );
}
