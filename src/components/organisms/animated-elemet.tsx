"use client"

import { useAnimationOnScroll } from "@/hooks/use-animation-on-scroll"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

type AnimationType = "fade-up" | "fade-in" | "fade-left" | "fade-right" | "scale-up"

type AnimatedElementProps = {
  children: ReactNode
  className?: string
  delay?: number
  type?: AnimationType
  threshold?: number
  rootMargin?: string
}

export function AnimatedElement({
  children,
  className,
  delay = 0,
  type = "fade-up",
  threshold = 0.1,
  rootMargin = "0px",
}: AnimatedElementProps) {
  const { ref, isVisible } = useAnimationOnScroll({
    threshold,
    delay,
    rootMargin,
  })

  const animations = {
    "fade-up": "translate-y-10 opacity-0",
    "fade-in": "opacity-0",
    "fade-left": "-translate-x-10 opacity-0",
    "fade-right": "translate-x-10 opacity-0",
    "scale-up": "scale-95 opacity-0",
  }

  return (
    <div
      ref={ref}
      className={cn(
        className,
        !isVisible && animations[type],
        "transition-all duration-700 ease-out",
        isVisible && "translate-y-0 translate-x-0 scale-100 opacity-100",
      )}
    >
      {children}
    </div>
  )
}

