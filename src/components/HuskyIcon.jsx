import { motion } from 'framer-motion'

// UW Husky mascot inspired icon - stylized wolf/husky head
export default function HuskyIcon({ className = "w-8 h-8", animate = true }) {
  const Icon = (
    <svg 
      viewBox="0 0 100 100" 
      className={className}
      fill="currentColor"
    >
      {/* Husky head silhouette */}
      <path d="M50 5 L25 25 L20 20 L15 35 L25 45 L20 55 L25 70 L35 75 L50 95 L65 75 L75 70 L80 55 L75 45 L85 35 L80 20 L75 25 L50 5 Z" 
            fill="currentColor" opacity="0.95"/>
      {/* Left ear */}
      <path d="M25 25 L20 20 L15 35 L25 35 Z" fill="currentColor"/>
      {/* Right ear */}
      <path d="M75 25 L80 20 L85 35 L75 35 Z" fill="currentColor"/>
      {/* Face marking - white stripe */}
      <path d="M50 30 L42 45 L45 65 L50 75 L55 65 L58 45 Z" fill="white" opacity="0.9"/>
      {/* Left eye */}
      <ellipse cx="38" cy="45" rx="5" ry="6" fill="white"/>
      <circle cx="38" cy="45" r="3" fill="#00205B"/>
      {/* Right eye */}
      <ellipse cx="62" cy="45" rx="5" ry="6" fill="white"/>
      <circle cx="62" cy="45" r="3" fill="#00205B"/>
      {/* Nose */}
      <ellipse cx="50" cy="65" rx="8" ry="5" fill="#1a1a2e"/>
      {/* Nose highlight */}
      <ellipse cx="48" cy="63" rx="2" ry="1.5" fill="white" opacity="0.3"/>
    </svg>
  )

  if (animate) {
    return (
      <motion.div
        whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
        transition={{ duration: 0.3 }}
      >
        {Icon}
      </motion.div>
    )
  }

  return Icon
}

// Simplified paw print for favicon
export function HuskyPaw({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      {/* Main pad */}
      <ellipse cx="50" cy="60" rx="25" ry="20" fill="currentColor"/>
      {/* Toe pads */}
      <circle cx="25" cy="35" r="12" fill="currentColor"/>
      <circle cx="45" cy="25" r="10" fill="currentColor"/>
      <circle cx="55" cy="25" r="10" fill="currentColor"/>
      <circle cx="75" cy="35" r="12" fill="currentColor"/>
    </svg>
  )
}
