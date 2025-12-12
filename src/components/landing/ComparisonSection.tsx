"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";

const comparisonData = [
  { feature: "Commission Fees", us: "Zero - $0", them: "5-6% of sale price" },
  { feature: "Closing Costs", us: "We cover them", them: "You pay 2-4%" },
  { feature: "Repairs Needed", us: "None - sell as-is", them: "Often required" },
  { feature: "Time to Close", us: "7-14 days", them: "45-90 days" },
  { feature: "Showings & Open Houses", us: "None required", them: "Multiple visits" },
  { feature: "Financing Contingency", us: "None - all cash", them: "Buyer's loan approval" },
  { feature: "Closing Date", us: "You choose", them: "Depends on buyer" },
  { feature: "Certainty of Sale", us: "Guaranteed", them: "Deals can fall through" },
];

export default function ComparisonSection() {
  return (
    <section
      id="comparison"
      className="py-20 md:py-28 bg-muted/30"
      data-testid="comparison-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Sell to Us?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how our process compares to selling with a traditional real estate agent.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden"
        >
          <Card className="overflow-hidden">
            <div className="grid grid-cols-3 bg-muted/50">
              <div className="p-4 md:p-6 font-semibold text-muted-foreground text-sm md:text-base">
                Feature
              </div>
              <div className="p-4 md:p-6 font-semibold text-primary text-sm md:text-base text-center bg-primary/5">
                Our Process
              </div>
              <div className="p-4 md:p-6 font-semibold text-muted-foreground text-sm md:text-base text-center">
                Traditional Agent
              </div>
            </div>

            {comparisonData.map((row, index) => (
              <motion.div
                key={row.feature}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`grid grid-cols-3 ${
                  index < comparisonData.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="p-4 md:p-6 text-sm md:text-base text-foreground">
                  {row.feature}
                </div>
                <div className="p-4 md:p-6 text-sm md:text-base text-center bg-primary/5">
                  <div className="flex items-center justify-center gap-2">
                    <Check className="w-4 h-4 text-success flex-shrink-0" />
                    <span className="text-foreground">{row.us}</span>
                  </div>
                </div>
                <div className="p-4 md:p-6 text-sm md:text-base text-center">
                  <div className="flex items-center justify-center gap-2">
                    <X className="w-4 h-4 text-destructive flex-shrink-0" />
                    <span className="text-muted-foreground">{row.them}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
