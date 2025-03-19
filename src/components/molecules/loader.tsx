"use client"

import type React from "react"
import { useEffect, useState } from "react"

const Loader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Start the animation after component mounts
    setIsVisible(true)
  }, [])

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#0D0D0D]">
      <div
        className={`mb-4 overflow-hidden transition-all duration-[3000ms] ${isVisible ? "opacity-100" : "opacity-0"}`}
        style={{
          fontFamily: "'Dancing Script', cursive",
          color: "#f3f9a7",
          fontSize: "5.5rem",
        }}
      >
        <div className={`transition-transform duration-[3000ms] ${isVisible ? "translate-y-0" : "translate-y-full"}`}>
          Finance Leader in Making
        </div>
      </div>

      <div className="relative w-16 h-16 border border-[#f3f9a7] rounded-lg flex justify-center items-center animate-blink">
        <span className="text-[#f3f9a7] text-2xl font-bold">Tp</span>
      </div>
    </div>
  )
}

export default Loader

