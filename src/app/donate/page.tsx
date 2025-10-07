"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import PaymentSection from "@/components/PaymentSection";

const DonatePage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    organization: "",
    tel: "",
    email: "",
    amount: "",
    customAmount: "",
    mpesaNo: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

 
 //uncoment 
  // const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showPayment, setShowPayment] = useState(false);
  // const [paymentMethod, setPaymentMethod] = useState<"mpesa" | "paypal" | null>(
  //   null
  // );
//Remove statement below and use above
const paymentMethod = "mpesa"


  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
      amount: field === "customAmount" ? "" : value,
      customAmount: field === "amount" ? "" : prev.customAmount,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const donationAmount = formData.amount || formData.customAmount;

    if (
      !formData.firstname ||
      !formData.lastname ||
      !formData.email ||
      !donationAmount
    ) {
      alert("Please fill in all required fields and donation amount.");
      return;
    }

    setShowPayment(true);
  };

  //change if (paymentMethod == "paypal")
  const handlePayment = async () => {
    if (paymentMethod == "mpesa") {
      if (!formData.cardNumber || !formData.expiry || !formData.cvv) {
        alert("Please fill in credit card details.");
        return;
      }

      // Simulate PayPal API call
      console.log("Processing PayPal payment...", formData);
    } else if (paymentMethod === "mpesa") {
      if (!formData.mpesaNo) {
        alert("Please enter your M-PESA number.");
        return;
      }

      // Simulate M-PESA STK Push
      console.log("Sending MPESA STK push to:", formData.mpesaNo);
    }

    // Simulate delay and redirect
    setTimeout(() => {
      router.push("/thank-you");
    }, 1000);
  };

  return (
    <div>
      <div className="relative w-full h-[300px] overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0.5 : 1 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 bg-gray-300 z-10"
        />
        <Image
          src="/slides/slide1.jpg"
          alt="Donate"
          layout="fill"
          objectFit="cover"
          className="z-20"
          onLoadingComplete={() => setIsLoading(false)}
          priority
        />
      </div>

      <main className="max-w-3xl mx-auto px-4 py-16 text-gray-800">
        <h1 className="text-3xl font-bold text-[#802E2F] mb-4 text-center">
          Support Our Mission
        </h1>

        <p className="text-center mb-6 text-lg text-gray-700">
          Your donation directly empowers our evangelism, youth outreach,
          community feeding programs, and spiritual leadership training.
          Together, we are making disciples of all nations.
        </p>

        <blockquote className="text-center italic text-[#802E2F] text-lg mb-10">
          “Each of you should give what you have decided in your heart to give,
          not reluctantly or under compulsion, for God loves a cheerful giver.”
          <br />
          <span className="text-sm">— 2 Corinthians 9:7</span>
        </blockquote>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name *"
              value={formData.firstname}
              onChange={(e) => handleChange("firstname", e.target.value)}
              className="border p-3 rounded w-full"
              required
            />
            <input
              type="text"
              placeholder="Last Name *"
              value={formData.lastname}
              onChange={(e) => handleChange("lastname", e.target.value)}
              className="border p-3 rounded w-full"
              required
            />
          </div>

          <input
            type="text"
            placeholder="Organization"
            value={formData.organization}
            onChange={(e) => handleChange("organization", e.target.value)}
            className="border p-3 rounded w-full"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="tel"
              placeholder="Phone"
              value={formData.tel}
              onChange={(e) => handleChange("tel", e.target.value)}
              className="border p-3 rounded w-full"
            />
            <input
              type="email"
              placeholder="Email *"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="border p-3 rounded w-full"
              required
            />
          </div>

          {/* Donation Amount */}
          <div>
            <p className="mb-2 font-semibold">Choose a donation amount:</p>
            <div className="flex flex-wrap gap-4">
              {["10", "50", "100"].map((amt) => (
                <button
                  key={amt}
                  type="button"
                  className={`px-5 py-2 rounded border ${
                    formData.amount === amt
                      ? "bg-[#802E2F] text-white"
                      : "bg-white text-[#802E2F] border-[#802E2F]"
                  }`}
                  onClick={() => handleChange("amount", amt)}
                >
                  ${amt}
                </button>
              ))}
              <input
                type="number"
                min={1}
                placeholder="Other Amount"
                value={formData.customAmount}
                onChange={(e) => handleChange("customAmount", e.target.value)}
                className="border p-2 rounded w-[150px]"
              />
            </div>
          </div>

          {!showPayment && (
            <button
              type="submit"
              className="bg-[#802E2F] text-white px-6 py-3 rounded hover:bg-[#6b2425] transition w-full"
            >
              Donate Now
            </button>
          )}
        </form>

        {showPayment && (
          <PaymentSection
            formData={formData}
            handleChange={handleChange}
            handlePayment={handlePayment}
          />
        )}
      </main>
    </div>
  );
};

export default DonatePage;
