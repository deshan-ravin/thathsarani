import { Facebook, Instagram, Linkedin, Mail, Home, Info, Youtube } from "lucide-react"
import Image from "next/image"
import Form from "../molecules/form"

export default function ContactMe() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white relative overflow-hidden">
      {/* Social Media Icons */}
      <div className="absolute top-8 right-8 flex gap-4">
        <a href="#" className="rounded-full bg-transparent hover:opacity-80 transition-opacity">
          <Facebook className="w-6 h-6 text-white" />
        </a>
        <a href="#" className="rounded-full bg-transparent hover:opacity-80 transition-opacity">
          <Instagram className="w-6 h-6 text-white" />
        </a>
        <a href="#" className="rounded-full bg-transparent hover:opacity-80 transition-opacity">
          <Linkedin className="w-6 h-6 text-white" />
        </a>
        <a href="#" className="rounded-full bg-transparent hover:opacity-80 transition-opacity">
          <div className="w-6 h-6 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9 12h6"></path>
              <path d="M12 9v6"></path>
            </svg>
          </div>
        </a>
        <a href="#" className="rounded-full bg-transparent hover:opacity-80 transition-opacity">
          <Youtube className="w-6 h-6 text-white" />
        </a>
      </div>

      {/* Side Navigation */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 space-y-4 z-10 md:block hidden">
        <a
          href="/"
          className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
        >
          <Home className="w-5 h-5 text-white" />
        </a>
        <a
          href="#"
          className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
        >
          <Mail className="w-5 h-5 text-black" />
        </a>
        <a
          href="#"
          className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
        >
          <Info className="w-5 h-5 text-white" />
        </a>
      </div>

      {/* Mobile Navigation */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-4 z-10 md:hidden">
        <a
          href="/"
          className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
        >
          <Home className="w-5 h-5 text-white" />
        </a>
        <a
          href="#"
          className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
        >
          <Mail className="w-5 h-5 text-black" />
        </a>
        <a
          href="#"
          className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
        >
          <Info className="w-5 h-5 text-white" />
        </a>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row h-screen">
        {/* Form Section */}
        <Form />

        {/* Image Section */}
        <div className="w-full md:w-1/2 relative hidden md:block">
          <div className="absolute right-0 bottom-0 w-full h-full">
          <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" 
                width="700" height="700" viewBox="0 0 400 400"
                xmlns="http://www.w3.org/2000/svg">
            <path fill="#FACC15" d="M83,-92.7C110.5,-67.6,135.4,-45,148.9,-13.7C162.4,17.6,164.4,58.5,144.9,88.6C125.3,118.7,84.2,137.9,42.6,144.5C1.1,151.1,-40.8,145,-73.2,124.4C-105.7,103.8,-128.6,68.8,-137.2,32.4C-145.9,-3.9,-140.4,-41.9,-120.8,-69.6C-101.2,-97.4,-67.6,-115,-35.5,-127.1C-3.3,-139.2,27.4,-145.8,83,-92.7Z" 
                    transform="translate(200 200)" />
            </svg>

            <Image
              src="/sara2.png"
              alt="Professional woman with phone"
              width={450}
              height={550}
              className="absolute bottom-30 right-20 z-10 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

