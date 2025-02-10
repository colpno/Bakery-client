import { FastField, useField } from 'formik';
import { memo } from 'react';

import { cn } from '~/utils/cssUtils.ts';
import { FieldErrorMessage, FieldLabel, TextInput } from './index.ts';

interface Props extends Omit<React.ComponentProps<typeof TextInput>, 'name'> {
  name: string;
  required?: boolean;
  label?: string;
}

function TextField({ required, fullWidth, label, ...props }: Props) {
  const [field, meta] = useField(props.name);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.parentNode?.querySelector('label')?.classList.add('text-primary-600');
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.parentNode?.querySelector('label')?.classList.remove('text-primary-600');
  };

  return (
    <div>
      <div className={cn('inline-block', fullWidth && 'block')}>
        <FieldLabel children={label} component="label" htmlFor={props.name} error={!!meta.error} />
        <FastField {...props} {...field} as={TextInput} onFocus={handleFocus} onBlur={handleBlur} />
      </div>
      <FieldErrorMessage fieldName={props.name} />
    </div>
  );
}

export default memo(TextField);
