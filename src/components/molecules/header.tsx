"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="w-full bg-neutral-900 text-white py-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-3xl font-cursive font-semibold" style={{
            background:
              "linear-gradient(90deg, #FFE459 0%, #FFFFFF 45.75%, #FFEA80 60.21%, #FFE459 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
          Thathsarani FE
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <CTAButton />
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "fixed inset-0 bg-[#1a1a1a] z-50 flex flex-col px-6 md:hidden transition-transform duration-300 ease-in-out",
            isMenuOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          {/* Close button inside mobile menu */}
          <div className="flex justify-end pt-6">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white p-2 hover:bg-gray-800 rounded-full"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col space-y-6 items-center pt-12">
            <NavLinks onClick={() => setIsMenuOpen(false)} />
          </nav>
          <div className="mt-8 flex justify-center">
            <CTAButton />
          </div>
        </div>
      </div>
    </header>
  )
}

function NavLinks({ onClick }: { onClick?: () => void }) {
  const links = [
    { href: "/", label: "HOME" },
    { href: "#bio", label: "BIO" },
    { href: "#experience", label: "EXPERIENCE" },
    { href: "#education", label: "EDUCATION" },
    { href: "#contact", label: "CONTACT" },
  ]

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="font-medium hover:text-gray-300 transition-colors"
          onClick={onClick}
        >
          {link.label}
        </Link>
      ))}
    </>
  )
}

function CTAButton() {
  return (
    <Link
      href="/contact"
      className="bg-[#f3f9a7] hover:bg-yellow-400 text-black px-6 py-3 rounded-md font-medium flex items-center space-x-2 hover:bg-opacity-90 transition-colors"
    >
      <span>Let&apos;s Talk</span>
      <ArrowRight className="h-4 w-4" />
    </Link>
  )
}
