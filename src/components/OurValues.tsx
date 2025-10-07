import React from "react";

interface ValueCardProps {
  title: string;
  description: string;
  color: string; // Light shade for square
}

const values = [
  {
    title: "Obedience to Christ",
    description:
      "We believe that true restoration of the body of Christ begins with total submission to His Word and His will. Our commitment is to follow Jesus fully and faithfully in every area of life and ministry.",
    color: "#FDECEA",
  },
  {
    title: "Unity in Diversity",
    description:
      "We believe that true restoration of the body of Christ begins with total submission to His Word and His will. Our commitment is to follow Jesus fully and faithfully in every area of life and ministry.",
    color: "#E9F6F2",
  },
  {
    title: "Fruitfulness in Ministry and Character",
    description:
      "As Jesus taught in Matthew 7:15–20, “you will know them by their fruits.” We are committed to bearing good fruit—both in our personal lives and in our collective ministry. True discipleship must be reflected in Godly character, sound doctrine, and effective witness.",
    color: "#FFF9E5",
  },
  {
    title: "Discernment and Integrity",
    description:
      "We heed Christ’s warning to “beware of false prophets.” We value spiritual discernment and strive for transparency and integrity in all we do, ensuring that our words and actions align with the truth of the Gospel.",
    color: "#EFF3FF",
  },
  {
    title: "Partnership and Discipleship",
    description:
      "We welcome all who are disciples of Jesus to walk with us in this calling. Together, through mutual support and shared labor, we aim to raise up a generation of mature, fruitful disciples who reflect the glory of Christ.",
    color: "#F5EFFF",
  },
];

const ValueCard: React.FC<ValueCardProps> = ({ title, description, color }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 relative border border-gray-200">
      <div className="flex items-start space-x-4 ">
        {/* Initial box */}
        <div
          className="w-10 h-10 flex items-center justify-center rounded-md font-bold text-[#802E2F] text-lg"
          style={{ backgroundColor: color }}
        >
          {title.charAt(0)}
        </div>

        {/* Title */}
        <h2 className="text-[#802E2F] font-bold text-lg text-center">
          {title}
        </h2>
      </div>

      {/* Description */}
      <p className="mt-4 text-gray-700 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const OurValues = () => {
  return (
    <section className="px-6 py-12 max-w-6xl mx-auto text-center">
      <h2 className="text-2xl font-bold text-[#802E2F] mb-8 ">Our Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
        {values.map((val) => (
          <ValueCard
            key={val.title}
            title={val.title.toUpperCase()}
            description={val.description}
            color={val.color}
          />
        ))}
      </div>
    </section>
  );
};

export default OurValues;
