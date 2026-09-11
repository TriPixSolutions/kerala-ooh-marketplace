import React from "react";
import { servicesData } from "@/lib/data/services";
import { ServiceCard } from "./ServiceCard";

interface ServiceGridProps {
  limit?: number;
}

export function ServiceGrid({ limit }: ServiceGridProps) {
  const items = limit ? servicesData.slice(0, limit) : servicesData;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {items.map((service, idx) => (
        <ServiceCard key={service.id} service={service} index={idx} />
      ))}
    </div>
  );
}
