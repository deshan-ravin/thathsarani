"use client"

import { useEffect, useRef, useState } from "react"

type AnimationOptions = {
  threshold?: number
  delay?: number
  rootMargin?: string
}

export function useAnimationOnScroll({ threshold = 0.1, delay = 0, rootMargin = "0px" }: AnimationOptions = {}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add delay if specified
          if (delay) {
            setTimeout(() => {
              setIsVisible(true)
            }, delay)
          } else {
            setIsVisible(true)
          }

          // Once we've seen it, no need to observe anymore
          if (ref.current) {
            observer.unobserve(ref.current)
          }
        }
      },
      {
        threshold,
        rootMargin,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold, delay, rootMargin])

  return { ref, isVisible }
}

