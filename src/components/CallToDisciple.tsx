"use client";
import Image from "next/image";
import Link from "next/link";
// import AnimatedImage from "@/hooks/animatedimage";

const CallToDisciple = () => {

  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-gray-50 p-6 md:p-12 rounded-lg shadow-md gap-6">
      {/* Passport Section */}
      <div className="w-1/3 flex-col items-center justify-center">
        <div className="w-full md:w-1/2  justify-center text-center  ">
          <div className="relative rounded-full overflow-hidden shadow-lg">
            <Image
              src="/home/Pastor_Jairo.jpg"
             width={300}
              height={350}
              alt="Pastor Jairo"
            />
          </div>
          <h3 className="text-base py-2.5 text-emerald-900 font-bold  ">Pastor Jairo</h3>
        </div>
      </div>

      {/* Title Section */}
      <div className="w-full md:w-2/3 space-y-4 text-center md:text-left">
        {/* Icon and Title */}
        <div className="flex items-center justify-center md:justify-start space-x-3 ">
          <Image
            src="/home/speaker_call.png" // Replace with your icon in /public
            alt="Discipleship Icon"
            width={40}
            height={40}
          />
          <h2 className="text-4xl font-bold text-gray-800 uppercase tracking-wide">
            Call to Discipleship
          </h2>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-base font-mono no-underline">
          The importance of Discipleship in the body of Christ has never been
          greater than now. The body of Christ is facing significant challenges
          of credibility, integrity and even relevance in society today, it has
          become a laughing stock in many quarters.
        </p>

        {/* CTA Button */}
        <Link href="/join">
          <button className="mt-2  bg-emerald-900 text-lg text-white px-2 py-1 rounded-md hover:bg-emerald-500 transition">
            Join us
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CallToDisciple;
