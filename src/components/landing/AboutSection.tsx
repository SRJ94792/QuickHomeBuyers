"use client";

import { motion } from "framer-motion";
import { Shield, Heart, Clock, Award } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Trusted & Transparent",
    description: "We believe in honest, straightforward deals. No hidden fees, no surprises.",
  },
  {
    icon: Heart,
    title: "Family Owned",
    description: "We're a local, family-owned business that treats every seller like family.",
  },
  {
    icon: Clock,
    title: "Fast & Reliable",
    description: "When we make an offer, we honor it. Close on your timeline, guaranteed.",
  },
  {
    icon: Award,
    title: "10+ Years Experience",
    description: "A decade of successful home purchases. We know how to get deals done.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-background"
      data-testid="about-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your Trusted Local
              <span className="block text-primary">Cash Home Buyers</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Since 2015, QuickHomeBuyers has helped multiple homeowners across New Jersey 
              sell their properties quickly and hassle-free. We're not a big corporation - we're 
              a local, family-owned company that cares about our community.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're facing foreclosure, dealing with an inherited property, 
              or simply need to sell fast, we're here to help. Our goal is to provide 
              you with a fair offer and a smooth, stress-free experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-lg bg-muted/30"
              >
                <value.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
