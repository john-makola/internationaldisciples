"use client";
import { useState, useRef, } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqItems = [
  {
    question: "How can I join the ministry?",
    answer:
      "You can reach out to us through the contact form or visit our campus in Lucky Summer, Nairobi for more information.",
  },
  {
    question: "Do you offer online services?",
    answer:
      "Yes, we stream some of our services online. Stay tuned to our social media platforms for updates.",
  },
  {
    question: "What are your service times?",
    answer:
      "Our main Sunday service starts at 10:00 AM. Midweek fellowships are held every Wednesday from 6:00 PM.",
  },
  {
    question: "Can I Volunteer or Support the Ministry with my expertise?",
    answer:
      "Absolutely! Fill in the contact form expressing your interest and our team will follow up with you.",
  },
  {
    question: "Can I Volunteer or Support the Ministry Financially?",
    answer:
      "<p>  <strong> Our MPESA TillNo:</strong>  452-525</p> </br> <strong> Bank Details:</strong> <br/>  <strong>Bank Account Name:</strong> International Disciples Ministries <br/> <strong>Bank Account:</strong>  +254 712 345 678  <br/> <strong> Bank : </strong> XXXX Bank of Kenya <br/> <strong> Address : </strong> Nairobi, Kenya ",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleFAQ = (index: number) => {
    const isSame = activeIndex === index;
    setActiveIndex(isSame ? null : index);

    // Scroll to item if opening
    if (!isSame && itemRefs.current[index]) {
      setTimeout(() => {
        itemRefs.current[index]?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100); // slight delay to wait for height animation
    }
  };

  return (
    <section className="max-w-4xl mx-auto px-4 pb-20">
      <h2 className="text-2xl font-bold text-[#802E2F] mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden"
            ref={(el: HTMLDivElement | null) => {
              itemRefs.current[index] = el;
            }}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-4 py-3 flex justify-between items-center bg-gray-100 hover:bg-gray-200 transition font-medium"
            >
              <span>{item.question}</span>
              <span className="ml-4">
                {activeIndex === index ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </span>
            </button>

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={
                activeIndex === index
                  ? { height: "auto", opacity: 1 }
                  : { height: 0, opacity: 0 }
              }
              transition={{ duration: 0.3 }}
              style={{ overflow: "hidden" }}
            >
              <div
                className="px-4 py-3 bg-white border-t text-sm text-gray-700"
                dangerouslySetInnerHTML={{ __html: item.answer }}
              />
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
