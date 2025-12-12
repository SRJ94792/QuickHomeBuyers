"use client";

import { motion } from "framer-motion";
import { FileText, DollarSign, Handshake } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Contact Us",
    description: "Fill out our simple form or give us a call. Tell us about your property - any condition is okay.",
  },
  {
    icon: DollarSign,
    title: "Get Your Offer",
    description: "We'll evaluate your property and present you with a fair, no-obligation cash offer within 24 hours.",
  },
  {
    icon: Handshake,
    title: "Close & Get Paid",
    description: "Accept our offer and choose your closing date. Get paid in as little as 7 days.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 md:py-28 bg-background"
      data-testid="how-it-works-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Selling your house for cash has never been easier. Our simple 3-step process
            gets you from start to closing faster than traditional real estate.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-border" />
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative text-center"
              >
                <div className="relative z-10 mx-auto w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-cta text-cta-foreground flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
