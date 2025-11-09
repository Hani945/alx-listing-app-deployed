import React from "react";
import Image from "next/image";
import { PropertyProps } from "@/interfaces";

interface PropertyCardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const { name, price, image, address } = property;

  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          priority={true}
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-600">{address.city}, {address.state}</p>
        <p className="text-xl font-bold mt-2">${price}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
