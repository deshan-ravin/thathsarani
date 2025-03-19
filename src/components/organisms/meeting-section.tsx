"use client"

import { useRef } from "react"
import Image from "next/image"
import { Mail, MapPin} from "lucide-react"
import { motion, useInView } from "framer-motion" // Added useInView hook
import styles from "./meeting-section.module.css"

export default function MeetingSection() {
  // Create refs for the elements we want to animate
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const imageRef = useRef(null)

  // Set up useInView hooks
  const isTextInView = useInView(textRef, { once: true, amount: 0.3 })
  const isImageInView = useInView(imageRef, { once: true, amount: 0.3 })

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <section
    id="contact"
      ref={sectionRef}
      className="relative bg-zinc-900 text-white py-12 md:py-16 px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            ref={textRef}
            className="z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg md:text-3xl font-bold mb-2 inline-block">
              <span className="relative">
                Need a Project?
                <span className={styles.animatedUnderline}></span>
              </span>
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-6 mb-12 leading-tight">
              Let&apos;s Work Together.
              <br />
              Fixed A Meeting
            </h2>

            <div className="space-y-20 mt-8">
              <div className="flex items-center gap-4">
                <div className="bg-[#f8ffa4] rounded-full p-3 w-14 h-14 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <p className="text-2xl font-medium">Email</p>
                  <p className="text-xl">2002lwbandara@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#f8ffa4] rounded-full p-3 w-14 h-14 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <p className="text-2xl font-medium">Location</p>
                  <p className="text-xl">Ihala Yagoda, Gampaha, Sri Lanka</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={imageRef}
            className="relative flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isImageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Image
              src="/exp.png"
              alt="3D character with laptop and plant"
              width={400}
              height={500}
              className="z-10 relative"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

