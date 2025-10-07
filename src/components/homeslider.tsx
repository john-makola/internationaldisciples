import FullScreenSlider from "@/hooks/FullScreenSlider";

const HomeSlider = () => {
  const slides = [
    {
      image: "/slides/slide1.jpg",
      title: "Welcome",
      buttonText: "Join Us: Services Schedule",
      buttonLink: "/schedule",
    },
    {
      image: "/slides/slide2.jpg",
      title: "Discover Purpose",
      buttonText: "Our Mission",
      buttonLink: "/mission",
    },
    {
      image: "/slides/slide3.jpg",
      title: "Grow in Christ",
      buttonText: "Discipleship Journey",
      buttonLink: "/discipleship",
    },
  ];

  return <FullScreenSlider slides={slides} />;
};

export default HomeSlider;
