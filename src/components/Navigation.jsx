import { motion } from 'framer-motion'

export default function Navigation({ currentPage, totalPages, onPrev, onNext }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 flex items-center justify-between z-50">
      {/* Previous button */}
      <motion.button
        onClick={onPrev}
        className="w-12 h-12 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow-lg disabled:opacity-30"
        disabled={currentPage === 0}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2D3436" strokeWidth="2.5">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </motion.button>

      {/* Page dots */}
      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <motion.div
            key={i}
            className="rounded-full"
            animate={{
              width: i === currentPage ? 24 : 8,
              backgroundColor: i === currentPage ? '#2D3436' : '#2D343640',
            }}
            transition={{ duration: 0.2 }}
            style={{ height: 8 }}
          />
        ))}
      </div>

      {/* Next button */}
      <motion.button
        onClick={onNext}
        className="w-12 h-12 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow-lg disabled:opacity-30"
        disabled={currentPage === totalPages - 1}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2D3436" strokeWidth="2.5">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </motion.button>
    </div>
  )
}
