"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/shared/Button";
import { CheckCircle2, AlertCircle, Send } from "lucide-react";

const inquirySchema = z.object({
  fullName: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid architectural or corporate email address."),
  phone: z.string().min(8, "Please enter a valid phone number."),
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
    "Decorative Surfaces",
    "Plywood",
    "Architectural Boards",
    "Hardware Solutions",
    "Interior Applications",
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
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-2xl border border-[#E5E5E5] p-8 sm:p-14 text-center shadow-sm">
        <div className="w-16 h-16 rounded-full bg-[#8B6A4D]/10 flex items-center justify-center mx-auto mb-6 text-[#8B6A4D]">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-serif text-3xl font-medium tracking-tight text-[#111111] mb-3">
          Inquiry Successfully Sent
        </h3>
        <p className="text-sm text-[#555555] leading-relaxed max-w-lg mx-auto mb-8 font-normal">
          Thank you. Our material specification team will review your project parameters and respond within one business day with material recommendations and swatch booking details.
        </p>
        <Button
          variant="pill-dark"
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
      className="bg-white rounded-2xl border border-[#E5E5E5] p-8 sm:p-12 space-y-8 shadow-sm"
    >
      <div className="border-b border-[#E5E5E5] pb-6">
        <span className="text-xs font-mono uppercase tracking-widest text-[#8B6A4D] mb-2 block">
          Direct Specification
        </span>
        <h3 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#111111]">
          Send an Inquiry
        </h3>
        <p className="text-sm text-[#555555] mt-1 font-normal">
          Share your project details to connect directly with our materials team and request tailored swatch samples.
        </p>
      </div>

      {/* Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-medium uppercase tracking-wider text-[#171717] mb-2">
            Full Name *
          </label>
          <input
            {...register("fullName")}
            placeholder="e.g. Ar. Maya Menon"
            className="w-full bg-[#F7F5F2] border border-[#E5E5E5] rounded-xl px-4 py-3 text-sm text-[#171717] focus:border-[#171717] focus:bg-white focus:outline-none transition-all"
          />
          {errors.fullName && (
            <p className="text-xs text-rose-500 mt-1.5 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-medium uppercase tracking-wider text-[#171717] mb-2">
            Official Email *
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="maya@studiomenon.com"
            className="w-full bg-[#F7F5F2] border border-[#E5E5E5] rounded-xl px-4 py-3 text-sm text-[#171717] focus:border-[#171717] focus:bg-white focus:outline-none transition-all"
          />
          {errors.email && (
            <p className="text-xs text-rose-500 mt-1.5 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-medium uppercase tracking-wider text-[#171717] mb-2">
            Phone Number *
          </label>
          <input
            {...register("phone")}
            placeholder="+91 98460 12345"
            className="w-full bg-[#F7F5F2] border border-[#E5E5E5] rounded-xl px-4 py-3 text-sm text-[#171717] focus:border-[#171717] focus:bg-white focus:outline-none transition-all"
          />
          {errors.phone && (
            <p className="text-xs text-rose-500 mt-1.5 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-medium uppercase tracking-wider text-[#171717] mb-2">
            Design Studio / Firm
          </label>
          <input
            {...register("companyName")}
            placeholder="e.g. Menon & Partners"
            className="w-full bg-[#F7F5F2] border border-[#E5E5E5] rounded-xl px-4 py-3 text-sm text-[#171717] focus:border-[#171717] focus:bg-white focus:outline-none transition-all"
          />
        </div>
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-medium uppercase tracking-wider text-[#171717] mb-2">
            Project Typology *
          </label>
          <select
            {...register("projectType")}
            className="w-full bg-[#F7F5F2] border border-[#E5E5E5] rounded-xl px-4 py-3 text-sm text-[#171717] focus:border-[#171717] focus:bg-white focus:outline-none transition-all"
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
          <label className="block text-xs font-medium uppercase tracking-wider text-[#171717] mb-2">
            Execution Timeline *
          </label>
          <select
            {...register("timeline")}
            className="w-full bg-[#F7F5F2] border border-[#E5E5E5] rounded-xl px-4 py-3 text-sm text-[#171717] focus:border-[#171717] focus:bg-white focus:outline-none transition-all"
          >
            <option value="immediate">Immediate (Ready for Site Fitout)</option>
            <option value="1-3 months">1 – 3 Months (Schematic Finalization)</option>
            <option value="3-6 months">3 – 6 Months (Under Construction)</option>
            <option value="spec-only">General Architectural Specification</option>
          </select>
        </div>
      </div>

      {/* Material Selection */}
      <div>
        <label className="block text-xs font-medium uppercase tracking-wider text-[#171717] mb-3">
          Disciplines of Interest *
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {materialOptions.map((mat) => {
            const isSelected = selectedMaterials.includes(mat);
            return (
              <button
                type="button"
                key={mat}
                onClick={() => handleMaterialToggle(mat)}
                className={`text-left p-3 rounded-xl border transition-all cursor-pointer text-xs font-medium ${
                  isSelected
                    ? "border-[#171717] bg-[#171717] text-white"
                    : "border-[#E5E5E5] bg-[#F7F5F2] text-[#6B6B6B] hover:text-[#171717] hover:border-[#171717]"
                }`}
              >
                {mat}
              </button>
            );
          })}
        </div>
        {errors.materialsInterested && (
          <p className="text-xs text-rose-500 mt-1.5 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.materialsInterested.message}
          </p>
        )}
      </div>

      {/* Scope Message */}
      <div>
        <label className="block text-xs font-medium uppercase tracking-wider text-[#171717] mb-2">
          Project Overview & Scope Details *
        </label>
        <textarea
          {...register("message")}
          rows={4}
          placeholder="Please describe approximate square footage, site location, particular wood species desired, or specific hardware requirements..."
          className="w-full bg-[#F7F5F2] border border-[#E5E5E5] rounded-xl px-4 py-3 text-sm text-[#171717] focus:border-[#171717] focus:bg-white focus:outline-none transition-all resize-none"
        />
        {errors.message && (
          <p className="text-xs text-rose-500 mt-1.5 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.message.message}
          </p>
        )}
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          variant="pill-dark"
          size="lg"
          disabled={isSubmitting}
          className="w-full sm:w-auto"
        >
          <Send className="w-4 h-4 mr-2" />
          {isSubmitting ? "Transmitting..." : "Send Architectural Inquiry"}
        </Button>
      </div>
    </form>
  );
}
