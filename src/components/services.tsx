import AllServices from "@/hooks/AllServices";

const services = [
  {
    image: "/services/service1.png",
    title: "Discipleship Training",
    description:
      "Equipping believers to grow deeper in their walk with Christ.",
    category: "Training",
  },
  {
    image: "/services/service2.png",
    title: "Evangelism Outreach",
    description: "Reaching the unreached with the Gospel message.",
    category: "Outreach",
  },
  {
    image: "/services/service3.png",
    title: "Youth Empowerment",
    description: "Mentorship and leadership training for the next generation.",
    category: "Youth",
  },
  {
    image: "/services/service4.png",
    title: "Prayer Ministry",
    description: "Intercession and spiritual covering for the Church body.",
    category: "Spiritual",
  },
];

export default function Services() {
  return <AllServices services={services} showFilters />;
}
