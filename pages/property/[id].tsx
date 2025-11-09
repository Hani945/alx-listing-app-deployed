import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import PropertyDetail from "@/components/property/PropertyDetail";
import { PropertyProps } from "@/interfaces";
import api from "@/services/api";

export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState<PropertyProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperty = async () => {
      if (!id) return;

      try {
        setLoading(true);
        const response = await api.get<PropertyProps>(`/properties/${id}`);
        setProperty(response.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching property details:", err);
        setError("Failed to load property details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!property) return <p className="text-yellow-500">Property not found</p>;

  return <PropertyDetail property={property} />;
}
