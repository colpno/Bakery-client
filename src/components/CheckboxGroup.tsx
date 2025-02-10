import { FastField, useField } from 'formik';
import { memo } from 'react';
import { v4 } from 'uuid';

import { CheckboxGroupProps as Props } from '~/types/checkboxTypes.ts';
import { cn } from '~/utils/cssUtils.ts';
import { Checkbox, FieldErrorMessage, FieldLabel } from './index.ts';

function CheckboxGroup({ options, label, required, name, slotProps, ...props }: Props) {
  const uuid = v4();
  const [{ checked: _c, ...field }, meta] = useField({
    name: name,
    type: 'checkbox',
  });

  if (!Array.isArray(meta.initialValue)) {
    throw new Error('Initial value must be an array');
  }

  return (
    <div {...props}>
      <FieldLabel {...slotProps?.label} component="label" children={label} error={!!meta.error} />
      <div {...slotProps?.group} role="group" className={cn('grid', slotProps?.group?.className)}>
        {options.map((item) => (
          <FastField
            {...slotProps?.checkbox}
            {...field}
            {...item}
            key={`${uuid}-${item.value}`}
            type="checkbox"
            name={name}
            value={item.value}
            as={Checkbox}
          />
        ))}
      </div>
      <FieldErrorMessage fieldName={name} />
    </div>
  );
}

export default memo(CheckboxGroup);
