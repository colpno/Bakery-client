import { memo } from 'react';
import { toast } from 'react-toastify';

import { Typography } from '~/components/index.ts';
import { TypoAsCopyableTextProps } from '~/types/index.ts';
import { cn } from '~/utils/cssUtils.ts';

function CopyableTypography({ copyable, className, ...props }: TypoAsCopyableTextProps) {
  const copyText = () => {
    navigator.clipboard
      .writeText(props.children)
      .then(() => toast.success('Copied to clipboard'))
      .catch(() => toast.error('Failed to copy to clipboard'));
  };

  return (
    <Typography
      onClick={copyText}
      title="Click to copy"
      {...props}
      className={cn(
        'cursor-pointer font-semibold transition-colors duration-200 ease-out hover:text-gray-600',
        className
      )}
    />
  );
}

export default memo(CopyableTypography);
