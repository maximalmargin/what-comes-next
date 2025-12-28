import { motion } from 'framer-motion'
import RevealShape from './RevealShape'
import { shapes } from '../styles/tokens'

export default function Page({ data, isActive }) {
  const textColor = data.textColor || '#2D3436'

  if (data.type === 'title') {
    return (
      <div
        className="h-full flex flex-col items-center justify-center p-8"
        style={{ backgroundColor: data.background }}
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6 text-center"
          style={{ color: textColor }}
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {data.title}
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl opacity-70"
          style={{ color: textColor }}
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 0.7 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {data.subtitle}
        </motion.p>
        <motion.div
          className="mt-8"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={textColor} strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </div>
    )
  }

  if (data.type === 'pattern' || data.type === 'size') {
    const baseSize = 140
    return (
      <div
        className="h-full flex flex-col items-center justify-center p-6 gap-8"
        style={{ backgroundColor: data.background }}
      >
        <motion.p
          className="text-3xl md:text-5xl font-medium"
          style={{ color: textColor }}
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
        >
          {data.prompt}
        </motion.p>

        <div className="flex items-center justify-center gap-4 md:gap-6 flex-wrap">
          {data.pattern.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={isActive ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.15, duration: 0.3 }}
            >
              {shapes[item.shape](item.color, item.size || baseSize)}
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isActive ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: data.pattern.length * 0.15, duration: 0.3 }}
          >
            <RevealShape
              shape={data.answer.shape}
              color={data.answer.color}
              size={data.answer.size || baseSize}
            />
          </motion.div>
        </div>
      </div>
    )
  }

  if (data.type === 'words') {
    return (
      <div
        className="h-full flex flex-col items-center justify-center p-6 gap-6"
        style={{ backgroundColor: data.background }}
      >
        <motion.p
          className="text-2xl md:text-4xl font-medium text-center"
          style={{ color: textColor }}
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
        >
          {data.prompt}
        </motion.p>

        <div className="flex items-end justify-center gap-6">
          {data.pattern.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              {shapes[item.shape](item.color, 100)}
            </motion.div>
          ))}

          <motion.div
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
          >
            <RevealShape
              shape={data.answer.shape}
              color={data.answer.color}
              size={100}
            />
          </motion.div>
        </div>
      </div>
    )
  }

  if (data.type === 'scene') {
    return (
      <div
        className="h-full flex flex-col items-center justify-center p-6 gap-8"
        style={{ backgroundColor: data.background }}
      >
        <motion.p
          className="text-3xl md:text-5xl font-medium text-center"
          style={{ color: textColor }}
          initial={{ opacity: 0, y: -20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {data.prompt}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isActive ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <RevealShape
            shape={data.answer.shape}
            color={data.answer.color}
            size={data.answer.size || 260}
          />
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl font-medium"
          style={{ color: textColor }}
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 0.7 } : {}}
          transition={{ delay: 0.5 }}
        >
          mat!
        </motion.p>
      </div>
    )
  }

  if (data.type === 'finale') {
    return (
      <div
        className="h-full w-full flex flex-col items-center justify-center p-8 gap-6"
        style={{ backgroundColor: data.background }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-center w-full"
          style={{ color: textColor }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isActive ? { opacity: 1, scale: 1 } : {}}
          transition={{ type: 'spring', duration: 0.6 }}
        >
          {data.title}
        </motion.h1>

        <motion.p
          className="text-2xl md:text-3xl text-center w-full"
          style={{ color: textColor }}
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          {data.subtitle}
          <br />
          <strong>{data.message}</strong>
        </motion.p>

        <div className="w-full flex items-center justify-center gap-4 md:gap-6 mt-6">
          {data.shapes.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, rotate: -20 }}
              animate={isActive ? {
                opacity: 1,
                y: 0,
                rotate: 0,
              } : {}}
              transition={{
                delay: 0.5 + i * 0.1,
                type: 'spring',
                stiffness: 200,
              }}
            >
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              >
                {shapes[item.shape](item.color, 90)}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    )
  }

  return null
}
