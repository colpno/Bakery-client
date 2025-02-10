import { memo } from 'react';

import { ButtonAsUnstyledProps } from '~/types/buttonTypes.ts';
import { cn } from '~/utils/cssUtils.ts';

function UnstyledButton({
  className,
  type = 'button',
  ...props
}: Omit<ButtonAsUnstyledProps, 'as'>) {
  return <button {...props} type={type} className={cn('cursor-pointer', className)} />;
}

export default memo(UnstyledButton);
