import React from "react";
import { PropertyProps } from "@/interfaces";

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      <div className="relative h-48 sm:h-56">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {property.discount && (
          <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded">
            {property.discount}% off
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{property.name}</h3>
        <p className="text-sm text-gray-500">{property.address.city}, {property.address.country}</p>
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">${property.price}</span>
            <span className="text-xs text-gray-500">/night</span>
          </div>
          <div className="text-sm text-gray-600">⭐ {property.rating.toFixed(2)}</div>
        </div>
      </div>
    </article>
  );
};

export default PropertyCard;
