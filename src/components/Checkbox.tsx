import { memo } from 'react';
import { FaCheck } from 'react-icons/fa';

import { CheckboxOption } from '~/types/checkboxTypes.ts';
import { cn } from '~/utils/cssUtils.ts';
import { Typography } from './index.ts';

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>,
    Pick<CheckboxOption, 'label'> {}

function Checkbox({ className, label, ...props }: Props) {
  return (
    <Typography component="label" className="flex items-center place-self-start">
      <input
        {...props}
        type="checkbox"
        className={cn(
          'size-0 [&:checked~div]:bg-primary-500 [&:checked~div]:border-primary-500',
          className,
          'invisible [&:checked~div>*]:visible'
        )}
      />
      <div
        className={cn(
          'inline-grid size-5 place-items-center rounded-sm border-2 border-gray-200 bg-gray-100 text-text-primary',
          className
        )}
      >
        <FaCheck size="70%" className="invisible" />
      </div>
      <Typography component="span" className="ml-2 text-text-primary">
        {label}
      </Typography>
    </Typography>
  );
}

export default memo(Checkbox);
