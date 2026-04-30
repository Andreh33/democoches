import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium tracking-tight",
  {
    variants: {
      variant: {
        default: "border border-border bg-bg-elevated text-text",
        accent: "bg-accent/10 text-accent border border-accent/20",
        muted: "bg-surface text-text-muted",
        success: "bg-success/15 text-success border border-success/25",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
