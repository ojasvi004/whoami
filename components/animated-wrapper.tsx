"use client"

import type React from "react"
import { motion } from "framer-motion"

interface AnimatedWrapperProps {
  children: React.ReactNode
  delay?: number
}

const AnimatedWrapper = ({ children, delay = 0 }: AnimatedWrapperProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        delay: delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedWrapper
