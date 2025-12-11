import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LeadFormProps {
  variant?: "hero" | "footer";
  onSubmit?: (data: FormData) => void;
}

interface FormData {
  address: string;
  phone: string;
  email: string;
}

function formatPhoneNumber(value: string): string {
  const numbers = value.replace(/\D/g, "");
  if (numbers.length <= 3) return numbers;
  if (numbers.length <= 6) return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
  return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
}

export default function LeadForm({ variant = "hero", onSubmit }: LeadFormProps) {
  const [formData, setFormData] = useState<FormData>({
    address: "",
    phone: "",
    email: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.address.trim()) newErrors.address = "Property address is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (formData.phone.replace(/\D/g, "").length < 10) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // todo: remove mock functionality - simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    onSubmit?.(formData);
    console.log("Form submitted:", formData);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData({ ...formData, phone: formatted });
    if (errors.phone) setErrors({ ...errors, phone: undefined });
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`flex flex-col items-center justify-center p-8 rounded-lg text-center ${
          variant === "hero" ? "bg-white/10 backdrop-blur-md" : "bg-card"
        }`}
        data-testid="form-success"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <CheckCircle2 className="w-16 h-16 text-success mb-4" />
        </motion.div>
        <h3 className={`text-xl font-bold mb-2 ${variant === "hero" ? "text-white" : "text-foreground"}`}>
          Thank You!
        </h3>
        <p className={`text-sm ${variant === "hero" ? "text-white/80" : "text-muted-foreground"}`}>
          We've received your request. Our team will contact you within 24 hours with your cash offer.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`space-y-4 p-6 rounded-lg ${
        variant === "hero"
          ? "bg-white/10 backdrop-blur-md border border-white/20"
          : "bg-card border border-card-border"
      }`}
      data-testid="lead-form"
    >
      <div className="space-y-1.5">
        <Label
          htmlFor="address"
          className={variant === "hero" ? "text-white" : "text-foreground"}
        >
          Property Address
        </Label>
        <Input
          id="address"
          type="text"
          placeholder="Enter your property address"
          value={formData.address}
          onChange={(e) => {
            setFormData({ ...formData, address: e.target.value });
            if (errors.address) setErrors({ ...errors, address: undefined });
          }}
          className={`${
            variant === "hero"
              ? "bg-white/90 text-foreground placeholder:text-muted-foreground border-transparent"
              : ""
          } ${errors.address ? "border-destructive" : ""}`}
          data-testid="input-address"
        />
        {errors.address && (
          <p className="text-xs text-destructive">{errors.address}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label
          htmlFor="phone"
          className={variant === "hero" ? "text-white" : "text-foreground"}
        >
          Phone Number
        </Label>
        <Input
          id="phone"
          type="tel"
          placeholder="(555) 555-5555"
          value={formData.phone}
          onChange={handlePhoneChange}
          maxLength={14}
          className={`${
            variant === "hero"
              ? "bg-white/90 text-foreground placeholder:text-muted-foreground border-transparent"
              : ""
          } ${errors.phone ? "border-destructive" : ""}`}
          data-testid="input-phone"
        />
        {errors.phone && (
          <p className="text-xs text-destructive">{errors.phone}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label
          htmlFor="email"
          className={variant === "hero" ? "text-white" : "text-foreground"}
        >
          Email Address
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
            if (errors.email) setErrors({ ...errors, email: undefined });
          }}
          className={`${
            variant === "hero"
              ? "bg-white/90 text-foreground placeholder:text-muted-foreground border-transparent"
              : ""
          } ${errors.email ? "border-destructive" : ""}`}
          data-testid="input-email"
        />
        {errors.email && (
          <p className="text-xs text-destructive">{errors.email}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-cta text-cta-foreground text-base py-6"
        data-testid="button-submit-form"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Submitting...
          </>
        ) : (
          "Get My Cash Offer"
        )}
      </Button>

      <p className={`text-xs text-center ${variant === "hero" ? "text-white/70" : "text-muted-foreground"}`}>
        No obligation. 100% free. Your info is safe with us.
      </p>
    </form>
  );
}
