export type ServiceIconKey =
  | 'book-open'
  | 'hand-heart'
  | 'stars'
  | 'infinity'
  | 'wind'
  | 'eye'
  | 'compass'
  | 'droplets'

export type Service = {
  slug: string
  title: string
  summary: string
  tagline: string
  description: string[]
  whatToExpect: string[]
  benefits: string[]
  icon: ServiceIconKey
}

export const SERVICES: Service[] = [
  {
    slug: 'akashic-records',
    title: 'Akashic Records',
    summary: 'Access the soul-level insights that illuminate your path and patterns.',
    tagline: 'Wisdom held at the level of the soul',
    icon: 'book-open',
    description: [
      'The Akashic Records are often described as a vast field of consciousness holding the story of your soul—your experiences, patterns, gifts, and the threads that connect them across time.',
      'In session, we open this space with care and intention. What emerges is not fortune-telling, but compassionate clarity: insight into recurring themes, emotional roots, and the directions your spirit is quietly calling you toward.',
      'Many people arrive with a sense of being stuck between chapters. Akashic work can illuminate why certain patterns repeat and what is ready to be released or embraced next.',
    ],
    whatToExpect: [
      'A calm, guided opening into the Records tailored to your question or intention',
      'Intuitive insights shared in clear, grounded language',
      'Space to reflect, ask follow-up questions, and integrate what arises',
      'Practical takeaways you can carry into daily life after the session',
    ],
    benefits: [
      'Deeper self-understanding beyond surface-level concerns',
      'Clarity on life transitions, relationships, and purpose',
      'A felt sense of being seen and supported at a soul level',
      'Gentle direction without pressure or rigid predictions',
    ],
  },
  {
    slug: 'reiki',
    title: 'Reiki',
    summary: 'Gentle energy work to release tension and restore natural balance.',
    tagline: 'Soft hands, steady restoration',
    icon: 'hand-heart',
    description: [
      'Reiki is a Japanese energy healing practice that channels universal life force through gentle, non-invasive touch or focused intention—online sessions work beautifully through distance.',
      'Rather than forcing change, Reiki invites your system to relax and reorganize. Stress, emotional weight, and physical tension often begin to soften as the body remembers how to rest and receive.',
      'Sessions are quiet and unhurried. You remain fully clothed and comfortable, whether lying down or seated, while energy is directed to where support is most needed.',
    ],
    whatToExpect: [
      'A brief check-in to understand how you are arriving today',
      'Roughly 40–50 minutes of guided energy work with space for stillness',
      'Sensations that may include warmth, tingling, emotional release, or deep calm',
      'A closing moment to ground and reflect on what you noticed',
    ],
    benefits: [
      'Reduced stress and nervous system regulation',
      'Emotional release without needing to analyze everything',
      'Improved sleep, clarity, and sense of inner balance',
      'Support during grief, burnout, or periods of overwhelm',
    ],
  },
  {
    slug: 'star-magic-healing',
    title: 'Star Magic Healing',
    summary: 'High-frequency healing that works with light and cosmic energy.',
    tagline: 'Light-frequency work for deep renewal',
    icon: 'stars',
    description: [
      'Star Magic Healing works with high-frequency light and cosmic intelligence to clear dense energy, restore vitality, and reconnect you with your original brilliance.',
      'This modality is especially supportive when you feel dimmed by life—carrying old wounds, ancestral patterns, or a sense of being disconnected from your own power.',
      'The work is precise and compassionate, targeting energetic imprints that no longer belong while strengthening the light already alive within you.',
    ],
    whatToExpect: [
      'An intuitive scan of your energetic field and what is ready to shift',
      'Guided light-frequency clearing and activation',
      'Moments of deep stillness as your system integrates the work',
      'Closing guidance on how to nurture the shifts you feel',
    ],
    benefits: [
      'Lighter, clearer energetic presence after session',
      'Renewed sense of purpose and inner radiance',
      'Support for releasing long-held emotional or ancestral weight',
      'Greater alignment with your authentic self',
    ],
  },
  {
    slug: 'access-consciousness',
    title: 'Access Consciousness',
    summary: 'Powerful tools and questions that unlock ease and possibility.',
    tagline: 'Questions that open doors you forgot existed',
    icon: 'infinity',
    description: [
      'Access Consciousness is a set of pragmatic tools, body processes, and empowering questions designed to dissolve the limitations you have been living as if they were permanent.',
      'Instead of digging endlessly into problems, we invite your awareness to a different possibility. Often what changes is not the situation itself, but your capacity to meet it with ease.',
      'The famous question—"How does it get any better than this?"—is not optimism. It is an invitation for your whole being to look for openings you had not considered.',
    ],
    whatToExpect: [
      'Conversation centered on what you would like to be different',
      'Verbal clearings and body-based processes as appropriate',
      'Playful, curious exploration rather than heavy analysis',
      'Simple tools you can use on your own between sessions',
    ],
    benefits: [
      'Reduced mental looping and emotional charge around old stories',
      'More choice and flexibility in how you respond to life',
      'Lightness and humor returning to difficult areas',
      'Practical techniques for ongoing self-support',
    ],
  },
  {
    slug: 'breathwork',
    title: 'Breathwork',
    summary: 'Guided breathing to move stuck energy and quiet a busy mind.',
    tagline: 'Your breath as a bridge to balance',
    icon: 'wind',
    description: [
      'Conscious breathwork uses intentional breathing patterns to shift your state, move stored emotion, and restore a sense of spaciousness in body and mind.',
      'When we are stressed or disconnected, breathing becomes shallow and automatic. Guided breath invites you back into your body—a direct path to regulation and release.',
      'Each session is paced to your capacity. The goal is not intensity for its own sake, but what becomes possible when energy begins to flow freely again.',
    ],
    whatToExpect: [
      'Grounding and safety setup before any active breathing',
      'A guided breath pattern suited to your current state',
      'Space for physical sensations, emotion, or imagery to arise',
      'Integration time to return to a calm, centered baseline',
    ],
    benefits: [
      'Immediate calming of an overactive mind',
      'Release of tension held in the chest, throat, and belly',
      'Greater body awareness and emotional literacy',
      'A simple practice you can revisit on your own',
    ],
  },
  {
    slug: 'iridology',
    title: 'Iridology',
    summary: 'A reflective look at wellbeing through the story held in the eyes.',
    tagline: 'The iris as a map of your inner landscape',
    icon: 'eye',
    description: [
      'Iridology is the study of the iris—the colored part of the eye—as a reflective map of constitutional strengths, inherited tendencies, and areas that may benefit from extra care.',
      'This is not diagnosis. It is a holistic lens: a way of reading patterns that can deepen your understanding of how your body and temperament have been shaped over time.',
      'In session, we explore what your eyes reveal with curiosity and respect, connecting insights to practical steps for nourishment, rest, and balance.',
    ],
    whatToExpect: [
      'A clear photo or live view of your irises for observation',
      'Explanation of notable patterns in accessible language',
      'Discussion linking insights to your current wellbeing goals',
      'Gentle lifestyle and wellness suggestions—not medical prescriptions',
    ],
    benefits: [
      'Greater awareness of your constitutional tendencies',
      'Early insight into areas that may need more support',
      'A holistic complement to your overall wellness journey',
      'Empowerment through understanding your unique makeup',
    ],
  },
  {
    slug: 'lifestyle-coaching',
    title: 'Lifestyle Coaching',
    summary: 'Grounded guidance to align daily choices with your intentions.',
    tagline: 'Small shifts, lasting alignment',
    icon: 'compass',
    description: [
      'Lifestyle coaching here is not about rigid plans or performance pressure. It is honest, compassionate guidance to help your daily choices reflect who you are becoming.',
      'We look at sleep, nourishment, movement, boundaries, and the rhythms that either drain or sustain you. Together we find adjustments that feel realistic—not another list of things you are failing at.',
      'The aim is alignment: a life that supports your energy rather than constantly competing with it.',
    ],
    whatToExpect: [
      'An open conversation about what is working and what is not',
      'Identification of one or two high-impact areas to focus on',
      'Collaborative goal-setting rooted in your actual life',
      'Follow-through support and gentle accountability',
    ],
    benefits: [
      'Clearer priorities instead of scattered self-improvement efforts',
      'Sustainable habits that honor your energy and circumstances',
      'Stronger boundaries and more intentional use of time',
      'A sense of moving forward with purpose, not punishment',
    ],
  },
  {
    slug: 'lymphatic-support',
    title: 'Lymphatic Support',
    summary: 'Supportive practices that encourage flow, release, and renewal.',
    tagline: 'Encouraging the body\'s natural flow',
    icon: 'droplets',
    description: [
      'The lymphatic system is your body\'s quiet cleanup crew—moving fluid, clearing waste, and supporting immunity. When it slows, you may feel puffy, heavy, fatigued, or stagnant.',
      'Lymphatic support sessions combine gentle techniques, breath, and mindful movement to encourage flow without force. The work is subtle but often deeply felt.',
      'This modality pairs beautifully with emotional release work, as the body and feelings are never as separate as we pretend.',
    ],
    whatToExpect: [
      'Assessment of how stagnation or heaviness shows up for you',
      'Gentle guided practices—self-touch, breath, or visualized flow',
      'Education on simple daily habits that support lymphatic health',
      'Closing integration with attention to hydration and rest',
    ],
    benefits: [
      'Reduced feelings of heaviness and fluid retention',
      'Improved energy and sense of bodily lightness',
      'Support for detoxification and immune resilience',
      'Practices you can continue at home between sessions',
    ],
  },
]

/** Returns every service for listings and static generation. */
export function getAllServices(): Service[] {
  return SERVICES
}

/** Looks up a service by URL slug, or undefined if not found. */
export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((service) => service.slug === slug)
}
