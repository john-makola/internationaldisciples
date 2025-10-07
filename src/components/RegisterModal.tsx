
"use client";

import React, { useState, useEffect } from "react";
import { ConferenceEvent } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface RegisterModalProps {
  event: ConferenceEvent | null;
  onClose: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ event, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (success) {
      const timeout = setTimeout(() => {
        onClose();
        router.push("/thank-you"); // ✅ Optional: Create this page if needed
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [success, onClose, router]);

  if (!event) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!formData.name || !formData.email) {
      setError("Full Name and Email are required.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          eventTitle: event.title,
          imageUrl: event.image,
        }),
      });

      if (!res.ok) throw new Error("Failed to submit registration");

      setSuccess(true);
      setFormData({ name: "", email: "", phone: "" });
    } catch (error) {
      setError("Submission failed. Please try again.");
      console.error("Registration failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent">
      <div
        onClick={onClose}
        className="absolute inset-0 backdrop-blur-sm bg-black/5"
      />
      <div className="relative z-10 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-2xl w-full max-w-lg">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-red-600 text-lg"
        >
          &times;
        </button>

        {/* Image preview */}
        {event.image && (
          <div className="w-full h-40 relative mb-4 rounded-lg overflow-hidden shadow-md">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <h2 className="text-xl font-bold text-[#802E2F] mb-4">
          Register for {event.title}
        </h2>

        {success ? (
          <div className="bg-green-100 text-green-800 px-4 py-3 rounded-lg shadow-md font-medium text-center">
            ✅ Thank you! Your registration was successful.
            <br />
            You’ll be redirected shortly...
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-lg"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-lg"
                placeholder="Enter Your Email Address"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-lg"
                placeholder="Optional"
              />
            </div>

            {error && (
              <p className="text-sm text-red-600 font-medium">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#802E2F] text-white py-2 rounded-lg hover:bg-[#a34142] flex items-center justify-center"
            >
              {loading ? (
                <svg
                  className="w-5 h-5 animate-spin text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
              ) : (
                "Submit Registration"
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegisterModal;
