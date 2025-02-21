import { cn } from "@/lib/utils/tailwind";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva("inline-flex items-center justify-center", {
	variants: {
		variant: {
			default:
				"bg-md-primary text-md-on-primary shadow hover:bg-md-primary/90",
			destructive:
				"bg-mc-destructive text-mc-destructive-foreground shadow-sm hover:bg-mc-destructive/90",
			outline:
				"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary:
				"bg-mc-secondary text-mc-secondary-foreground shadow-sm hover:bg-mc-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-mc-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-10",
			sm: "px-scale-s text-xs",
			lg: "px-scale-l py-scale-m",
			icon: "h-scale-m w-scale-m"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
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

export { Button, buttonVariants };
