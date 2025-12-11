import { motion } from "framer-motion";
import { Phone, Mail, Handshake, TrendingUp, Users, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function InvestorSection() {
  return (
    <section
      id="investors"
      className="py-20 md:py-28 bg-foreground"
      data-testid="investor-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-background mb-6">
              Interested in Investing?
            </h2>
            <p className="text-xl text-background/80 mb-6">
              Whether you're looking to get involved in real estate investing, partner on 
              deals, or explore joint venture opportunities, we'd love to connect with you.
            </p>
            <p className="text-lg text-background/70 mb-8">
              We're always open to working with like-minded investors who share our vision 
              for creating win-win situations. From fix-and-flip projects to buy-and-hold 
              rentals, there are numerous ways we can collaborate and grow together in 
              the New Jersey real estate market.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-3 text-background/80">
                <Handshake className="w-5 h-5 text-primary" />
                <span>Joint Ventures</span>
              </div>
              <div className="flex items-center gap-3 text-background/80">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span>Deal Partnerships</span>
              </div>
              <div className="flex items-center gap-3 text-background/80">
                <Building className="w-5 h-5 text-primary" />
                <span>Wholesale Deals</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+18005551234" data-testid="investor-phone">
                <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground">
                  <Phone className="w-5 h-5 mr-2" />
                  (800) 555-1234
                </Button>
              </a>
              <a href="mailto:invest@quickhomebuyers.com" data-testid="investor-email">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-background/30 text-background">
                  <Mail className="w-5 h-5 mr-2" />
                  invest@quickhomebuyers.com
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-background/10 rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold text-background mb-6">
              Why Partner With Us?
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-background mb-1">Experienced Team</h4>
                  <p className="text-background/70 text-sm">
                    10+ years of experience navigating the New Jersey real estate market 
                    with a proven track record of successful transactions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-background mb-1">Deal Flow</h4>
                  <p className="text-background/70 text-sm">
                    Access to consistent deal flow and off-market opportunities 
                    throughout New Jersey.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Handshake className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-background mb-1">Transparent Partnerships</h4>
                  <p className="text-background/70 text-sm">
                    We believe in clear communication and fair terms. 
                    Every partnership is built on trust and mutual benefit.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-background/20">
              <p className="text-background/80 text-center">
                Ready to discuss opportunities? Reach out directly - we respond within 24 hours.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
