import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import avatar1 from "@assets/generated_images/professional_woman_testimonial_avatar.png";
import avatar2 from "@assets/generated_images/professional_man_testimonial_avatar.png";
import avatar3 from "@assets/generated_images/young_professional_woman_avatar.png";

// todo: remove mock functionality - replace with real testimonials from API
const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    location: "Phoenix, AZ",
    avatar: avatar1,
    rating: 5,
    text: "I was facing foreclosure and felt completely overwhelmed. QuickHomeBuyers gave me a fair cash offer within 24 hours and we closed in just 10 days. They saved my credit and gave me peace of mind. I can't thank them enough!",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    location: "Dallas, TX",
    avatar: avatar2,
    rating: 5,
    text: "After inheriting my parent's home, I needed to sell fast since I live out of state. The team was professional, transparent, and handled everything. No repairs, no cleaning - they took it exactly as it was. Highly recommend!",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    location: "Tampa, FL",
    avatar: avatar3,
    rating: 5,
    text: "I was skeptical at first, but QuickHomeBuyers exceeded my expectations. Their offer was fair, the process was simple, and I had cash in my account in under two weeks. Best decision I made!",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-muted/30"
      data-testid="testimonials-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Sellers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of satisfied homeowners who chose the faster, easier way to sell.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <Avatar className="w-20 h-20 flex-shrink-0">
                    <AvatarImage
                      src={testimonials[current].avatar}
                      alt={testimonials[current].name}
                    />
                    <AvatarFallback>
                      {testimonials[current].name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                      {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-cta text-cta"
                        />
                      ))}
                    </div>

                    <blockquote className="text-lg md:text-xl text-foreground mb-6 leading-relaxed">
                      "{testimonials[current].text}"
                    </blockquote>

                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <span className="font-semibold text-foreground">
                        {testimonials[current].name}
                      </span>
                      <BadgeCheck className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">
                        {testimonials[current].location}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              data-testid="button-testimonial-prev"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === current ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                  data-testid={`testimonial-dot-${index}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              data-testid="button-testimonial-next"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
