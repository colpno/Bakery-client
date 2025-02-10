import { forwardRef } from 'react';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

import { Button, Typography } from '~/components/index.ts';
import { cn } from '~/utils/cssUtils.ts';
import { Option } from '../ComboboxField.tsx';
import ComboboxPrevInputValues from './ComboboxPrevInputValues.tsx';

interface FilteredOption extends Option {
  hide?: boolean;
}

interface ComboboxInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name' | 'values'> {
  onRemove: (item?: Option) => void;
  name: string;
  error?: boolean;
  fullWidth?: boolean;
  options: FilteredOption[];
  values: Option[];
  isFocused?: boolean;
}

const ComboboxInput = forwardRef<HTMLInputElement, ComboboxInputProps>(
  ({ options, values, error, fullWidth, onRemove, isFocused, ...props }, ref) => {
    return (
      <div
        className={cn(
          'flex cursor-text items-center gap-2 rounded-md border-1 border-black py-2 pr-2 pl-3 focus:border-primary-600 dark:border-white',
          error && '!border-red-500',
          props.className
        )}
      >
        <div className={cn('flex flex-1 flex-wrap gap-1', !fullWidth && 'w-[207px]')}>
          <ComboboxPrevInputValues values={values} onRemove={onRemove} />
          <input
            {...props}
            className={'w-0 min-w-8 grow text-text-primary outline-none'}
            id={props.name}
            ref={ref}
          />
        </div>
        <Button
          as="icon"
          variant="content"
          size="xs"
          className={cn('text-text-primary', !isFocused && 'opacity-0')}
          onClick={() => onRemove()}
          children={<MdClose />}
        />
        <Typography>{isFocused ? <FaCaretUp /> : <FaCaretDown />}</Typography>
      </div>
    );
  }
);

export default ComboboxInput;
