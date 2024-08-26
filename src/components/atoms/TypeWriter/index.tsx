'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useState, useCallback, useMemo } from 'react'

type TypeWriterProps = {
  text: string | string[]
  loop?: boolean
  duration?: number
}

const CURSOR_BLINK_DURATION = 1
const ERASE_DELAY = 700
const TWEEN_TYPE = 'tween'
const EASE_TYPE = 'linear'

export const TypeWriter = ({
  text,
  loop = true,
  duration = 0.5,
}: TypeWriterProps) => {
  const texts = useMemo(() => (Array.isArray(text) ? text : [text]), [text])
  const [currentIndex, setCurrentIndex] = useState(0)
  const count = useMotionValue(0)

  const displayText = useTransform(count, (latest) =>
    texts[currentIndex]?.slice(0, Math.round(latest)),
  )

  const animateText = useCallback(
    (target: number, onComplete?: () => void) => {
      return animate(count, target, {
        type: TWEEN_TYPE,
        duration,
        ease: EASE_TYPE,
        onComplete,
      })
    },
    [count, duration],
  )

  const handleComplete = useCallback(() => {
    if (loop || currentIndex < texts.length - 1) {
      setTimeout(() => {
        animateText(0, () => {
          setCurrentIndex((prev) => (prev + 1) % texts.length)
          if (loop && texts.length === 1) {
            animateText(texts[currentIndex].length, handleComplete)
          }
        })
      }, ERASE_DELAY)
    }
  }, [loop, currentIndex, texts, animateText])

  useEffect(() => {
    const controls = animateText(texts[currentIndex].length, handleComplete)
    return () => controls.stop()
  }, [text, loop, currentIndex, animateText, texts, handleComplete])

  useEffect(() => {
    setCurrentIndex(0)
    count.set(0)
  }, [text, loop, count])

  return (
    <span>
      <motion.span>{displayText}</motion.span>
      <motion.span
        animate={{ opacity: [0, 1] }}
        transition={{ repeat: Infinity, duration: CURSOR_BLINK_DURATION }}
        className="text-sm">
        |
      </motion.span>
    </span>
  )
}
