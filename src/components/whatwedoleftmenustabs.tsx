"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LeftMenuTabs = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: "What We Do", linkUrl: "/whatwedo" },
    { name: "Empowering Disciples", linkUrl: "/empoweringdisciples" },
    { name: "Fundraising Programs", linkUrl: "/fundraisingprograms" },
    { name: "Short Term Missions", linkUrl: "/shorttermissions" },
    { name: "Evangelism", linkUrl: "/evangelism" },
    { name: "Social Empowerment", linkUrl: "/socialempowerment" },
  ];
  return (
    <div className="hidden md:block md:w-1/4 px-5 py-1">
      <div className="bg-[#386973] text-white p-6">
        <ul className="space-y-2">
          {menuItems.map((item, idx) => {
            const isActive = pathname === item.linkUrl;
            return (
              <li key={idx} className="border-b border-white/30">
                <Link href={item.linkUrl}>
                  <div
                    className={`w-full text-left py-3 px-2 rounded transition duration-200 cursor-pointer ${
                      isActive
                        ? "bg-[#70C6AC] font-semibold"
                        : "hover:bg-[#70C6AC]"
                    }`}
                  >
                    {item.name}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-10 space-y-4">
        <div className="w-full">
          <Image
            src="/whatwedo/whatwedo1.jpg"
            alt="Ministry Visual 1"
            width={600}
            height={350}
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
        <div className="w-full">
          <Image
            src="/whatwedo/whatwedo2.jpg"
            alt="Ministry Visual 2"
            width={600}
            height={350}
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default LeftMenuTabs;
