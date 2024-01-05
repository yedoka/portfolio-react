import React from "react";
import Workitem from "./Workitem";

const data = [
  {
    year: 2022,
    title: "Private Tutor",
    duration: "2 years",
    details:
      "Over two years, I've been a private tutor for Kazakh children, specializing in math, English, and Kazakh language. Through tailored teaching methods, I've facilitated significant academic progress, fostering a supportive learning environment. This experience has honed my pedagogical skills and deepened my cultural understanding, creating a rewarding journey marked by shared academic accomplishments and a passion for learning.",
  },
  {
    year: 2023,
    title: "Digital Marketer",
    duration: "1 year",
    details:
      "Diving into my new role as a digital marketer is exhilarating. I specialize in online advertising, social media strategies, and content optimization, crafting compelling campaigns for brands. Constantly adapting to digital trends, I thrive on shaping businesses' online presence, from SEO to email marketing.",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => (
        <Workitem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
