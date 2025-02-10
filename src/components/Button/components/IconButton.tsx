import { memo } from 'react';

import { HyperLinkWrapper } from '~/components/index.ts';
import { ButtonAsIconProps } from '~/types/index.ts';
import { cn } from '~/utils/cssUtils.ts';
import { iconVariantClasses } from '../variations.ts';
import LoadingSpinner from './LoadingSpinner.tsx';

function IconButton({
  children,
  className,
  type = 'button',
  loading,
  href,
  external,
  variant = 'container',
  size = 'md',
  ...props
}: Omit<ButtonAsIconProps, 'as'>) {
  const variantClasses = iconVariantClasses({
    variant,
    size,
  });
  return (
    <HyperLinkWrapper href={href} external={external} disabled={props.disabled}>
      <button
        {...props}
        type={type}
        className={cn(
          variantClasses,
          props.disabled &&
            'cursor-not-allowed border-primary-600 bg-primary-700 text-text-primary/60 hover:border-primary-600 hover:bg-primary-700 active:scale-none',
          className
        )}
      >
        {loading ? <LoadingSpinner /> : children}
      </button>
    </HyperLinkWrapper>
  );
}

export default memo(IconButton);
