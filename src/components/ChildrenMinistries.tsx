"use client";

import React from "react";
import Image from "next/image";

const ChildrenMinistries = () => {
  return (
    <div>
      <section className="px-6 py-10 max-w-4xl mx-auto">
        {/* Title */}
        <div className="inline-block bg-[#802E2F] text-white text-lg md:text-xl font-semibold px-6 py-2 rounded-2xl hover:bg-[#9a3a3b] transition-colors duration-300">
          Children Ministries
        </div>

        {/* Content */}
        <div className="mt-6 text-gray-800 space-y-6 leading-relaxed">
          <p>
            Children Ministries is a vibrant expression of our calling to
            nurture the youngest members of the Body of Christ. We believe that
            children are not just the future—they are part of God’s Kingdom now.
            With hearts wide open and spirits ready to learn, children have a
            special place in the ministry of Jesus.
          </p>

          <div className="w-full aspect-video rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/workshop-children.jpg"
              alt="Children worshiping"
              width={800}
              height={450}
              className="w-full h-full object-cover"
            />
          </div>

          <p>
            Our mission is to help children know God, grow in Christ, and live
            out their faith boldly from a young age. Through Bible-centered
            teaching, fun-filled worship, creative play, and loving
            relationships, we plant seeds of faith that will grow into strong,
            fruitful lives.
          </p>

         

          <p>
            Our team partners with parents and guardians to raise godly children
            who reflect the character of Jesus in their homes, schools, and
            communities. We prioritize creating safe, joyful spaces where kids
            feel known, loved, and empowered by the Word of God.
          </p>

          <p>
            Rooted in the Great Commission (<strong>Matthew 28:19</strong>), we
            guide children into early discipleship, helping them understand that
            their lives matter deeply to God and they can be used by Him even in
            their youth.
          </p>


          {/* Scripture Block */}
          <div className="bg-gray-100 p-4 rounded-lg border-l-6 border-[#802E2F] text-sm">
            <p className="font-semibold mb-2">
              Matthew 19:14 — New King James Version
            </p>
            <p className="italic">
              <strong>14</strong> But Jesus said, “Let the little children come
              to Me, and do not forbid them; for of such is the kingdom of
              heaven.”
            </p>
          </div>

          <p className="text-center font-bold text-[#802E2F] mt-8">
            Come let us raise a generation of children rooted in truth, alive in
            faith, and radiant with the love of Christ.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ChildrenMinistries;
