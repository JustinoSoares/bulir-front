import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import type { MouseEvent, ReactNode } from 'react'


function MagnetButton ({
  children = 'Hover Me',
  className = ''
}: {
  children?: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLButtonElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 15, stiffness: 150 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  const rotateX = useTransform(y, [-20, 20], [10, -10])
  const rotateY = useTransform(x, [-20, 20], [-10, 10])

  const handleMouseMove = (e: MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (rect) {
      const centerX = rect.x + rect.width / 2
      const centerY = rect.y + rect.height / 2

      mouseX.set(e.clientX - centerX)
      mouseY.set(e.clientY - centerY)
    }
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.button
      ref={ref}
      className={`px-8 py-4 bg-[#28b39cb0] text-white rounded-full transition-colors ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x,
        y,
        rotateX,
        rotateY
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  )
}

type MyComponentProps = {
  children: ReactNode;
  className?: string;
}

// Demo/Example Usage
export default function MagneticButton ({children, className}: MyComponentProps) {
  return (
    <div>
      <MagnetButton className={className}>{children}</MagnetButton>
    </div>
  )
}
