import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-accent text-accent-foreground hover:bg-accent-hover hover:shadow-[0_0_30px_-10px_var(--accent)]",
        ghost:
          "bg-transparent text-text border border-border hover:border-text-muted hover:bg-bg-elevated",
        outline:
          "border border-border bg-transparent text-text hover:bg-bg-elevated",
        subtle: "bg-bg-elevated text-text hover:bg-surface",
        link: "text-text underline-offset-4 hover:underline rounded-none",
        whatsapp:
          "bg-[#25D366] text-white hover:bg-[#1ebe5b] hover:shadow-[0_0_30px_-10px_#25D366]",
        danger: "bg-danger text-white hover:opacity-90",
      },
      size: {
        sm: "h-9 px-4",
        md: "h-11 px-6",
        lg: "h-12 px-7 text-[0.95rem]",
        xl: "h-14 px-8 text-base",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: { variant: "default", size: "md" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { buttonVariants };
