import React from "react";
import { motion } from "framer-motion";

import { fadeIn } from "../variants";

import img1 from "../assets/portfolio-img1.png";
import img2 from "../assets/portfolio-img2.png";
import img3 from "../assets/portfolio-img3.png";
import img4 from "../assets/Tefa.png";
import img5 from "../assets/portfolio-img5.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10lg:mb-0"
          >
            <div>
              <h2 className="h2 leading-tight text-accent">
                Hasil proyek <br />
                Saya.
              </h2>
              <p className="max-w-sm mb-16">
                Hai, ini adalah projek buatan saya dan tim saya yang selama ini
                kami kerjakan di SMKN4
              </p>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 translate-all duration-500"
                src={img1}
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Front-End</span>
              </div>
              <div>
                Website ini berisi informasi mengenai data pribadi saya dan
                hasil projek saya.
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Portofolio</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 translate-all duration-500"
                src={img2}
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Front-End</span>
              </div>
              <div>
                Website yang dirancang untuk memudahkan restoran dalam menerima
                pesanan online, memungkinkan pelanggan untuk memesan makanan dan
                minuman langsung dari menu.
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Restaurant Phoenix</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  className="group-hover:scale-125 translate-all duration-500"
                  src={img3}
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">Back-end</span>
                </div>
                <div>Belajar Express JS</div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">Express JS</span>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 translate-all duration-500"
                src={img4}
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Front-End Leader</span>
              </div>
              <div>
                Proyek Curaweda yang digunakan untuk absensi kantor 
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">SmartAttendance</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  className="group-hover:scale-125 translate-all duration-500"
                  src={img5}
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">Front-End</span>
                </div>
                <div>
                  Website dibuat oleh saya dan teman saya, tujuan dari website
                  ini adalah agar mencari barang seperti tentang otomotif lebih
                  mudah
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">AutoParts</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
