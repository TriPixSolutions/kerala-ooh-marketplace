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
      className={`inline-flex items-center justify-between p-5 bg-[#121612] border border-emerald-500/30 hover:border-emerald-500/60 text-[#f6f4f0] transition-all group ${className}`}
    >
      <div className="flex items-center gap-3.5">
        <div className="w-10 h-10 bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
          <MessageCircle className="w-5 h-5" />
        </div>
        <div>
          <span className="block text-xs font-mono uppercase tracking-wider text-emerald-400">
            Instant Atelier Line
          </span>
          <span className="text-sm font-light text-[#f6f4f0]">
            {label}
          </span>
        </div>
      </div>
      <ArrowUpRight className="w-4 h-4 text-emerald-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}
