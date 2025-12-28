import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { shapes, colors } from '../styles/tokens'

export default function RevealShape({ shape, color, size = 80 }) {
  const [revealed, setRevealed] = useState(false)

  const handleTap = () => {
    if (!revealed) {
      setRevealed(true)
    }
  }

  return (
    <motion.div
      className="cursor-pointer select-none"
      onClick={handleTap}
      whileTap={{ scale: 0.95 }}
    >
      <AnimatePresence mode="wait">
        {!revealed ? (
          <motion.div
            key="question"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            {shapes.question(color, size)}
          </motion.div>
        ) : (
          <motion.div
            key="answer"
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{
              opacity: 1,
              scale: [0.5, 1.15, 1],
              rotate: [-10, 5, 0]
            }}
            transition={{
              duration: 0.5,
              times: [0, 0.6, 1],
              ease: "easeOut"
            }}
          >
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: "easeInOut"
              }}
            >
              {shapes[shape](color, size)}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
