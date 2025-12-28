export const colors = {
  sun: '#FFD93D',
  sky: '#6BCB77',
  ocean: '#4D96FF',
  coral: '#FF6B6B',
  cloud: '#F8F9FA',
  night: '#2D3436',
  pink: '#FF9FF3',
  orange: '#FFA94D',
}

export const shapes = {
  circle: (color, size = 80) => (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="45" fill={color} />
    </svg>
  ),

  square: (color, size = 80) => (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <rect x="10" y="10" width="80" height="80" rx="8" fill={color} />
    </svg>
  ),

  triangle: (color, size = 80) => (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <polygon points="50,10 90,90 10,90" fill={color} />
    </svg>
  ),

  star: (color, size = 80) => (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <polygon
        points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40"
        fill={color}
      />
    </svg>
  ),

  heart: (color, size = 80) => (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <path
        d="M50,88 C20,60 5,40 15,25 C25,10 40,15 50,30 C60,15 75,10 85,25 C95,40 80,60 50,88Z"
        fill={color}
      />
    </svg>
  ),

  sun: (color, size = 80) => (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="25" fill={color} />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <line
          key={i}
          x1="50"
          y1="50"
          x2={50 + 40 * Math.cos(angle * Math.PI / 180)}
          y2={50 + 40 * Math.sin(angle * Math.PI / 180)}
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
        />
      ))}
    </svg>
  ),

  moon: (color, size = 80) => (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <path
        d="M70,20 A35,35 0 1,0 70,80 A25,25 0 1,1 70,20"
        fill={color}
      />
    </svg>
  ),

  // Fruits
  apple: (color, size = 80) => (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <ellipse cx="50" cy="58" rx="35" ry="38" fill={color} />
      <ellipse cx="50" cy="60" rx="8" ry="10" fill="#FFE5E5" opacity="0.5" />
      <path d="M50,20 Q55,10 60,15" stroke="#6BCB77" strokeWidth="4" fill="none" strokeLinecap="round" />
      <ellipse cx="58" cy="18" rx="8" ry="5" fill="#6BCB77" />
    </svg>
  ),

  banana: (color, size = 80) => (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <path
        d="M25,70 Q20,40 40,25 Q60,15 80,30 Q75,35 55,35 Q35,38 30,65 Z"
        fill={color}
      />
      <path d="M28,68 Q33,60 32,50" stroke="#BFA34A" strokeWidth="2" fill="none" opacity="0.5" />
    </svg>
  ),

  orange: (color, size = 80) => (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <circle cx="50" cy="55" r="38" fill={color} />
      <ellipse cx="50" cy="18" rx="6" ry="4" fill="#6BCB77" />
      <circle cx="35" cy="50" r="3" fill="#E67E22" opacity="0.3" />
      <circle cx="60" cy="45" r="2" fill="#E67E22" opacity="0.3" />
      <circle cx="55" cy="65" r="2.5" fill="#E67E22" opacity="0.3" />
    </svg>
  ),

  // Animals
  duck: (color, size = 80) => (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <ellipse cx="55" cy="60" rx="35" ry="28" fill={color} />
      <circle cx="30" cy="40" r="20" fill={color} />
      <ellipse cx="15" cy="42" rx="12" ry="6" fill="#FFA94D" />
      <circle cx="25" cy="35" r="4" fill="#2D3436" />
      <circle cx="26" cy="34" r="1.5" fill="#FFF" />
      <path d="M75,70 Q85,75 80,80 L70,75" fill="#FFA94D" />
    </svg>
  ),

  fish: (color, size = 80) => (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <ellipse cx="45" cy="50" rx="35" ry="25" fill={color} />
      <polygon points="85,50 100,35 100,65" fill={color} />
      <circle cx="25" cy="45" r="5" fill="#2D3436" />
      <circle cx="23" cy="44" r="2" fill="#FFF" />
      <path d="M45,35 Q55,40 55,50 Q55,60 45,65" stroke={color} strokeWidth="3" fill="none" opacity="0.5" />
    </svg>
  ),

  bird: (color, size = 80) => (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <ellipse cx="50" cy="55" rx="30" ry="25" fill={color} />
      <circle cx="35" cy="40" r="18" fill={color} />
      <polygon points="15,40 5,38 15,45" fill="#FFA94D" />
      <circle cx="30" cy="37" r="4" fill="#2D3436" />
      <circle cx="29" cy="36" r="1.5" fill="#FFF" />
      <path d="M65,45 Q80,30 90,40" stroke={color} strokeWidth="8" fill="none" strokeLinecap="round" />
      <ellipse cx="55" cy="75" rx="4" ry="8" fill="#FFA94D" />
      <ellipse cx="65" cy="75" rx="4" ry="8" fill="#FFA94D" />
    </svg>
  ),

  // Cat on mat scene (combined illustration)
  catOnMat: (color, size = 80) => (
    <svg width={size} height={size} viewBox="0 0 100 100">
      {/* Mat */}
      <rect x="5" y="65" width="90" height="25" rx="4" fill="#FF6B6B" />
      <line x1="15" y1="72" x2="85" y2="72" stroke="#2D3436" strokeWidth="1.5" opacity="0.2" />
      <line x1="15" y1="78" x2="85" y2="78" stroke="#2D3436" strokeWidth="1.5" opacity="0.2" />
      <line x1="15" y1="84" x2="85" y2="84" stroke="#2D3436" strokeWidth="1.5" opacity="0.2" />
      {/* Cat body sitting on mat */}
      <ellipse cx="50" cy="55" rx="28" ry="22" fill={color} />
      {/* Cat head */}
      <circle cx="50" cy="30" r="20" fill={color} />
      {/* Ears */}
      <polygon points="35,18 28,2 42,12" fill={color} />
      <polygon points="65,18 72,2 58,12" fill={color} />
      <polygon points="36,16 32,8 40,13" fill="#FFB6C1" />
      <polygon points="64,16 68,8 60,13" fill="#FFB6C1" />
      {/* Face */}
      <ellipse cx="42" cy="28" rx="5" ry="6" fill="#FFF" />
      <ellipse cx="58" cy="28" rx="5" ry="6" fill="#FFF" />
      <circle cx="43" cy="29" r="3" fill="#2D3436" />
      <circle cx="57" cy="29" r="3" fill="#2D3436" />
      <circle cx="44" cy="28" r="1" fill="#FFF" />
      <circle cx="58" cy="28" r="1" fill="#FFF" />
      <ellipse cx="50" cy="38" rx="3" ry="2" fill="#FFB6C1" />
      {/* Whiskers */}
      <line x1="30" y1="35" x2="42" y2="36" stroke="#2D3436" strokeWidth="1" opacity="0.4" />
      <line x1="30" y1="38" x2="42" y2="38" stroke="#2D3436" strokeWidth="1" opacity="0.4" />
      <line x1="58" y1="36" x2="70" y2="35" stroke="#2D3436" strokeWidth="1" opacity="0.4" />
      <line x1="58" y1="38" x2="70" y2="38" stroke="#2D3436" strokeWidth="1" opacity="0.4" />
      {/* Tail */}
      <path d="M78,55 Q95,45 90,30" stroke={color} strokeWidth="10" fill="none" strokeLinecap="round" />
    </svg>
  ),

  // Flower
  flower: (color, size = 80) => (
    <svg width={size} height={size} viewBox="0 0 100 100">
      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
        <ellipse
          key={i}
          cx={50 + 18 * Math.cos((angle - 90) * Math.PI / 180)}
          cy={38 + 18 * Math.sin((angle - 90) * Math.PI / 180)}
          rx="12"
          ry="16"
          fill={color}
          transform={`rotate(${angle}, ${50 + 18 * Math.cos((angle - 90) * Math.PI / 180)}, ${38 + 18 * Math.sin((angle - 90) * Math.PI / 180)})`}
        />
      ))}
      <circle cx="50" cy="38" r="10" fill="#FFD93D" />
      <line x1="50" y1="52" x2="50" y2="92" stroke="#6BCB77" strokeWidth="5" strokeLinecap="round" />
      <ellipse cx="40" cy="75" rx="8" ry="5" fill="#6BCB77" transform="rotate(-30, 40, 75)" />
      <ellipse cx="60" cy="68" rx="8" ry="5" fill="#6BCB77" transform="rotate(30, 60, 68)" />
    </svg>
  ),

  // Ball
  ball: (color, size = 80) => (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="42" fill={color} />
      <path d="M20,35 Q50,25 80,35" stroke="#FFF" strokeWidth="4" fill="none" opacity="0.5" />
      <path d="M20,65 Q50,75 80,65" stroke="#FFF" strokeWidth="4" fill="none" opacity="0.5" />
      <line x1="50" y1="8" x2="50" y2="92" stroke="#FFF" strokeWidth="4" opacity="0.5" />
      <ellipse cx="35" cy="35" rx="8" ry="6" fill="#FFF" opacity="0.3" />
    </svg>
  ),

  // Tree
  tree: (color, size = 80) => (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <rect x="42" y="60" width="16" height="35" rx="2" fill="#A0522D" />
      <circle cx="50" cy="35" r="32" fill={color} />
      <circle cx="35" cy="45" r="18" fill={color} />
      <circle cx="65" cy="45" r="18" fill={color} />
      <circle cx="50" cy="20" r="15" fill={color} />
    </svg>
  ),

  question: (color, size = 80) => (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="40" fill={color} opacity="0.3" strokeDasharray="8 4" stroke={color} strokeWidth="3" />
      <text x="50" y="65" textAnchor="middle" fontSize="40" fontWeight="bold" fill={color}>?</text>
    </svg>
  ),
}
