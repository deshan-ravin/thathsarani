"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Play, ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-zinc-900 text-white overflow-hidden">
      {/* Social Media Sidebar */}
      <div className="hidden md:flex flex-col items-center fixed right-6 top-1/2 -translate-y-1/2 z-10">
        <div
          className="vertical-text text-xs font-semibold tracking-widest text-zinc-400 mb-6 rotate-180"
          style={{ writingMode: "vertical-rl" }}
        >
          FOLLOW ME
        </div>
        <div className="w-px h-10 bg-zinc-700 mb-6"></div>
        <div className="flex flex-col gap-4">
          <Link href="#" className="text-zinc-400 hover:text-blue-300 transition-colors">
            FB
          </Link>
          <Link href="#" className="text-zinc-400 hover:text-red-300 transition-colors">
            IN
          </Link>
          <Link href="#" className="text-zinc-400 hover:text-blue-600 transition-colors">
            LN
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden md:flex flex-col items-center fixed right-12 bottom-8 z-10">
        <ChevronDown className="animate-bounce text-white" size={24} />
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-12 md:pt-24 pb-20 relative z-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Text Section */}
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }} // Start hidden and shifted left
            animate={{ opacity: 1, x: 0 }}  // Animate to visible
            transition={{ duration: 1, ease: "easeOut" }} // Smooth animation
          >
            <div className="inline-block bg-[#f3f9a7] text-zinc-900 px-3 py-1 text-xl font-bold rounded-full mb-6">
              Hello, I'm Piyumika Thathsarani
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="block text-[#f3f9a7]">Financial Engineering</span>
              <span className="block">Undergraduate</span>
            </h1>

            <div className="flex flex-wrap gap-6 mt-8">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-white border-b-2 border-[#f3f9a7] pb-1 hover:text-[#f3f9a7] transition-colors"
              >
                Hire Me <ArrowRight size={16} />
              </Link>

              <Link
                href="https://ox7h97jq8g.ufs.sh/f/Fu1M19R2heijuSZ9Zzq2JEehq5anVgtARTN0umjYpdrO3Bi8"
                className="inline-flex items-center gap-2 text-white border-b-2 border-white pb-1 hover:text-[#f3f9a7] hover:border-[#f3f9a7] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                Download CV <ArrowRight size={16} />
              </Link>
            </div>

            <div className="mt-12">
              <button className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-[#f3f9a7] hover:text-zinc-900 transition-colors">
                <Play size={18} />
              </button>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            className="order-1 md:order-2 relative"
            initial={{ opacity: 0, scale: 0.5 }} // Start from the center and small
            animate={{ opacity: 1, scale: 1 }}  // Grow and reveal
            transition={{ duration: 1.2, ease: "easeOut" }} // Smooth animation
          >
            <div className="relative h-[400px] md:h-[500px]">
              
              {/* Paint Splash Effect */}
              <motion.div
                className="absolute md:-top-5 right-0 w-full h-full z-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.4, ease: "easeOut" }}
              >
                <Image
                  src="/yellow.png"
                  alt="Paint splash"
                  width={800}
                  height={800}
                  className="object-contain opacity-80"
                />
              </motion.div>

              {/* Person Image */}
              <motion.div
                className="absolute top-0 md:right-25 w-full h-full z-10 flex justify-center md:justify-end"
                initial={{ opacity: 0, scale: 0.5 }} // Start small from center
                animate={{ opacity: 1, scale: 1 }}  // Reveal smoothly
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <Image
                  src="/sara.png"
                  alt="Web developer portrait"
                  width={400}
                  height={500}
                  className="object-contain"
                />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}
