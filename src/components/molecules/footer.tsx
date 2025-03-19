import Link from "next/link"
import { MapPin, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8 border-t-2 border-zinc-600">
      <div className="max-w-6xl mx-auto">
        {/* Main grid for desktop layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Intro */}
          <div className="space-y-4">
            <h2
              className="text-4xl font-bold font-cursive"
              style={{
                background: "linear-gradient(90deg, #FFE459 0%, #FFFFFF 45.75%, #FFEA80 60.21%, #FFE459 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Thathasarani
            </h2>
            <p className="text-sm">
              Hello, I'm Thathsarani, Financial Engineering UG at University of Kelaniya, Sri Lanka.
            </p>
          </div>

          {/* Container for Quick Links and Address on mobile */}
          <div className="col-span-4 md:col-span-2 grid grid-cols-2 sm:gap-1 md:gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
              <ul className="space-y-2">
                {["Service", "Project", "Blog", "FAQs", "Contact"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-yellow-400 transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Address */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Address</h3>
              <ul className="space-y-4 ">
                <li className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Yakkala Rd, Gampaha, Sri Lanka
                </li>
                <li className="flex items-center">
                  <Mail className="w-10 h-10 mr-2" />
                  lwbandara2002@gmail.co
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  +94 77 XXX XXXX
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright and Theme Toggle */}
      <div className="mt-8 pt-8 border-t border-gray-800 flex justify-center items-center">
        <p className="text-sm">Copyright © 2025 Thathsarani. All rights reserved.</p>
      </div>
    </footer>
  )
}
