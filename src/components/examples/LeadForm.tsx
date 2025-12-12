"use client";

import LeadForm from "../landing/LeadForm";

export default function LeadFormExample() {
  return (
    <div className="max-w-md mx-auto">
      <LeadForm variant="footer" onSubmit={(data) => console.log("Form submitted:", data)} />
    </div>
  );
}
