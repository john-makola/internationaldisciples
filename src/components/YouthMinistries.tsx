/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import AnimatedImage from "@/hooks/animatedimage";

const YouthMinistries = () => {
  return (
    <div>
      {/* Youth Ministries Section */}
      <section className="px-6 py-10 max-w-4xl mx-auto">
        {/* Title */}
        <div className="inline-block bg-[#802E2F] text-white text-lg md:text-xl font-semibold px-6 py-2 rounded-2xl hover:bg-[#9a3a3b] transition-colors duration-300">
          Youth Ministries
        </div>

        {/* Content */}
        <div className="mt-6 text-gray-800 space-y-6 leading-relaxed">
          <p>
            We are a generation being shaped not by trends, but by truth—a
            movement of young disciples awakened to the heartbeat of Christ and
            committed to the restoration of His Body.
          </p>

          <p>
            Youth Ministries serves as a dynamic expression of our shared
            calling: to equip and empower young believers from all
            denominational backgrounds to live as authentic followers of Jesus
            in a world longing for light.
          </p>

          <p>
            Rooted in the Great Commission (<strong>Matthew 28:19</strong>), we
            exist to{" "}
            <strong className="text-[#802E2F]">
              disciple, mentor, and mobilize
            </strong>{" "}
            young people into a life of obedience, fruitfulness, and bold
            witness.
          </p>

          <p>
            Our focus is not merely on programs but on <em>transformation</em>
            —building a culture where youth are known by their fruit, anchored
            in the Word, and united across traditions to glorify Christ.
          </p>

          <div className="relative overflow-hidden shadow-lg">
            <AnimatedImage
              image="/images/event-youth.jpg"
              imgwidth={800}
              imgheight={450}
              imgalttext="Youth community service"
            />
            {/* <Image
              src="/images/event-youth.jpg"
              alt="Youth community service"
              width={800}
              height={450}
              className="w-full h-full object-cover"
            /> */}
          </div>

          <p>
            We believe that the restoration of the Church’s glory begins with a
            generation that is{" "}
            <strong className="text-[#802E2F]">fully alive in Christ</strong>,
            walking in truth, and surrendered to His mission.
          </p>
          <p>
            Here, every young disciple finds belonging, growth, and
            purpose—becoming not just believers, but{" "}
            <strong className="text-[#802E2F]">builders</strong> of a reconciled
            and radiant Body.
          </p>

          {/* Scripture Block */}
          <div className="bg-gray-100 p-4 rounded-lg border-l-6 border-[#802E2F] text-sm">
            <p className="font-semibold mb-2">
              Matthew 7:15–20 — New King James Version
            </p>
            <p className="italic">
              <strong>15</strong> “Beware of false prophets, who come to you in
              sheep's clothing, but inwardly they are ravenous wolves. <br />
              <strong>16</strong> You will know them by their fruits. Do men
              gather grapes from thornbushes or figs from thistles? <br />
              <strong>17</strong> Even so, every good tree bears good fruit, but
              a bad tree bears bad fruit. <br />
              <strong>18</strong> A good tree cannot bear bad fruit, nor can a
              bad tree bear good fruit. <br />
              <strong>19</strong> Every tree that does not bear good fruit is
              cut down and thrown into the fire. <br />
              <strong>20</strong> Therefore by their fruits you will know them.
            </p>
          </div>

          <p className="text-center font-bold text-[#802E2F] mt-8">
            Come, grow with us. The time to reflect His glory is now.
          </p>
        </div>
      </section>
    </div>
  );
};

export default YouthMinistries;
