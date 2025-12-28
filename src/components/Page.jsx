import { motion } from 'framer-motion'
import RevealShape from './RevealShape'
import { shapes, colors } from '../styles/tokens'

export default function Page({ data, isActive, printMode = false, forceRevealed = false }) {
  const textColor = data.textColor || '#2D3436'

  // Print mode sizes (much larger for 5824x2944 resolution)
  const printScale = printMode ? 4 : 1
  const getSize = (baseSize) => baseSize * printScale
  const getTextClass = (webClass, printClass) => printMode ? printClass : webClass

  if (data.type === 'title') {
    if (printMode) {
      // Cover: content only on RIGHT half (becomes front cover when folded)
      // Left half is back cover (blank or simple)
      const decorSize = 180
      return (
        <div
          className="h-full flex"
          style={{ backgroundColor: data.background }}
        >
          {/* Left page - back cover with subtle decoration */}
          <div
            className="flex-1 flex items-center justify-center relative"
            style={{ paddingRight: '60px' }}
          >
            {/* Scattered shapes on back cover */}
            <div style={{ position: 'absolute', top: '15%', left: '20%', opacity: 0.4 }}>
              {shapes.circle(colors.sun, decorSize * 0.6)}
            </div>
            <div style={{ position: 'absolute', bottom: '20%', right: '25%', opacity: 0.4 }}>
              {shapes.heart(colors.coral, decorSize * 0.5)}
            </div>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.3 }}>
              {shapes.star(colors.ocean, decorSize * 0.7)}
            </div>
          </div>

          {/* Gutter for fold */}
          <div style={{ width: '120px' }} />

          {/* Right page - FRONT COVER with title and graphics */}
          <div
            className="flex-1 flex flex-col items-center justify-center relative"
            style={{ paddingLeft: '100px' }}
          >
            {/* Decorative shapes around title */}
            <div style={{ position: 'absolute', top: '8%', left: '15%' }}>
              {shapes.star(colors.sun, decorSize)}
            </div>
            <div style={{ position: 'absolute', top: '12%', right: '12%' }}>
              {shapes.heart(colors.coral, decorSize * 0.9)}
            </div>
            <div style={{ position: 'absolute', bottom: '15%', left: '10%' }}>
              {shapes.circle(colors.ocean, decorSize * 0.8)}
            </div>
            <div style={{ position: 'absolute', bottom: '10%', right: '15%' }}>
              {shapes.flower(colors.pink, decorSize)}
            </div>
            <div style={{ position: 'absolute', top: '45%', left: '5%' }}>
              {shapes.moon(colors.night, decorSize * 0.6)}
            </div>
            <div style={{ position: 'absolute', top: '40%', right: '5%' }}>
              {shapes.sun(colors.sun, decorSize * 0.7)}
            </div>

            {/* Title */}
            <h1
              className="font-bold text-center relative z-10"
              style={{ color: textColor, fontSize: '220px', lineHeight: 1.1 }}
            >
              {data.title}
            </h1>
            <p
              className="text-center relative z-10"
              style={{ color: textColor, opacity: 0.6, fontSize: '70px', marginTop: '40px' }}
            >
              Tiny Transformers Book 1
            </p>
          </div>
        </div>
      )
    }

    const decorSize = 60
    return (
      <div
        className="h-full flex flex-col items-center justify-center p-8 relative overflow-hidden"
        style={{ backgroundColor: data.background }}
      >
        {/* Decorative shapes */}
        <motion.div
          style={{ position: 'absolute', top: '8%', left: '10%' }}
          initial={{ opacity: 0, scale: 0, rotate: -20 }}
          animate={isActive ? { opacity: 1, scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {shapes.star(colors.sun, decorSize)}
        </motion.div>
        <motion.div
          style={{ position: 'absolute', top: '12%', right: '10%' }}
          initial={{ opacity: 0, scale: 0, rotate: 20 }}
          animate={isActive ? { opacity: 1, scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {shapes.heart(colors.coral, decorSize * 0.9)}
        </motion.div>
        <motion.div
          style={{ position: 'absolute', bottom: '18%', left: '8%' }}
          initial={{ opacity: 0, scale: 0 }}
          animate={isActive ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {shapes.circle(colors.ocean, decorSize * 0.8)}
        </motion.div>
        <motion.div
          style={{ position: 'absolute', bottom: '15%', right: '8%' }}
          initial={{ opacity: 0, scale: 0, rotate: 15 }}
          animate={isActive ? { opacity: 1, scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {shapes.flower(colors.pink, decorSize)}
        </motion.div>
        <motion.div
          style={{ position: 'absolute', top: '40%', left: '5%' }}
          initial={{ opacity: 0, x: -20 }}
          animate={isActive ? { opacity: 0.8, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {shapes.moon(colors.night, decorSize * 0.5)}
        </motion.div>
        <motion.div
          style={{ position: 'absolute', top: '35%', right: '5%' }}
          initial={{ opacity: 0, x: 20 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          {shapes.sun(colors.sun, decorSize * 0.6)}
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6 text-center relative z-10"
          style={{ color: textColor }}
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {data.title}
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl opacity-70 relative z-10"
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
    const baseSize = printMode ? 400 : 140

    if (printMode) {
      // Split layout for print: left page = prompt, right page = shapes
      // With gutter in middle for fold
      return (
        <div
          className="h-full flex"
          style={{ backgroundColor: data.background }}
        >
          {/* Left page - prompt */}
          <div
            className="flex-1 flex items-center justify-center"
            style={{ paddingRight: '100px' }}
          >
            <p
              className="font-bold text-center"
              style={{ color: textColor, fontSize: '160px', lineHeight: 1.2 }}
            >
              {data.prompt}
            </p>
          </div>

          {/* Gutter for fold */}
          <div style={{ width: '120px' }} />

          {/* Right page - shapes */}
          <div
            className="flex-1 flex items-center justify-center"
            style={{ paddingLeft: '100px' }}
          >
            <div className="flex items-center justify-center" style={{ gap: '50px' }}>
              {data.pattern.map((item, i) => (
                <div key={i}>
                  {shapes[item.shape](item.color, (item.size || 100) * printScale)}
                </div>
              ))}

              {forceRevealed ? (
                <div>
                  {shapes[data.answer.shape](data.answer.color, (data.answer.size || 100) * printScale)}
                </div>
              ) : (
                <div>
                  {shapes.question(data.answer.color, (data.answer.size || 100) * printScale)}
                </div>
              )}
            </div>
          </div>
        </div>
      )
    }

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

  if (data.type === 'scene') {
    const sceneSize = printMode ? 700 : (data.answer.size || 260)

    if (printMode) {
      // Split layout for print
      return (
        <div
          className="h-full flex"
          style={{ backgroundColor: data.background }}
        >
          {/* Left page - prompt */}
          <div
            className="flex-1 flex flex-col items-center justify-center"
            style={{ paddingRight: '100px', gap: '40px' }}
          >
            <p
              className="font-bold text-center"
              style={{ color: textColor, fontSize: '140px', lineHeight: 1.2 }}
            >
              {data.prompt}
            </p>
            <p
              className="font-bold"
              style={{ color: textColor, fontSize: '140px', visibility: forceRevealed ? 'visible' : 'hidden' }}
            >
              mat!
            </p>
          </div>

          {/* Gutter for fold */}
          <div style={{ width: '120px' }} />

          {/* Right page - illustration */}
          <div
            className="flex-1 flex items-center justify-center"
            style={{ paddingLeft: '100px' }}
          >
            {forceRevealed ? (
              <div>
                {shapes[data.answer.shape](data.answer.color, sceneSize)}
              </div>
            ) : (
              <div>
                {shapes.question(data.answer.color, sceneSize)}
              </div>
            )}
          </div>
        </div>
      )
    }

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
    const iconSize = printMode ? 240 : 90

    if (printMode) {
      // Split layout for finale
      return (
        <div
          className="h-full flex"
          style={{ backgroundColor: data.background }}
        >
          {/* Left page - title and message */}
          <div
            className="flex-1 flex flex-col items-center justify-center"
            style={{ paddingRight: '100px', gap: '50px' }}
          >
            <h1
              className="font-bold text-center"
              style={{ color: textColor, fontSize: '180px' }}
            >
              {data.title}
            </h1>
            <p
              className="text-center"
              style={{ color: textColor, fontSize: '70px', lineHeight: 1.4 }}
            >
              {data.subtitle}
              <br />
              <strong>{data.message}</strong>
            </p>
          </div>

          {/* Gutter for fold */}
          <div style={{ width: '120px' }} />

          {/* Right page - shapes */}
          <div
            className="flex-1 flex items-center justify-center"
            style={{ paddingLeft: '100px' }}
          >
            <div className="flex items-center justify-center flex-wrap" style={{ gap: '40px', maxWidth: '1400px' }}>
              {data.shapes.map((item, i) => (
                <div key={i}>
                  {shapes[item.shape](item.color, iconSize)}
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    }

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
