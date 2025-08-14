import { cva } from "class-variance-authority";

export const badge = cva(
  "text-xs font-medium me-2 px-2.5 py-1 rounded-2xl capitalize",
  {
    variants: {
      variant: {
        astro: "bg-orange-500/20 border border-orange-500 text-orange-500",
        figma: "bg-pink-500/20 border border-pink-500 text-pink-500",
        typescript: "bg-blue-500/20 border border-blue-500 text-blue-500",
        react: "bg-cyan-500/20 border border-cyan-500 text-cyan-500",
        tailwind: "bg-emerald-500/20 border border-emerald-500 text-emerald-500",
        nextjs: "bg-black/20 border border-white/80 text-white/80",
        storybook: "bg-purple-500/20 border border-purple-500 text-purple-500",
        scrum: "bg-yellow-500/20 border border-yellow-500 text-yellow-500",
        nodejs: "bg-green-500/20 border border-green-500 text-green-500",
        phpmyadmin: "bg-violet-500/20 border border-violet-500 text-violet-500",
        materialui: "bg-indigo-500/20 border border-indigo-500 text-indigo-500",
        default: "bg-gray-200 border border-gray-300 text-gray-700",
      },
   
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
