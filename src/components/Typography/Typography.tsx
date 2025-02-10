import { memo } from 'react';

import { TypoAsHyperLinkProps, TypographyProps } from '~/types/index.ts';
import { cn } from '~/utils/cssUtils.ts';
import CopyableTypography from './components/CopyableTypography';
import HyperLinkTypography from './components/HyperLinkTypography';
import { typographyVariantClasses } from './variants.ts';

function Typography({ variant = 'body1', component, ...props }: TypographyProps) {
  const isHyperLink = 'href' in props && !!props.href;
  const isCopyable = 'copyable' in props && props.copyable;

  if (isHyperLink) {
    return <HyperLinkTypography {...(props as TypoAsHyperLinkProps)} />;
  }

  if (isCopyable) {
    return <CopyableTypography {...props} />;
  }

  const classes = typographyVariantClasses({ variant });
  const Component =
    component || (variant === 'body1' ? 'p' : variant === 'body2' ? 'span' : variant);

  return (
    <Component {...(props as any)} className={cn('text-text-primary', classes, props.className)} />
  );
}

export default memo(Typography);
