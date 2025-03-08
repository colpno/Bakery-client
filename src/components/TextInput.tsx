import { memo } from 'react';

import { cn } from '~/utils/cssUtils.ts';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  fullWidth?: boolean;
}

function TextInput({ className, error, fullWidth, ...props }: Props) {
  return (
    <input
      {...props}
      id={props.name}
      className={cn(
        'rounded-md border-1 border-black px-3 py-2 text-primary-1 outline-none dark:border-white',
        error && '!border-red-500',
        fullWidth && 'w-full',
        className
      )}
    />
  );
}

export default memo(TextInput);
