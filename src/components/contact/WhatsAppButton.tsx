import React from "react";
import { companyData } from "@/lib/data/company";
import { MessageCircle, ArrowUpRight } from "lucide-react";

export function WhatsAppButton({
  className = "",
  label = "Connect via WhatsApp Concierge",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={companyData.contact.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-between p-5 bg-white rounded-[24px] border border-[#E5E5E5] hover:border-[#171717] transition-all shadow-[0_5px_20px_rgba(0,0,0,0.02)] group ${className}`}
    >
      <div className="flex items-center gap-3.5">
        <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
          <MessageCircle className="w-5 h-5" />
        </div>
        <div>
          <span className="block text-xs font-mono uppercase tracking-wider text-emerald-600">
            Instant Studio Line
          </span>
          <span className="text-sm font-medium text-[#171717]">
            {label}
          </span>
        </div>
      </div>
      <ArrowUpRight className="w-4 h-4 text-[#171717] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}
