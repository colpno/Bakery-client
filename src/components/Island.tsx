import { memo } from 'react';

import { cn } from '~/utils/cssUtils.ts';

type Props<Tag extends keyof JSX.IntrinsicElements = 'div'> = {
  /** @default div */
  component?: Tag;
} & JSX.IntrinsicElements[Tag];

function Island({ component: Component = 'div', className, ...props }: Props) {
  return (
    <Component
      {...props}
      className={cn(
        'rounded-md border-1 border-black/8 bg-bg-primary shadow-lg dark:border-white/5 dark:shadow-black/9',
        className
      )}
    />
  );
}

export default memo(Island);
