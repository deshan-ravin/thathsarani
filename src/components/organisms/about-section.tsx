"use client"
import Image from "next/image"
import Link from "next/link"
import CountUp from "react-countup"
import { ArrowUpRight } from "lucide-react"
import { AnimatedElement } from "./animated-elemet"
import { useAnimationOnScroll } from "../../hooks/use-animation-on-scroll"

export default function AboutSection() {
  const { ref: statsRef, isVisible: statsVisible } = useAnimationOnScroll({
    threshold: 0.2,
  })

  return (
    <section id="bio" className="w-full bg-zinc-900 text-white py-28 md:py-16 lg:py-32 px-4 md:px-8 overflow-hidden ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedElement type="fade-up" className="text-center mb-8">
          <p className="text-lg md:text-xl italic font-medium border-b-2 border-white inline-block mb-4">
            FINANCIAL ENGINEERING STUDENT
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-4xl mx-auto leading-tight">
            Bridging Finance & Technology for Innovative Solutions
          </h1>
        </AnimatedElement>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 mt-12">
          {/* Left Column - About Info */}
          <div className="space-y-8">
            <AnimatedElement type="fade-left" delay={200}>
              <div>
                <h2 className="text-xl font-semibold mb-2">About Me</h2>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Aspiring Financial Engineer</h3>
                <p className="text-gray-300 mb-6">
                  Passionate about quantitative finance, risk analysis, and financial modeling. Enthusiastic about
                  leveraging data-driven insights to optimize investment strategies and business decisions.
                </p>
              </div>
            </AnimatedElement>

            {/* Personal Details */}
            <AnimatedElement type="fade-up" delay={400}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-gray-400 w-28">Name</span>
                    <span className="text-gray-300">:</span>
                    <span className="ml-4">Piyumika Thathsarani</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-400 w-28">University</span>
                    <span className="text-gray-300">:</span>
                    <span className="ml-4">University of Kelaniya- Sri Lanka</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-400 w-28">Phone</span>
                    <span className="text-gray-300">:</span>
                    <span className="ml-4">(077)- XX XX XXX</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-400 w-28">Email</span>
                    <span className="text-gray-300">:</span>
                    <span className="ml-4">2002lwbandara@gmail.com</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-gray-400 w-28">Skills</span>
                    <span className="text-gray-300">:</span>
                    <span className="ml-4">Python, R, SQL, Financial Modeling</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-400 w-28">Seeking</span>
                    <span className="text-gray-300">:</span>
                    <span className="ml-4">Internship Opportunity</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-400 w-28">Interests</span>
                    <span className="text-gray-300">:</span>
                    <span className="ml-4">Investment Banking, Risk Management</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-400 w-28">Languages</span>
                    <span className="text-gray-300">:</span>
                    <span className="ml-4">English, Sinhala</span>
                  </div>
                </div>
              </div>
            </AnimatedElement>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <AnimatedElement type="scale-up" delay={600}>
                <div className="border border-zinc-700 rounded-lg p-6 text-center">
                  <h3 className="text-3xl font-bold">
                    {statsVisible ? <CountUp start={0} end={3.69} duration={2} decimals={2} /> : "0.00"}
                  </h3>
                  <p className="text-gray-400 text-sm">GPA</p>
                </div>
              </AnimatedElement>

              <AnimatedElement type="scale-up" delay={700}>
                <div className="border border-zinc-700 rounded-lg p-6 text-center">
                  <h3 className="text-3xl font-bold">
                    {statsVisible ? <CountUp start={0} end={2} duration={2} /> : "0"}
                  </h3>
                  <p className="text-gray-400 text-sm">Projects Completed</p>
                </div>
              </AnimatedElement>

              <AnimatedElement type="scale-up" delay={800}>
                <div className="border border-zinc-700 rounded-lg p-6 text-center">
                  <h3 className="text-3xl font-bold">
                    {statsVisible ? <CountUp start={0} end={5} duration={2} /> : "0"}
                  </h3>
                  <p className="text-gray-400 text-sm">Certifications</p>
                </div>
              </AnimatedElement>
            </div>
          </div>

          {/* Right Column - Image */}
          <AnimatedElement type="fade-left" delay={300}>
            <div className="relative">
              <div className="relative w-full max-w-sm mx-auto lg:mx-0">
                <Image
                  src="/s3.png"
                  alt="Aspiring Financial Engineer"
                  width={400}
                  height={500}
                  className="rounded-lg object-cover"
                />

                {/* Hire Me Button */}
                <AnimatedElement type="scale-up" delay={900}>
                  <div className="absolute top-4 right-4 md:top-8 md:right-8">
                    <div className="relative group">
                      {/* Animated outline circle */}
                      <div
                        className="absolute inset-0 rounded-full border-2 border-[#f0ff8d] w-24 h-24 -m-2 opacity-70 
                          transition-all duration-300 ease-out 
                          group-hover:scale-110 group-hover:opacity-100 
                          group-hover:rotate-12"
                      ></div>

                      {/* Main button */}
                      <Link
                        href="#contact"
                        className="flex items-center justify-center bg-[#f0ff8d] text-black font-medium rounded-full w-20 h-20 hover:bg-[#e5ff60] transition-colors"
                      >
                        <div className="flex flex-col items-center">
                          <ArrowUpRight className="w-5 h-5 mb-1" />
                          <span className="text-sm">Hire Me</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </AnimatedElement>

                {/* Experience Badge */}
                <AnimatedElement type="fade-up" delay={1000}>
                  <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-white text-black rounded-full py-2 px-4 flex items-center">
                    <span className="font-medium">Seeking Internship</span>
                    <ArrowUpRight className="w-4 h-4 ml-1" />
                  </div>
                </AnimatedElement>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  )
}

