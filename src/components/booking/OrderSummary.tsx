import React from "react";

interface BookingData {
  propertyName: string;
  guests: number;
  price: number;
  date: string;
}

interface OrderSummaryProps {
  bookingData: BookingData;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ bookingData }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
      <p>Property: {bookingData.propertyName}</p>
      <p>Date: {bookingData.date}</p>
      <p>Guests: {bookingData.guests}</p>
      <p className="font-bold mt-2">Total: ${bookingData.price}</p>
    </div>
  );
};

export default OrderSummary;
