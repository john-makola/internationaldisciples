"use client";
import { useState, useEffect } from "react";

interface PaymentSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formData: any;
  handleChange: (field: string, value: string) => void;
  handlePayment: () => void;
}

const generateInvoiceNumber = () => {
  const random = Math.floor(Math.random() * 90000) + 10000;
  return `IntlD-${random}`;
};

const PaymentSection = ({
  formData,
  handleChange,
  handlePayment,
}: PaymentSectionProps) => {
  const [paymentMethod, setPaymentMethod] = useState<
    "paypal" | "mpesa" | "pledge" | null
  >(null);
  const [invoiceNumber, setInvoiceNumber] = useState("");

  useEffect(() => {
    setInvoiceNumber(generateInvoiceNumber());
  }, []);

  return (
    <div className="mt-10 border-t pt-6">
      <h3 className="text-xl font-semibold mb-3">Choose Payment Method</h3>

      <p className="text-sm text-gray-600 mb-2">
        Invoice No: <span className="font-semibold">{invoiceNumber}</span>
      </p>

      <div className="flex gap-4 mb-6 flex-wrap">
        <button
          onClick={() => setPaymentMethod("paypal")}
          className={`px-4 py-2 border rounded ${
            paymentMethod === "paypal"
              ? "bg-[#802E2F] text-white"
              : "bg-white text-[#802E2F] border-[#802E2F]"
          }`}
        >
          Credit Card (PayPal)
        </button>

        <button
          onClick={() => setPaymentMethod("mpesa")}
          className={`px-4 py-2 border rounded ${
            paymentMethod === "mpesa"
              ? "bg-[#802E2F] text-white"
              : "bg-white text-[#802E2F] border-[#802E2F]"
          }`}
        >
          M-PESA
        </button>

        <button
          onClick={() => setPaymentMethod("pledge")}
          className={`px-4 py-2 border rounded ${
            paymentMethod === "pledge"
              ? "bg-[#802E2F] text-white"
              : "bg-white text-[#802E2F] border-[#802E2F]"
          }`}
        >
          Pledge
        </button>
      </div>

      {/* PayPal Form */}
      {paymentMethod === "paypal" && (
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Card Number"
            value={formData.cardNumber}
            onChange={(e) => handleChange("cardNumber", e.target.value)}
            className="border p-3 rounded w-full"
          />
          <input
            type="text"
            placeholder="Expiry (MM/YY)"
            value={formData.expiry}
            onChange={(e) => handleChange("expiry", e.target.value)}
            className="border p-3 rounded w-full"
          />
          <input
            type="text"
            placeholder="CVV"
            value={formData.cvv}
            onChange={(e) => handleChange("cvv", e.target.value)}
            className="border p-3 rounded w-full"
          />
        </div>
      )}

      {/* MPESA Form */}
      {paymentMethod === "mpesa" && (
        <div className="space-y-4">
          <input
            type="tel"
            placeholder="M-PESA Number"
            value={formData.mpesaNo}
            onChange={(e) => handleChange("mpesaNo", e.target.value)}
            className="border p-3 rounded w-full"
          />
        </div>
      )}

      {/* Pledge Form */}
      {paymentMethod === "pledge" && (
        <div className="mt-4 border rounded p-4 space-y-4 bg-gray-50">
          <h4 className="text-md font-semibold mb-2">Pledge Details</h4>

          <input
            type="text"
            placeholder="First Name"
            value={formData.pledgeFirstName}
            onChange={(e) => handleChange("pledgeFirstName", e.target.value)}
            className="border p-3 rounded w-full"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={formData.pledgeLastName}
            onChange={(e) => handleChange("pledgeLastName", e.target.value)}
            className="border p-3 rounded w-full"
          />
          <input
            type="text"
            placeholder="Organization"
            value={formData.pledgeOrg}
            onChange={(e) => handleChange("pledgeOrg", e.target.value)}
            className="border p-3 rounded w-full"
          />
          <input
            type="date"
            value={formData.pledgeDate}
            onChange={(e) => handleChange("pledgeDate", e.target.value)}
            className="border p-3 rounded w-full"
          />
          <input
            type="number"
            placeholder="Pledge Amount"
            value={formData.pledgeAmount}
            onChange={(e) => handleChange("pledgeAmount", e.target.value)}
            className="border p-3 rounded w-full"
          />
          <input
            type="text"
            placeholder="Phone / Email / WhatsApp"
            value={formData.pledgeContact}
            onChange={(e) => handleChange("pledgeContact", e.target.value)}
            className="border p-3 rounded w-full"
          />
        </div>
      )}

      {/* Final Action Button */}
      <button
        onClick={handlePayment}
        className="mt-6 bg-[#802E2F] text-white px-6 py-3 rounded hover:bg-[#6b2425] transition w-full"
      >
        {paymentMethod === "pledge" ? "Submit Pledge" : "Complete Donation"}
      </button>
    </div>
  );
};

export default PaymentSection;
