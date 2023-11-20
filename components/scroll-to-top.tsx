'use client'

import { useEffect, useState } from 'react'
import { ChevronUpCircle } from 'lucide-react'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const threshold = 300

      setIsVisible(scrollTop > threshold)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      className="{`${
        isVisible ? 'opacity-100' : 'opacity-0'
      } fixed bottom-4 right-4 p-2 rounded-full transition-opacity duration-300 ease-in-out`}" onClick={scrollToTop}
    >
      <ChevronUpCircle />
    </button>
  )
}