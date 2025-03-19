import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ContactButton() {
  return (
    <section className="flex items-center justify-center h-40 bg-zinc-900">
      <Link
        href="/contact"
        className="bg-[#f3f9a7] hover:bg-yellow-400 text-black px-6 py-3 rounded-md font-medium flex items-center space-x-2 hover:bg-opacity-90 transition-colors"
      >
        <span>Let&apos;s Talk</span>
        <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  )
}
