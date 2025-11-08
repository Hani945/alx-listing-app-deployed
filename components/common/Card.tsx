import React from 'react';

interface CardProps {
  title?: string;
  imageSrc?: string;
  description?: string;
}

const Card: React.FC<CardProps> = ({ title, imageSrc, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {imageSrc && <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />}
      <div className="p-4">
        {title && <h2 className="text-xl font-bold mb-2">{title}</h2>}
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};

export default Card;
