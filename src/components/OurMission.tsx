import Image from "next/image";

const OurMission = () => {
  return (
    <section className="w-full py-12 px-4 bg-white text-center flex flex-col items-center justify-center space-y-6">
      {/* Title Section */}
      <div className="flex items-center justify-center md:justify-start space-x-3 ">
        <Image
          src="/home/our_mission.png" // Replace with your icon in /public
          alt="Discipleship Icon"
          width={40}
          height={40}
        />
        <h2 className="text-4xl font-bold text-gray-800 uppercase tracking-wide">
          Our Mission
        </h2>
      </div>

      {/* Description */}
      <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-700 leading-tight max-w-4xl whitespace-pre-line">
        To call the <span className="font-bold text-gray-400">Church</span> back
        to its{"\n"}
        primary role and mission{"\n"}
        of making <span className="font-bold">Disciples</span> not just{"\n"}
        <span className="font-bold text-gray-400">Members </span>of a
        Congregation.
      </p>
    </section>
  );
};

export default OurMission;
