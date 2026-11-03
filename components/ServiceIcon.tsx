import {
  CalendarClock,
  ClipboardList,
  Clock,
  Compass,
  HeartHandshake,
  Lightbulb,
  LineChart,
  MessageSquare,
  Percent,
  Scale,
  Sparkles,
  Target,
  TrendingUp,
  User,
  Users,
  Wallet,
  type LucideProps,
} from "lucide-react";

const icons = {
  compass: Compass,
  users: Users,
  target: Target,
  user: User,
  "message-square": MessageSquare,
  lightbulb: Lightbulb,
  "heart-handshake": HeartHandshake,
  sparkles: Sparkles,
  "clipboard-list": ClipboardList,
  "line-chart": LineChart,
  "calendar-clock": CalendarClock,
  wallet: Wallet,
  "trending-up": TrendingUp,
  scale: Scale,
  percent: Percent,
  clock: Clock,
} as const;

export type IconName = keyof typeof icons;

export function ServiceIcon({ icon, ...props }: { icon: IconName } & LucideProps) {
  const Icon = icons[icon];
  return <Icon {...props} />;
}
