import { cva } from "class-variance-authority";

export const button = cva(
  "flex items-center gap-2 cursor-pointer justify-center rounded-2xl font-bold transition-all hover:scale-105 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      intent: {
        primary: "bg-primary text-white/90",
        secondary:
          "bg-secondary text-background",
        outline: "border border-white/90 text-white/90",
        danger: "bg-red-600 text-white/90 hover:bg-red-700 focus:ring-red-500",
      },
      size: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-5 py-3 text-lg",
      },
      weight: {
        sm: "font-extralight",
        md: "font-normal",
        lg: "font-bold",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "md",
      weight: "lg",
    },
  }
);
