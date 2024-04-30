import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-primary hover:bg-primary/80 border-transparent text-primary-foreground",
        secondary:
          "bg-secondary hover:bg-secondary/80 border-transparent text-secondary-foreground",
        destructive:
          "bg-destructive hover:bg-destructive/80 border-transparent text-destructive-foreground",
        outline: "text-foreground",
        react: "bg-[#61dbfb] border-transparent text-black",
        tailwindcss: "bg-[#37bcf7] border-transparent text-black",
        chakraUi: "bg-[#41c7bf] border-transparent text-black",
        firebase: "bg-[#FFA611] border-transparent text-black",
        html: "bg-[#e34c26] border-transparent text-black",
        css: "bg-[#264de4] border-transparent text-black",
        js: "bg-[#f0db4f] border-transparent text-black",
        django: "bg-[#092e20] border-transparent text-white",
        nextjs: "bg-primary border-transparent text-primary-foreground",
        zustand: "bg-[#0d141e] border-transparent text-white",
        mongodb: "bg-[#00684a] border-transparent text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
