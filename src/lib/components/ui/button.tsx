import { cn } from "@/lib/utils/tailwind";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
	"inline-flex items-center justify-center transition-all duration-200 cursor-pointer focus-visible:outline-none disabled:pointer-events-none disabled:opacity-30 focus:ring-2",
	{
		variants: {
			variant: {
				filled: "",
				tonal: "",
				outlined: "border border-md-outline",
				text: "",
				elevated: "shadow"
			},
			intent: {
				primary: "",
				secondary: "",
				tertiary: "",
				error: ""
			},
			size: {
				sm: "h-8 px-4 rounded-sm text-md-label-sm",
				md: "h-10 px-6 rounded-md text-md-label-md",
				lg: "h-12 px-8 rounded-lg text-md-label-lg"
			}
		},
		compoundVariants: [
			// Filled Buttons
			{
				variant: "filled",
				intent: "primary",
				class: "bg-md-primary text-md-on-primary hover:bg-md-primary/90"
			},
			{
				variant: "filled",
				intent: "secondary",
				class: "bg-md-secondary text-md-on-secondary hover:bg-opacity-90"
			},
			{
				variant: "filled",
				intent: "tertiary",
				class: "bg-md-tertiary text-md-on-tertiary hover:bg-opacity-90"
			},
			{
				variant: "filled",
				intent: "error",
				class: "bg-md-error text-md-on-error hover:bg-opacity-90"
			},

			// Tonal Buttons
			{
				variant: "tonal",
				intent: "primary",
				class: "bg-md-primary-container text-md-on-primary-container hover:bg-opacity-90"
			},
			{
				variant: "tonal",
				intent: "secondary",
				class: "bg-md-secondary-container text-md-on-secondary-container hover:bg-opacity-90"
			},
			{
				variant: "tonal",
				intent: "tertiary",
				class: "bg-md-tertiary-container text-md-on-tertiary-container hover:bg-opacity-90"
			},
			{
				variant: "tonal",
				intent: "error",
				class: "bg-md-error-container text-md-on-error-container hover:bg-opacity-90"
			},

			// Outlined Buttons
			{
				variant: "outlined",
				intent: "primary",
				class: "text-md-primary hover:bg-md-primary hover:bg-opacity-8"
			},
			{
				variant: "outlined",
				intent: "secondary",
				class: "text-md-secondary hover:bg-md-secondary hover:bg-opacity-8"
			},
			{
				variant: "outlined",
				intent: "tertiary",
				class: "text-md-tertiary hover:bg-md-tertiary hover:bg-opacity-8"
			},
			{
				variant: "outlined",
				intent: "error",
				class: "text-md-error hover:bg-md-error hover:bg-opacity-8"
			},

			// Text Buttons
			{
				variant: "text",
				intent: "primary",
				class: "text-md-primary hover:bg-md-primary hover:bg-opacity-8"
			},
			{
				variant: "text",
				intent: "secondary",
				class: "text-md-secondary hover:bg-md-secondary hover:bg-opacity-8"
			},
			{
				variant: "text",
				intent: "tertiary",
				class: "text-md-tertiary hover:bg-md-tertiary hover:bg-opacity-8"
			},
			{
				variant: "text",
				intent: "error",
				class: "text-md-error hover:bg-md-error hover:bg-opacity-8"
			},

			// Elevated Buttons
			{
				variant: "elevated",
				intent: "primary",
				class: "bg-md-surface-container-low text-md-primary shadow-md-shadow hover:shadow-md-shadow/30"
			},
			{
				variant: "elevated",
				intent: "secondary",
				class: "bg-md-surface-container-low text-md-secondary shadow-md-shadow hover:shadow-md-shadow/30"
			},
			{
				variant: "elevated",
				intent: "tertiary",
				class: "bg-md-surface-container-low text-md-tertiary shadow-md-shadow hover:shadow-md-shadow/30"
			},
			{
				variant: "elevated",
				intent: "error",
				class: "bg-md-surface-container-low text-md-error shadow-md-shadow hover:shadow-md-shadow/30"
			}
		],
		defaultVariants: {
			variant: "filled",
			intent: "primary",
			size: "md"
		}
	}
);

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
