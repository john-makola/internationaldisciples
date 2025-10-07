"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

declare global {
  interface Window {
    grecaptcha: {
      reset: () => void;
      render: (
        container: string | HTMLElement,
        parameters: {
          sitekey: string;
          theme?: "light" | "dark";
          size?: "normal" | "compact" | "invisible";
          callback?: (response: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
        }
      ) => number;
      getResponse: (widgetId?: number) => string;
    };
  }
}


const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    title: "",
    message: "",
    email: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Ensure reCAPTCHA script is loaded
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.title) newErrors.title = "Subject is required";
    if (!formData.message) newErrors.message = "Inquiry is required";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const recaptchaResponse = (
      document.querySelector(".g-recaptcha-response") as HTMLInputElement
    )?.value;

    if (!recaptchaResponse) {
      alert("Please complete the reCAPTCHA.");
      return;
    }

    const formPayload = new URLSearchParams({
      accessKey: "sf_hlbn3lmjmii239lnf2n1hcge", // your StaticForms key
      name: formData.name,
      organization: formData.organization,
      subject: formData.title,
      email: formData.email,
      message: formData.message,
      "g-recaptcha-response": recaptchaResponse,
    });

    try {
      const response = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formPayload.toString(),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          organization: "",
          title: "",
          message: "",
          email: "",
        });
        // Reset reCAPTCHA widget if needed
        if (window.grecaptcha) {
          window.grecaptcha.reset();
        }
      } else {
        const errorText = await response.text();
        console.error("❌ Submission error:", errorText);
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("❌ Submission failed:", error);
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="relative w-full h-[300px] sm:h-[350px] md:h-[300px] overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0.5 : 1 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 bg-gray-300 z-10"
        />
        <Image
          src="/slides/slide1.jpg"
          alt="Contact Us"
          layout="fill"
          objectFit="cover"
          className="z-20"
          onLoadingComplete={() => setIsLoading(false)}
          priority
        />
      </div>

      {/* Form Section */}
      <main className="max-w-4xl mx-auto px-4 py-16 text-gray-800">
        <h1 className="text-3xl font-bold text-[#802E2F] mb-8 text-center">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <form onSubmit={handleSubmit} className="space-y-4">
            {submitted && (
              <p className="text-green-600 font-semibold mb-4">
                Thank you! Your message has been sent.
              </p>
            )}

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-3 rounded"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            {errors.name && (
              <p className="text-sm text-red-600">{errors.name}</p>
            )}

            <input
              type="text"
              placeholder="Organization or Individual"
              className="w-full border p-3 rounded"
              value={formData.organization}
              onChange={(e) =>
                setFormData({ ...formData, organization: e.target.value })
              }
            />

            <input
              type="email"
              placeholder="Contact Email"
              className="w-full border p-3 rounded"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email}</p>
            )}

            <input
              type="text"
              placeholder="Subject"
              className="w-full border p-3 rounded"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
            {errors.title && (
              <p className="text-sm text-red-600">{errors.title}</p>
            )}

            <textarea
              rows={5}
              placeholder="Your Inquiry"
              className="w-full border p-3 rounded"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
            {errors.message && (
              <p className="text-sm text-red-600">{errors.message}</p>
            )}

            {/* reCAPTCHA Widget */}
            <div
              className="g-recaptcha"
              data-sitekey="6LcJl40rAAAAAF0fTBJXFXofaRsv7Ka-duUJ4J3r"
            ></div>

            <button
              type="submit"
              className="bg-[#802E2F] text-white px-6 py-2 rounded hover:bg-[#6b2425] transition"
            >
              Send Inquiry
            </button>
          </form>

          {/* Contact Info */}
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-3 text-[#802E2F]">
              Our Address
            </h2>
            <p>International Disciples Mission Ministries</p>
            <p>123 Discipleship Street, Nairobi, Kenya</p>
            <p className="mt-4">
              <strong>Phone:</strong> +254 712 345 678
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@internationaldisciples.com"
                className="underline"
              >
                info@internationaldisciples.com
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactUs;
