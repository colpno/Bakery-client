import React, { memo } from 'react';

import { noImageTextSVG } from '~/images/index.ts';
import { cn } from '~/utils/cssUtils.ts';
import { Image } from './index.ts';

type Props = React.HTMLAttributes<HTMLDivElement>;

function PlaceholderImage({ className, ...props }: Props) {
  return (
    <div {...props} className={cn('bg-[#efefef] flex items-center justify-center', className)}>
      <Image src={noImageTextSVG} alt="Placeholder image's text" className="w-[60%]" />
    </div>
  );
}

export default memo(PlaceholderImage);
