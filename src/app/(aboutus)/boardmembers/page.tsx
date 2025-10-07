"use client";

import Image from "next/image";
import React from "react";

interface BoardMember {
  name: string;
  description: string;
}

const boardMembers: BoardMember[] = [
  {
    name: "Pastor Jairo",
    description:
      "Pastor Jairo is a passionate teacher of the Word with a heart for revival and spiritual restoration. He has served in ministry for over two decades, guiding believers in truth and discipleship. His leadership is rooted in humility, prayer, and a deep love for the Church.",
  },
  {
    name: "Pastor Brandon",
    description:
      "Pastor Brandon is a dynamic preacher committed to equipping the body of Christ through sound doctrine and pastoral care. With a background in cross-denominational ministry, he fosters unity and spiritual growth. His calling is to raise strong, fruit-bearing disciples.",
  },
  {
    name: "Pastor Marvin",
    description:
      "Known for his shepherd’s heart, Pastor Marvin is devoted to mentoring believers and building strong faith communities. He brings clarity and conviction in teaching the Word. His ministry is marked by compassion, integrity, and a firm stand on Biblical truth.",
  },
  {
    name: "Brother Donald",
    description:
      "Brother Donald serves faithfully in leadership and discipleship training. He is known for his servant-hearted approach and steady commitment to the Great Commission. His strength lies in building others up in faith and fostering unity among believers.",
  },
  {
    name: "Sister Charmaine",
    description:
      "Sister Charmaine is a passionate intercessor and encourager in the body of Christ. She plays a key role in prayer ministry and spiritual counseling. Her gentle wisdom and unwavering faith inspire those around her to walk closer with Jesus.",
  },
  {
    name: "Sister Lapwan",
    description:
      "Sister Lapwan is a dedicated leader who carries a vision for restoring the Church to its Biblical foundations. She is active in teaching, mentorship, and organizing ministry outreach. Her life reflects a deep commitment to obedience and fruitfulness.",
  },
  {
    name: "Sister Pauline",
    description:
      "Sister Pauline leads with grace and discernment, contributing greatly to spiritual formation and community building. She has a gift for nurturing spiritual growth in women and youth. Her leadership is marked by love, prayer, and consistent dedication to Christ’s mission.",
  },
  {
    name: "Brother Paul",
    description:
      "Brother Paul is a dependable leader focused on strengthening fellowship and discipleship. He supports the team through practical ministry and teaching. Known for his humility and wisdom, he helps anchor the mission in truth and unity.",
  },
];

const BoardMembers = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center text-[#802E2F] mb-12">
        Board Members
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {boardMembers.map((member, index) => {
          const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
            member.name
          )}&background=802E2F&color=fff&size=300&rounded=true`;

          return (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-full h-64 relative">
                <Image
                  src={avatarUrl}
                  alt={member.name}
                  fill
                  className="object-contain p-8"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg text-center font-semibold text-[#802E2F] mb-2">
                  {member.name}
                </h3>
                <p className="text-sm text-center text-gray-700 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BoardMembers;
