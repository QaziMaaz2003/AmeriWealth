import { Compass, Handshake, Shield, TrendingUp, type LucideProps } from "lucide-react";

const icons = {
  compass: Compass,
  shield: Shield,
  "trending-up": TrendingUp,
  handshake: Handshake,
} as const;

export function ServiceIcon({
  icon,
  ...props
}: { icon: keyof typeof icons } & LucideProps) {
  const Icon = icons[icon];
  return <Icon {...props} />;
}
