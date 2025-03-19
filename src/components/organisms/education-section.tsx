"use client"

import { motion } from "framer-motion";

const revealVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function EducationSection() {
  return (
    <section id="education" className="w-full bg-zinc-900 py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-5xl text-white font-bold border-b border-white pb-2 inline-block">My Education</h2>
        </div>

        {/* Education Items */}
        <div className="space-y-16">
        {/* Bachelor's Degree */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
        >
          <div className="order-1">
            <h3 className="text-3xl text-white font-medium mb-1">
              BSc. Financial Engineering (Ug)
            </h3>
            <p className="text-white text-lg mb-4">
              University of Kelaniya - Sri Lanka
            </p>
            <p className="text-white text-lg leading-relaxed">
              A multidisciplinary degree that combines finance, mathematics, and computational techniques to analyze and develop financial models. Focused on risk management, investment strategies, and quantitative finance, this program provides expertise in handling complex financial data and decision-making in capital markets.
            </p>
          </div>
          <div className="order-2 flex justify-end">
            <p className="text-[#d4e157] text-2xl font-medium">2023 - Present</p>
          </div>
        </motion.div>

        {/* Advanced Diploma */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
        >
          <div className="order-2 md:order-1 lg:mr-80 md:mr-80 flex justify-start md:justify-end">
            <p className="text-[#d4e157] text-2xl font-medium">2023 - 2024</p>
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-3xl text-white font-medium mb-1">
              Advanced Diploma in Financial Markets
            </h3>
            <p className="text-white text-lg mb-4">
              Colombo Stock Exchange - Colombo
            </p>
            <p className="text-white text-lg leading-relaxed">
              A professional qualification covering financial instruments, market structures, and trading strategies. The program enhances knowledge in stock market operations, portfolio management, and regulatory frameworks, preparing individuals for careers in investment banking, stock trading, and financial analytics.
            </p>
          </div>
        </motion.div>

        {/* GCE A/L */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
        >
          <div className="order-1">
            <h3 className="text-3xl text-white font-medium mb-1">
              GCE Advanced Level - Commerce
            </h3>
            <p className="text-white text-lg mb-4">
              Rathnavali Balika Vidyalaya - Gampaha
            </p>
            <p className="text-white text-lg leading-relaxed">
              Specialized in commerce subjects, including Accounting, Business Studies, and Economics. This program built a strong foundation in financial principles, entrepreneurship, and market dynamics, providing essential analytical and problem-solving skills for business and finance-related careers.
            </p>
          </div>
          <div className="order-2 flex justify-end">
            <p className="text-[#d4e157] text-2xl font-medium">2019 - 2022</p>
          </div>
        </motion.div>

        {/* GCE O/L */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
        >
          <div className="order-2 md:order-1 lg:mr-80 md:mr-80 flex justify-start md:justify-end">
            <p className="text-[#d4e157] text-2xl font-medium">2017 - 2018</p>
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-3xl text-white font-medium mb-1">
              GCE Ordinary Level
            </h3>
            <p className="text-white text-lg mb-4">
              Takshila College - Gampaha
            </p>
            <p className="text-white text-lg leading-relaxed">
              Completed secondary education with a strong academic background in core subjects such as Mathematics, Science, and English. Developed problem-solving skills, critical thinking, and a solid foundation for higher studies in business and finance.
            </p>
          </div>
        </motion.div>
      </div>


        {/* Back to top button */}
        <div className="flex justify-end mt-12">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 rounded-full bg-[#d4e157] flex items-center justify-center"
            aria-label="Back to top"
          >
            <span className="text-black font-bold">↑</span>
          </button>
        </div>
      </div>
    </section>
  );
}
