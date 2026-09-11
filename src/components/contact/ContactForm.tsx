"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/shared/Button";
import { CheckCircle2, AlertCircle, Send, Sparkles } from "lucide-react";

const inquirySchema = z.object({
  fullName: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid architectural or corporate email address."),
  phone: z.string().min(8, "Please enter a valid phone number for concierge contact."),
  companyName: z.string().optional(),
  projectType: z.enum([
    "residential",
    "commercial",
    "architect-spec",
    "hospitality",
    "kitchen-wardrobe",
    "other",
  ]),
  materialsInterested: z.array(z.string()).min(1, "Please select at least one material discipline."),
  timeline: z.string().min(1, "Please select an estimated project timeline."),
  message: z.string().min(10, "Please provide brief context regarding your project scope."),
});

type InquiryFormValues = z.infer<typeof inquirySchema>;

export function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      companyName: "",
      projectType: "residential",
      materialsInterested: ["Veneers"],
      timeline: "1-3 months",
      message: "",
    },
  });

  const selectedMaterials = watch("materialsInterested") || [];

  const materialOptions = [
    "Veneers",
    "Decorative Materials",
    "Hardware Solutions",
    "Plywood & Boards",
    "Home Applications",
    "Custom Craftsmanship",
  ];

  const handleMaterialToggle = (material: string) => {
    if (selectedMaterials.includes(material)) {
      setValue(
        "materialsInterested",
        selectedMaterials.filter((m) => m !== material),
        { shouldValidate: true }
      );
    } else {
      setValue("materialsInterested", [...selectedMaterials, material], {
        shouldValidate: true,
      });
    }
  };

  const onSubmit = async (data: InquiryFormValues) => {
    setIsSubmitting(true);
    // Simulate brief network submission
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="bg-[#121418] border border-[#c5a880]/40 p-8 sm:p-12 text-center">
        <div className="w-16 h-16 rounded-full bg-[#c5a880]/15 flex items-center justify-center mx-auto mb-6 text-[#c5a880]">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-light text-[#f6f4f0] mb-3">
          Inquiry Successfully Lodged
        </h3>
        <p className="text-sm text-[#9ea3b0] leading-relaxed max-w-lg mx-auto mb-8">
          Thank you. Our senior architectural materials consultant will review your project parameters and reach out within one business day with material recommendations and swatch booking details.
        </p>
        <Button
          variant="brass"
          size="md"
          onClick={() => {
            setIsSuccess(false);
            reset();
          }}
        >
          Submit Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-[#111317] border border-white/[0.08] p-6 sm:p-10 lg:p-12 space-y-8"
    >
      <div className="border-b border-white/[0.08] pb-6">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#c5a880] mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Concierge Specification</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-light text-[#f6f4f0]">
          Commission a Material Consultation
        </h3>
        <p className="text-xs sm:text-sm text-[#9ea3b0] mt-1 font-light">
          Fill in the details below to connect with our materials atelier and request tailored project samples.
        </p>
      </div>

      {/* Row 1: Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-[#9ea3b0] mb-2">
            Full Name *
          </label>
          <input
            {...register("fullName")}
            placeholder="e.g. Maya Menon"
            className="w-full bg-[#16191f] border border-white/[0.1] px-4 py-3 text-sm text-[#f6f4f0] focus:border-[#c5a880] focus:outline-none transition-colors"
          />
          {errors.fullName && (
            <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-[#9ea3b0] mb-2">
            Official Email Address *
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="maya@studiomenon.com"
            className="w-full bg-[#16191f] border border-white/[0.1] px-4 py-3 text-sm text-[#f6f4f0] focus:border-[#c5a880] focus:outline-none transition-colors"
          />
          {errors.email && (
            <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* Row 2: Phone & Architecture Practice / Firm */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-[#9ea3b0] mb-2">
            Phone / Mobile Number *
          </label>
          <input
            {...register("phone")}
            placeholder="+91 98460 12345"
            className="w-full bg-[#16191f] border border-white/[0.1] px-4 py-3 text-sm text-[#f6f4f0] focus:border-[#c5a880] focus:outline-none transition-colors"
          />
          {errors.phone && (
            <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-[#9ea3b0] mb-2">
            Architecture Firm / Practice (Optional)
          </label>
          <input
            {...register("companyName")}
            placeholder="e.g. Menon & Partners Architects"
            className="w-full bg-[#16191f] border border-white/[0.1] px-4 py-3 text-sm text-[#f6f4f0] focus:border-[#c5a880] focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Row 3: Project Type & Timeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-[#9ea3b0] mb-2">
            Project Typology *
          </label>
          <select
            {...register("projectType")}
            className="w-full bg-[#16191f] border border-white/[0.1] px-4 py-3 text-sm text-[#f6f4f0] focus:border-[#c5a880] focus:outline-none transition-colors"
          >
            <option value="residential">Private Residential Estate / Villa</option>
            <option value="commercial">Commercial Corporate Headquarters</option>
            <option value="kitchen-wardrobe">Turnkey Kitchen & Dressing Suite</option>
            <option value="hospitality">Luxury Hospitality / Boutique Hotel</option>
            <option value="architect-spec">Architectural Specification / Swatch Library</option>
            <option value="other">Bespoke Custom Furniture Commission</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-[#9ea3b0] mb-2">
            Execution Timeline *
          </label>
          <select
            {...register("timeline")}
            className="w-full bg-[#16191f] border border-white/[0.1] px-4 py-3 text-sm text-[#f6f4f0] focus:border-[#c5a880] focus:outline-none transition-colors"
          >
            <option value="immediate">Immediate (Ready for Site Fitout)</option>
            <option value="1-3 months">1 – 3 Months (Schematic Finalization)</option>
            <option value="3-6 months">3 – 6 Months (Under Construction)</option>
            <option value="spec-only">General Architectural Specification</option>
          </select>
        </div>
      </div>

      {/* Materials Interested in */}
      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-[#9ea3b0] mb-3">
          Disciplines / Materials of Interest * (Select all that apply)
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {materialOptions.map((mat) => {
            const isSelected = selectedMaterials.includes(mat);
            return (
              <button
                type="button"
                key={mat}
                onClick={() => handleMaterialToggle(mat)}
                className={`text-left p-3 border transition-all cursor-pointer text-xs font-mono ${
                  isSelected
                    ? "border-[#c5a880] bg-[#c5a880]/15 text-[#e4d5be]"
                    : "border-white/[0.08] bg-[#16191f] text-[#9ea3b0] hover:text-[#f6f4f0] hover:border-white/[0.2]"
                }`}
              >
                {mat}
              </button>
            );
          })}
        </div>
        {errors.materialsInterested && (
          <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.materialsInterested.message}
          </p>
        )}
      </div>

      {/* Message / Scope */}
      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-[#9ea3b0] mb-2">
          Project Overview & Scope Details *
        </label>
        <textarea
          {...register("message")}
          rows={4}
          placeholder="Please share approximate square footage, site location, particular wood species desired, or specific hardware requirements..."
          className="w-full bg-[#16191f] border border-white/[0.1] px-4 py-3 text-sm text-[#f6f4f0] focus:border-[#c5a880] focus:outline-none transition-colors resize-none"
        />
        {errors.message && (
          <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2 flex items-center justify-between">
        <Button
          type="submit"
          variant="brass"
          size="lg"
          disabled={isSubmitting}
          className="w-full sm:w-auto"
        >
          <Send className="w-4 h-4 mr-2" />
          {isSubmitting ? "Transmitting Specification..." : "Transmit Architectural Inquiry"}
        </Button>
      </div>
    </form>
  );
}
