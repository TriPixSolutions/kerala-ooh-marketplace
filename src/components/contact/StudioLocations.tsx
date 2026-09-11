import React from "react";
import { companyData } from "@/lib/data/company";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";

export function StudioLocations() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {companyData.studios.map((studio) => (
        <div
          key={studio.city}
          className="p-8 bg-white rounded-2xl border border-[#E5E5E5] flex flex-col justify-between shadow-sm transition-all hover:border-[#8B6A4D]/40"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#8B6A4D]">
                {studio.type}
              </span>
              <MapPin className="w-4 h-4 text-[#8B6A4D]" />
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-[#111111] mb-3">
              {studio.city}
            </h3>

            <p className="text-sm text-[#555555] leading-relaxed mb-6 font-normal">
              {studio.address}, {studio.area}
            </p>

            <div className="space-y-2.5 pt-4 border-t border-[#E5E5E5] text-xs font-mono text-[#6B6B6B]">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#8B6A4D]" />
                <span>{studio.hours}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#8B6A4D]" />
                <a
                  href={`tel:${studio.phone}`}
                  className="hover:text-[#171717] transition-colors"
                >
                  {studio.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#8B6A4D]" />
                <a
                  href={`mailto:${studio.email}`}
                  className="hover:text-[#171717] transition-colors"
                >
                  {studio.email}
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-[#E5E5E5]">
            <a
              href={studio.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-[#171717] hover:text-[#8B6A4D] transition-colors"
            >
              Open Studio Location Map <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
