"use client";
import { AboutIntro } from "@/components/about/Intro";
import { AboutBanner } from "@/components/about/Banner";
import { Story } from "@/components/about/Story";
import { CTA } from "@/components/home/CTA";



export default function About() {
  return (
    <div>
        <AboutBanner />
        <AboutIntro />
        <CTA />
        <Story />
    </div>
  );
}
