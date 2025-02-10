import { memo } from 'react';

import { HyperLinkWrapper } from '~/components/index.ts';
import { ButtonAsButtonProps } from '~/types/index.ts';
import { cn } from '~/utils/cssUtils.ts';
import { buttonVariantClasses } from '../variations.ts';
import LoadingSpinner from './LoadingSpinner.tsx';

function StyledButton({
  children,
  className,
  disabled: disabledProp,
  type = 'button',
  loading,
  disableTextTransform,
  href,
  external,
  variant = 'container',
  size = 'md',
  ...props
}: Omit<ButtonAsButtonProps, 'as'>) {
  const variantClasses = buttonVariantClasses({ variant, size });
  const disabled = disabledProp ?? loading;

  return (
    <HyperLinkWrapper href={href} external={external} disabled={disabled}>
      <button
        {...props}
        type={type}
        disabled={disabled}
        className={cn(
          variantClasses,
          loading && 'flex gap-2 items-center',
          disableTextTransform && '!normal-case',
          disabled &&
            'cursor-not-allowed border-primary-600 bg-primary-700 text-text-primary/60 hover:border-primary-600 hover:bg-primary-700 active:scale-none',
          className
        )}
      >
        {loading ? <LoadingSpinner /> : null}
        {children}
      </button>
    </HyperLinkWrapper>
  );
}

export default memo(StyledButton);
