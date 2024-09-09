import React from "react";

import { BsArrowUpRight } from "react-icons/bs";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "React",
    description:
      "React.js (atau React) adalah pustaka (library) JavaScript yang digunakan untuk membangun antarmuka pengguna (user interfaces)",
    link: "Learn More",
  },

  {
    name: "TailwindCss",
    description:
      "Tailwind CSS adalah framework CSS yang berfokus pada utilitas, yang berarti menyediakan kelas-kelas CSS yang telah ditentukan untuk memudahkan pengembangan tampilan web.",
    link: "Learn More",
  },
  {
    name: "Typescript",
    description:
      "TypeScript adalah bahasa pemrograman yang merupakan perluasan (superset) dari JavaScript",
    link: "Learn More",
  },
  {
    name: "Javascript",
    description:
      "JavaScript adalah bahasa pemrograman yang awalnya dikembangkan untuk membuat halaman web lebih interaktif dan dinamis.",
    link: "Learn More",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className=" container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">Apa yang saya pelajari</h2>
            <h3 className="h3 max-w-[470-px] mb-16">
              Saya pelajar yang tertarik dengan pengembangan front-end dan
              sedang belajar keterampilan yang dibutuhkan.
            </h3>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] traciking-wider font-primary font-semibold mb-6">
                        {" "}
                        {name}
                      </h4>
                      <p className=" font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
