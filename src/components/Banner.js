import React from "react";

import IurieImage from "../assets/iurie.png";

import {
  FaGithub,
  FaYoutube,
  FaDribbble,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";
import { Button } from "react-scroll";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px] mb-6"
            >
              Iurie <span>Muhamad Farrel</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="mr-4">Saya adalah</span>
              <TypeAnimation
                sequence={["Pelajar", 2000, "Web Programmer", 2000]}
                speed={50}
                className="text-[#a4161a]"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Hai, salam kenal semuanya. Saya Iurie Muhamad Farrel, seorang
              developer web yang selalu belajar dari pengalaman yang saya lalui.
              Senang bisa berbagi perjalanan saya dengan kalian semua.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            ></motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://www.youtube.com/@eirumv">
                <FaYoutube />
              </a>
              <a href="https://github.com/EiRuMF21">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/eirumf/">
                <FaInstagram />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="lg:flex-1 lg:flex lg:justify-end mt-8 lg:mt-0 hidden lg: fle flex-1 max-w-[320px] lg:max-w-[428px]"
          >
            <img
              src={IurieImage}
              alt="iurie"
              className="max-w-96 mb-36 lg:max-w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
