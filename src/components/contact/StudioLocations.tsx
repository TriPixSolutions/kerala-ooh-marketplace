import React from "react";
import { companyData } from "@/lib/data/company";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";

export function StudioLocations() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {companyData.studios.map((studio) => (
        <div
          key={studio.city}
          className="p-8 bg-[#111317] border border-white/[0.08] hover:border-[#c5a880]/40 transition-all flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#c5a880]">
                {studio.type}
              </span>
              <MapPin className="w-4 h-4 text-[#c5a880]" />
            </div>

            <h4 className="text-2xl font-light text-[#f6f4f0] mb-3">
              {studio.city}
            </h4>

            <p className="text-sm font-light text-[#9ea3b0] leading-relaxed mb-6">
              {studio.address}, {studio.area}
            </p>

            <div className="space-y-2.5 pt-4 border-t border-white/[0.06] text-xs font-mono text-[#9ea3b0]">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>{studio.hours}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
                <a
                  href={`tel:${studio.phone}`}
                  className="hover:text-[#f6f4f0] transition-colors"
                >
                  {studio.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#c5a880]" />
                <a
                  href={`mailto:${studio.email}`}
                  className="hover:text-[#f6f4f0] transition-colors"
                >
                  {studio.email}
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-white/[0.06]">
            <a
              href={studio.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#c5a880] hover:underline"
            >
              Open Studio Location Map <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
