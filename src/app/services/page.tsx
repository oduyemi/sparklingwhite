"use client";
import { CTA } from "@/components/home/CTA";
import { WhyUs } from "@/components/home/Features";
import { PricingTable } from "@/components/home/PricingTable";
import { AllServices } from "@/components/services/AllServices";
import { ServicesBanner } from "@/components/services/Banner";



export default function Services() {
  return (
    <div>
        <ServicesBanner />
        <div>
            <AllServices />
        </div>
        <div>
            <WhyUs />
        </div>
        <div>
            <CTA />
        </div>
        <div>
            <PricingTable />
        </div>
    </div>
  );
}
