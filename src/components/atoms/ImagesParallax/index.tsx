/* eslint-disable no-use-before-define */
'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

import { useScroll, useTransform, motion } from 'framer-motion'

type TImagesParallax = {
  images: string[]
}

export const ImagesParallax = ({ images }: TImagesParallax) => {
  const gallery = useRef(null)

  const [dimension, setDimension] = useState({ width: 0, height: 0 })

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start'],
  })

  const { height } = dimension
  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight })
    }
    window.addEventListener('resize', resize)
    resize()

    return () => window.removeEventListener('resize', resize)
  }, [])

  return (
    <div
      ref={gallery}
      className="box-content flex h-[180vh] gap-4 overflow-hidden bg-transparent ">
      <Column
        images={[images[1], images[3], images[5]]}
        y={y1}
        classes="top-[-45%]"
      />
      <Column
        images={[images[0], images[2], images[4]]}
        y={y2}
        classes="top-[-95%]"
      />
      <Column
        images={[images[6], images[7], images[8]]}
        y={y3}
        classes="top-[-65%] hidden lg:flex"
      />
    </div>
  )
}

type Column = { images: string[]; y: any; classes: string }

const Column = ({ images, y = 0, classes }: Column) => {
  return (
    <motion.div
      style={{ y }}
      className={`relative flex h-full w-full min-w-[140px] flex-col gap-4 ${classes}`}>
      {images.map((src, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: idx * 0.2 }}
          className="relative h-full w-full overflow-hidden rounded-3xl">
          <Image
            src={src}
            fill
            alt="img"
            priority={true}
            className="object-cover"
          />
          <div className="absolute inset-0  backdrop-grayscale transition-all duration-300 hover:backdrop-grayscale-0 hover:backdrop-saturate-100" />
        </motion.div>
      ))}
    </motion.div>
  )
}
