import { useEffect, useState } from "react";
import PropertyCard from "@/components/common/PropertyCard";
import api from "@/services/api"; // ✅ Use centralized API instance

interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  image: string;
  [key: string]: any; // for any extra fields
}

export default function Home() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        // ✅ Now uses the environment base URL
        const response = await api.get("/properties");
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
