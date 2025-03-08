import { cva } from 'class-variance-authority';

export const typographyVariantClasses = cva('text-primary-2', {
  variants: {
    variant: {
      h1: 'mt-8 mb-4 text-4xl font-bold',
      h2: 'mt-6 mb-4 text-3xl font-bold',
      h3: 'mt-4 mb-2 text-2xl font-bold',
      h4: 'mt-2 mb-1 text-xl font-bold',
      h5: 'mt-1 mb-0.5 text-lg font-bold',
      h6: 'text-base font-bold',
      body1: 'text-base',
      body2: 'text-sm',
    },
  },
  defaultVariants: {
    variant: 'body1',
  },
});
