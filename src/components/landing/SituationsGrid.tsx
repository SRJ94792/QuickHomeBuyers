"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Home,
  Wrench,
  Building,
  Users,
  Truck,
  DollarSign,
  Clock,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const situations = [
  {
    icon: AlertTriangle,
    title: "Facing Foreclosure",
    description: "Avoid foreclosure and protect your credit. We can close fast to help you move on.",
  },
  {
    icon: Home,
    title: "Inherited Property",
    description: "Dealing with an inherited home? Skip the hassle of repairs and sell as-is.",
  },
  {
    icon: Wrench,
    title: "Needs Major Repairs",
    description: "Damaged roof, foundation issues, or outdated systems? We buy homes in any condition.",
  },
  {
    icon: Building,
    title: "Vacant Property",
    description: "Tired of maintaining an empty house? Convert it to cash without the burden.",
  },
  {
    icon: Users,
    title: "Difficult Tenants",
    description: "Problem tenants causing stress? Sell your rental property to us, tenants included.",
  },
  {
    icon: Truck,
    title: "Relocating Quickly",
    description: "New job or life change? We can close on your timeline for a smooth transition.",
  },
  {
    icon: DollarSign,
    title: "Avoid Agent Fees",
    description: "Keep more money in your pocket. No commissions, no hidden fees.",
  },
  {
    icon: Clock,
    title: "Financial Hardship",
    description: "Going through tough times? Get the cash you need quickly and confidentially.",
  },
];

export default function SituationsGrid() {
  return (
    <section
      id="situations"
      className="py-20 md:py-28 bg-background"
      data-testid="situations-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            We Help Homeowners in Any Situation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No matter your circumstances, we're here to provide a fair cash offer 
            and a stress-free selling experience.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {situations.map((situation, index) => (
            <motion.div
              key={situation.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="p-6 h-full hover-elevate transition-transform">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <situation.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {situation.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {situation.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
