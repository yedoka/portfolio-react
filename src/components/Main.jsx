import { React } from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="https://images.unsplash.com/photo-1558346547-4439467bd1d5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm Akedil
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                "Developer",
                2000,
                "Digital Marketer",
                2000,
                "Tech Enthusiast",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              style={{
                fontSize: "1em",
                paddingLeft: "5px",
              }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a href="https://t.me/e3e3e3e3e3e3e">
              <FaTelegram className="cursor-pointer" size={20} />
            </a>
            <a href="https://wa.me/+77066361590">
              <FaWhatsapp className="cursor-pointer" size={20} />
            </a>
            <a href="https://www.instagram.com/zhaiganayedil?igsh=MWdzZnp3NWJsbGNvYQ%3D%3D&utm_source=qr">
              <FaInstagram className="cursor-pointer" size={20} />
            </a>
            <a href="https://www.linkedin.com/in/akedil-aidyn-69b54b2a0">
              <FaLinkedinIn className="cursor-pointer" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
