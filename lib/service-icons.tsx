import {
  BookOpen,
  HandHeart,
  Stars,
  Infinity as InfinityIcon,
  Wind,
  Eye,
  Compass,
  Droplets,
  type LucideIcon,
} from 'lucide-react'
import type { ServiceIconKey } from '@/lib/services'

export const SERVICE_ICONS: Record<ServiceIconKey, LucideIcon> = {
  'book-open': BookOpen,
  'hand-heart': HandHeart,
  stars: Stars,
  infinity: InfinityIcon,
  wind: Wind,
  eye: Eye,
  compass: Compass,
  droplets: Droplets,
}

export function ServiceIcon({
  icon,
  className,
  strokeWidth = 1.5,
}: {
  icon: ServiceIconKey
  className?: string
  strokeWidth?: number
}) {
  const Icon = SERVICE_ICONS[icon]
  return <Icon className={className} strokeWidth={strokeWidth} />
}
