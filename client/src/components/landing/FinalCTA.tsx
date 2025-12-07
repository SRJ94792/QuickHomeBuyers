import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import LeadForm from "./LeadForm";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-gradient-to-br from-primary/90 to-primary"
      data-testid="final-cta-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Sell Your House?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get your fair cash offer today. No obligation, no pressure - just a 
              simple solution to sell your home fast.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm">
                  1
                </div>
                <span>Fill out the form or call us now</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm">
                  2
                </div>
                <span>Receive your cash offer within 24 hours</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm">
                  3
                </div>
                <span>Close on your schedule and get paid</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <p className="text-white/80">Prefer to talk? Call us:</p>
              <a
                href="tel:+18005551234"
                className="flex items-center gap-2 text-xl font-bold text-white bg-white/20 px-4 py-2 rounded-lg"
                data-testid="cta-phone"
              >
                <Phone className="w-5 h-5" />
                (800) 555-1234
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="max-w-md mx-auto lg:ml-auto lg:mr-0">
              <LeadForm variant="hero" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
