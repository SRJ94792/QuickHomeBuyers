import { motion } from "framer-motion";
import LeadForm from "./LeadForm";
import heroImage from "@assets/generated_images/modern_luxury_home_exterior.png";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20"
      data-testid="hero-section"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Sell Your House
              <span className="block text-primary">For Cash Today</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg">
              Get a fair, all-cash offer within 24 hours. No fees, no commissions, 
              no repairs needed. Close in as little as 7 days.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-white/80">
                <span className="w-2 h-2 rounded-full bg-success" />
                <span>No Fees</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <span className="w-2 h-2 rounded-full bg-success" />
                <span>No Commissions</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <span className="w-2 h-2 rounded-full bg-success" />
                <span>Close in 7 Days</span>
              </div>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
