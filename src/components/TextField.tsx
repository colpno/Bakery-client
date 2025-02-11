import { FastField, useField } from 'formik';
import { memo } from 'react';

import { FieldErrorMessage, FieldLabel, TextInput } from './index.ts';

interface Props
  extends Omit<React.ComponentProps<typeof TextInput>, keyof ReturnType<typeof useField>[0]> {
  name: string;
  required?: boolean;
  label?: string;
}

function TextField({ required, fullWidth, label, ...props }: Props) {
  const [field, meta] = useField(props);
  const isError = !!meta.error && meta.touched;

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.parentNode?.querySelector('label')?.classList.add('text-primary-600');
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.parentNode?.querySelector('label')?.classList.remove('text-primary-600');
  };

  return (
    <div>
      <FieldLabel
        children={label}
        component="label"
        htmlFor={props.name}
        error={isError}
        required={required}
      />
      <FastField
        {...props}
        {...field}
        as={TextInput}
        onFocus={handleFocus}
        onBlur={handleBlur}
        error={isError}
        fullWidth={fullWidth}
      />
      <FieldErrorMessage fieldName={props.name} />
    </div>
  );
}

export default memo(TextField);
