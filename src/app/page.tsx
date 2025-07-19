"use client";
import { AboutHome } from "@/components/home/About";
import { Banner } from "@/components/home/Banner";
import { CTA } from "@/components/home/CTA";
import { FAQ } from "@/components/home/FAQ";
import { WhyUs } from "@/components/home/Features";
import { OurServices } from "@/components/home/OurServices";
import { PricingTable } from "@/components/home/PricingTable";


export default function Home() {
  return (
    <div>
      <Banner />
      <div>
          <AboutHome />
      </div>
      <div>
        <OurServices />
      </div>
      <div>
        <WhyUs />
      </div>
      <div>
        <FAQ />
      </div>
      <div>
        <PricingTable />
      </div>
      <div>
        <CTA />
      </div>
    </div>
  );
}
