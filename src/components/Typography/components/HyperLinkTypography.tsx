import { memo } from 'react';

import { HyperLinkWrapper, Typography } from '~/components/index.ts';
import { TypoAsHyperLinkProps, TypographyProps } from '~/types/index.ts';

function HyperLinkTypography({ href, external, ...props }: TypoAsHyperLinkProps) {
  return (
    <HyperLinkWrapper href={href} external={external}>
      <Typography {...(props as TypographyProps)} />
    </HyperLinkWrapper>
  );
}

export default memo(HyperLinkTypography);
