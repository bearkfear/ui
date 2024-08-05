import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";
import React from "react";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gray-3 text-primary-foreground shadow hover:bg-gray-4 text-gray-12 dark:bg-graydark-3 dark:hover:bg-graydark-4 dark:text-graydark-12",
        danger:
          "bg-red-9 text-white hover:bg-red-10 dark:hover:bg-reddark-10 dark:bg-reddark-9",
        danger__light:
          "bg-red-3 text-red-11 dark:text-reddark-11 hover:bg-red-4 dark:hover:bg-reddark-4 border border-red-6 dark:border-reddark-6 dark:bg-reddark-3",
        warning:
          "bg-yellow-9 text-black hover:bg-yellow-10 dark:hover:bg-yellowdark-10 dark:bg-yellowdark-9",
        warning__light:
          "bg-yellow-3 text-yellow-11 dark:text-yellowdark-11 hover:bg-yellow-4 dark:hover:bg-yellowdark-4 border border-yellow-6 dark:border-yellowdark-6 dark:bg-yellowdark-3",
        success:
          "bg-green-9 text-white hover:bg-green-10 dark:hover:bg-greendark-10 dark:bg-greendark-9",
        success__light:
          "bg-green-3 text-green-11 dark:text-greendark-11 hover:bg-green-4 dark:hover:bg-greendark-4 border border-green-6 dark:border-greendark-6 dark:bg-greendark-3",
        info: "bg-blue-9 text-white hover:bg-blue-10 dark:hover:bg-bluedark-10 dark:bg-bluedark-9",
        info__light:
          "bg-blue-3 text-blue-11 dark:text-bluedark-11 hover:bg-blue-4 dark:hover:bg-bluedark-4 border border-blue-6 dark:border-bluedark-6 dark:bg-bluedark-3",

        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-8 px-4 py-2",
        sm: "h-6 rounded-md px-3 text-xs",
        lg: "h-9 rounded-md px-8",
        icon: "h-8 w-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
 