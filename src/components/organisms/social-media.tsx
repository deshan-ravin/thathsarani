import { FloatingDock } from "@/components/ui/floating-dock"
import Image from "next/image"

export default function SocialMedia() {
  const links = [
    {
      title: "Facebook",
      icon: <Image src="/fb.png" alt="Facebook" width={24} height={24} className="h-full w-full" />,
      href: "https://www.facebook.com/your-profile", // Replace with your actual Facebook URL
    },
    {
      title: "WhatsApp",
      icon: <Image src="/wa.png" alt="WhatsApp" width={24} height={24} className="h-full w-full" />,
      href: "https://wa.me/your-phone-number", // Replace with your WhatsApp number link
    },
    {
      title: "LinkedIn",
      icon: <Image src="/li.png" alt="LinkedIn" width={24} height={24} className="h-full w-full" />,
      href: "https://www.linkedin.com/in/your-profile", // Replace with your actual LinkedIn URL
    },
    {
      title: "Instagram",
      icon: <Image src="/ig.png" alt="Instagram" width={24} height={24} className="h-full w-full" />,
      href: "https://www.instagram.com/your-profile", // Replace with your actual Instagram URL
    },
  ]

  return (
    <div className="flex items-center justify-center w-full bg-zinc-900">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links.map(link => ({
          ...link,
          icon: <a href={link.href} target="_blank" rel="noopener noreferrer">{link.icon}</a>, // Wrap the icon in a link
        }))}
      />
    </div>
  )
}
