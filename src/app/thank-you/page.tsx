// app/thank-you/page.tsx
import { Suspense } from "react";
import ThankYouPage from "@/components/ThankYouPage";

export default function ThankYou() {
  return (
    <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
      <ThankYouPage />
    </Suspense>
  );
}
