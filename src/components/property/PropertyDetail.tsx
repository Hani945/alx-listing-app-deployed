import React from "react";
import Image from "next/image";
import { PropertyProps } from "@/interfaces";

interface PropertyDetailProps {
  property: PropertyProps;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  const { name, image, price, rating, address, category, offers, discount } = property;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="relative w-full h-80 mb-6">
        <Image src={image} alt={name} fill className="object-cover rounded-lg" />
      </div>
      <h1 className="text-3xl font-bold mb-2">{name}</h1>
      <p className="text-gray-600 mb-2">
        {address.city}, {address.state}, {address.country}
      </p>
      <p className="text-yellow-500 mb-2">⭐ {rating}/5</p>
      <p className="text-xl font-semibold mb-4">
        ${price} {discount && <span className="text-green-600 ml-2">-{discount}%</span>}
      </p>

      {category && category.length > 0 && (
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Category:</h2>
          <ul className="flex gap-2 flex-wrap">
            {category.map((cat, i) => (
              <li key={i} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                {cat}
              </li>
            ))}
          </ul>
        </div>
      )}

      {offers && (
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Offers:</h2>
          <ul className="text-gray-700">
            <li>Beds: {offers.bed}</li>
            <li>Showers: {offers.shower}</li>
            <li>Occupants: {offers.occupants}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default PropertyDetail;
