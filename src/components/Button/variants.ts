import { cva } from 'class-variance-authority';

import { cn } from '~/utils/cssUtils.ts';

const sharedClasses = 'transition-all duration-200 ease-in-out active:scale-95';
const variantContainerClasses = `border-1 border-accent-1 bg-accent-1 text-white shadow-[1px_1px_2px_1px] shadow-accent-1/50 hover:border-accent-1 hover:bg-accent-1 hover:text-white/70 dark:shadow-gray-700/50 dark:hover:bg-accent-1/80`;
const variantOutlinedClasses = `border-1 border-accent-1 text-accent-1 hover:border-accent-1/80 hover:text-accent-1/80`;
const variantContentClasses = `text-accent-1 hover:bg-gray-200 dark:text-accent-1 dark:hover:bg-gray-600`;

export const iconVariantClasses = cva(
  cn(sharedClasses, 'rounded-full cursor-pointer leading-0 grid place-content-center'),
  {
    variants: {
      variant: {
        container: variantContainerClasses,
        outlined: variantOutlinedClasses,
        content: variantContentClasses,
      },
      size: {
        xs: 'size-6',
        sm: 'size-8',
        md: 'size-10',
        lg: 'size-12',
        xl: 'size-14',
      },
    },
    defaultVariants: {
      variant: 'container',
      size: 'md',
    },
  }
);

export const buttonVariantClasses = cva(
  cn(sharedClasses, 'font-semibold uppercase cursor-pointer'),
  {
    variants: {
      variant: {
        container: variantContainerClasses,
        outlined: variantOutlinedClasses,
        content: variantContentClasses,
      },
      size: {
        xs: 'rounded-sm px-3 py-1',
        sm: 'rounded-sm px-4 py-1.5',
        md: 'rounded-md px-6 py-2',
        lg: 'rounded-md px-9 py-2.5',
        xl: 'rounded-md px-11 py-3',
      },
    },
    defaultVariants: {
      variant: 'container',
      size: 'md',
    },
  }
);
