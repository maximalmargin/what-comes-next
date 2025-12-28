import { colors } from '../styles/tokens'

export const pages = [
  // Page 0: Title
  {
    type: 'title',
    background: colors.cloud,
    title: 'What Comes Next?',
    subtitle: 'Tap to find out!',
  },

  // Page 1: Same thing repeats (simplest pattern)
  {
    type: 'pattern',
    background: colors.cloud,
    prompt: 'What comes next?',
    pattern: [
      { shape: 'circle', color: colors.ocean },
      { shape: 'circle', color: colors.ocean },
    ],
    answer: { shape: 'circle', color: colors.ocean },
  },

  // Page 2: Things take turns (alternation)
  {
    type: 'pattern',
    background: '#FFF0F5',
    prompt: 'Taking turns!',
    pattern: [
      { shape: 'heart', color: colors.coral },
      { shape: 'star', color: colors.sun },
      { shape: 'heart', color: colors.coral },
    ],
    answer: { shape: 'star', color: colors.sun },
  },

  // Page 3: Things grow (progression)
  {
    type: 'size',
    background: '#F0FFF0',
    prompt: 'Growing!',
    pattern: [
      { shape: 'flower', color: colors.pink, size: 80 },
      { shape: 'flower', color: colors.pink, size: 115 },
    ],
    answer: { shape: 'flower', color: colors.pink, size: 150 },
  },

  // Page 4: Day and night cycle
  {
    type: 'pattern',
    background: colors.night,
    textColor: colors.cloud,
    prompt: 'Day... night... day...',
    pattern: [
      { shape: 'sun', color: colors.sun },
      { shape: 'moon', color: colors.cloud },
      { shape: 'sun', color: colors.sun },
    ],
    answer: { shape: 'moon', color: colors.cloud },
  },

  // Page 5: Story completion - cat on mat
  {
    type: 'scene',
    background: colors.sun,
    prompt: 'The cat sat on the...',
    answer: { shape: 'catOnMat', color: colors.night, size: 280 },
  },

  // Page 6: Celebration - you learned prediction!
  {
    type: 'finale',
    background: colors.cloud,
    textColor: colors.night,
    title: 'You did it!',
    subtitle: 'You guessed the patterns,',
    message: 'just like computers do!',
    shapes: [
      { shape: 'circle', color: colors.ocean },
      { shape: 'heart', color: colors.coral },
      { shape: 'flower', color: colors.pink },
      { shape: 'sun', color: colors.sun },
      { shape: 'moon', color: colors.night },
    ],
  },
]
