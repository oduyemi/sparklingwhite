import { NextResponse } from "next/server";
import crypto from "crypto";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-02-25.clover",
});

const BASE_PRICES: Record<string, number> = {
  "Studio Flat (Appliances)": 130,
  "1 Bed • 1 Bath + Kitchen & Living (Appliances)": 165,
  "2 Bed • 1 Bath + Kitchen & Living (Appliances)": 195,
  "2 Bed • 2 Bath + Kitchen & Living (Appliances)": 240,
  "3 Bed • 1 Bath + Kitchen & Living (Appliances)": 270,
  "3 Bed • 2 Bath + Kitchen & Living (Appliances)": 295,
  "4 Bed • 1 Bath + Kitchen & Living (Appliances)": 330,
  "4 Bed • 2 Bath + Kitchen & Living (Appliances)": 360,
  "5 Bed • 1 Bath + Kitchen & Living (Appliances)": 400,
  "5 Bed • 2 Bath + Kitchen & Living (Appliances)": 445,
  "6 Bed • 1 Bath + Kitchen & Living (Appliances)": 480,
  "6 Bed • 2 Bath + Kitchen & Living (Appliances)": 525,
};

const ADDON_PRICES: Record<string, number> = {
  Conservatory: 40,
  Cloakroom: 20,
  Balcony: 25,
  Garage: 35,
  "Additional Kitchen": 45,
  "Additional Living Room": 40,
  Study: 25,
  "Utility Room": 20,
  Ensuite: 30,
  "Double Oven": 35,
  "AGA Oven": 55,
  "Washing Machine": 20,
  "Dish Washer": 20,
  "Tumble Dryer": 20,
  "Range Cooker": 40,
  Cooker: 35,
  Hood: 20,
  Fridge: 20,
  Freezer: 20,
  "Extractor Fan": 20,
};

export async function POST(req: Request) {
  try {
    const idempotencyKey = crypto.randomUUID();
    const body = await req.json();
    const { service, propertySize, addons = [], customer } = body;
    if (!Array.isArray(addons)) {
      return NextResponse.json(
        { error: "Invalid addons format" },
        { status: 400 }
      );
    }

    if (!customer?.name || !customer?.email || !customer?.phone || !customer?.address) {
      return NextResponse.json(
        { error: "Missing customer information" },
        { status: 400 }
      );
    }

    if (!propertySize) {
      return NextResponse.json(
        { error: "Missing property size" },
        { status: 400 }
      );
    }

    if (!BASE_PRICES[propertySize]) {
      return NextResponse.json(
        { error: "Invalid property size" },
        { status: 400 }
      );
    }
    

    for (const addon of addons) {
      if (!ADDON_PRICES[addon]) {
        return NextResponse.json(
          { error: `Invalid addon: ${addon}` },
          { status: 400 }
        );
      }
    }

    if (addons.length > 10) {
      return NextResponse.json(
        { error: "Too many addons selected" },
        { status: 400 }
      );
    }

    // Calculate base price
    const basePrice = BASE_PRICES[propertySize];
    
    // Calculate addons
    const addonTotal = addons.reduce(
      (sum: number, addon: string) => sum + (ADDON_PRICES[addon] || 0),
      0
    );
    
    const finalAmount = basePrice + addonTotal;
    if (finalAmount <= 0) {
      return NextResponse.json(
        { error: "Invalid price calculation" },
        { status: 400 }
      );
    }

    const paymentIntent = await stripe.paymentIntents.create(
      {
        amount: Math.round(finalAmount * 100),
        currency: "gbp",
        automatic_payment_methods: { enabled: true },
        receipt_email: customer.email,
        description: `${service} - ${propertySize}`,
        metadata: {
          service,
          propertySize,
          addons: JSON.stringify(addons),
          customerName: customer.name,
          customerEmail: customer.email,
          customerPhone: customer.phone,
          customerAddress: customer.address,
        },
      },
      { idempotencyKey }
    );

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      amount: finalAmount,
    });

  } catch (error) {
    console.error("Stripe Error:", error);

    return NextResponse.json(
      { error: "Payment Intent Failed" },
      { status: 500 }
    );
  }
}