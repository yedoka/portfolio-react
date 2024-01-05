import React from "react";
import Projectitem from "./Projectitem";
import tindogImg from "../assets/tindog.png";
import diceeImg from "../assets/dicee.png";
import drumkitImg from "../assets/drumkit.png";
import simonImg from "../assets/simon.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8 ">Some of my projects</p>
      <div className="grid sm:grid-cols-2 gap-12">
        <Projectitem img={tindogImg} title="Algorithms" />
        <Projectitem img={diceeImg} title="Dicee" />
        <Projectitem img={drumkitImg} title="Drumkit" />
        <Projectitem img={simonImg} title="Simon" />
      </div>
    </div>
  );
};
export default Projects;
