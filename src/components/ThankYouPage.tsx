/* eslint-disable react/no-unescaped-entities */
// src/components/ThankYouPage.tsx
"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { FaCheckCircle } from "react-icons/fa";
import { useState } from "react";

export default function ThankYouPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const from = searchParams.get("from") || "/conferences";

  const handleBack = () => {
    setLoading(true);
    router.push(from);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md text-center">
        <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-[#802E2F] mb-2">
          Registration Successful!
        </h1>
        <p className="text-gray-700 mb-4">
          Thank you for registering. We've received your details and will keep
          you updated about the event.
        </p>

        <button
          onClick={handleBack}
          disabled={loading}
          className={`inline-block mt-4 px-6 py-2 rounded-lg text-white transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#802E2F] hover:bg-[#a34142]"
          }`}
        >
          {loading ? "Redirecting..." : "Back to Events"}
        </button>
      </div>
    </div>
  );
}
