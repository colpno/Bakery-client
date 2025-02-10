import { cva } from 'class-variance-authority';

import { cn } from '~/utils/cssUtils.ts';

const sharedClasses = 'transition-all duration-200 ease-in-out active:scale-95';
const variantContainerClasses = `border-1 border-primary-300 bg-primary-500 text-white shadow-[1px_1px_2px_1px] shadow-primary-700/50 hover:border-primary-500 hover:bg-primary-600 hover:text-white/70 dark:border-primary-400 dark:shadow-[4px_4px_8px_3px] dark:shadow-black/8`;
const variantOutlinedClasses = `border-1 border-primary-500 text-primary-500 hover:border-primary-600 hover:text-primary-600 dark:border-primary-300 dark:text-primary-200 dark:hover:border-primary-500 dark:hover:text-primary-400`;
const variantContentClasses = `text-primary-500 hover:bg-gray-200 dark:text-primary-200 dark:hover:bg-white/16`;

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
