/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				background: "hsl(var(--color-background))",
				foreground: 'hsl(var(--color-foreground))',
				border: 'hsl(var(--color-border))',
				input: 'hsl(var(--color-input))',
				ring: 'hsl(var(--color-ring))',
				
				primary: {
					DEFAULT: 'hsl(var(--color-primary))',
					foreground: "hsl(var(--color-primary-foreground))",
				},
				secondary: {
					DEFAULT: 'hsl(var(--color-secondary))', 
					foreground: "hsl(var(--color-secondary-foreground))",
				},
				accent: {
					DEFAULT: 'hsl(var(--color-accent))', 
					foreground: "hsl(var(--color-accent-foreground))"
				},
				destructive: {
					DEFAULT: 'hsl(var(--color-destructive))', 
					foreground: "hsl(var(--color-destructive-foreground))"
				},
				card: {
					DEFAULT: 'hsl(var(--color-card))', 
					foreground: "hsl(var(--color-card-foreground))"
				},
				popover: {
					DEFAULT: 'hsl(var(--color-popover))', 
					foreground: "hsl(var(--color-popover-foreground))"
				},
				muted: { 
					DEFAULT: 'hsl(var(--color-muted))', 
					foreground: 'hsl(var(--color-muted-foreground))'
				},
			},
			borderRadius: {
				radius: 'var(--radius)'
			}
		},
	},
	plugins: []
};
