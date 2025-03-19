"use client"

import Image from "next/image"
import { ArrowUpRight, ChevronUp, Code } from "lucide-react"
import { motion } from "framer-motion"

export default function JobInfo() {
  return (
    <div id="experience" className="min-h-screen bg-zinc-900 text-white p-4 md:p-8 lg:p-12 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold border-b border-zinc-700 pb-2 mb-8">My Job Info</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Left column - Image */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }} // Trigger animation when the image is 20% in view
          >
            <div className="relative w-full max-w-md overflow-hidden">
              <Image
                src="/stat.png"
                width={500}
                height={500}
                alt="3D illustration of person with charts"
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Right column - Experience */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }} // Trigger animation when the experience content is 20% in view
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">My Experience</h2>
              <p className="text-zinc-300 mb-8">
                I worked as an intern at Commercial Bank Sri Lanka for 6 months in 2023, where I gained valuable industry experience.
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-8 relative before:absolute before:left-0 before:top-2 before:bottom-2 before:w-1 before:bg-lime-300">
              {/* Internship */}
              <div className="pl-8 relative">
                <div className="absolute left-[-10px] top-2 bg-lime-300 p-2 rounded-md">
                  <Code className="h-4 w-4 text-zinc-900" />
                </div>
                <div className="flex justify-between items-start mb-1">
                  <span className="text-zinc-400">2023</span>
                  <ArrowUpRight className="h-5 w-5 text-zinc-400" />
                </div>
                <h3 className="text-2xl font-bold">Intern</h3>
                <p className="text-zinc-400">Commercial Bank Sri Lanka</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll to top button */}
        <div className="fixed bottom-6 right-6">
          <button
            className="bg-yellow-200 text-zinc-900 p-3 rounded-full shadow-lg hover:bg-lime-400 transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
