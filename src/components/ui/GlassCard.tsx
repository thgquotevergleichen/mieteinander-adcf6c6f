import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const GlassCard = ({ children, className, ...props }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "backdrop-blur-md bg-white/30 rounded-2xl p-6 shadow-lg border border-white/20",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};