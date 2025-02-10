import { useField, useFormikContext } from 'formik';
import React, { memo, useEffect, useRef, useState } from 'react';

import { useDebounce } from '~/hooks/index.ts';
import { cn } from '~/utils/cssUtils.ts';
import { ClickOutsideAlerter, FieldErrorMessage, FieldLabel } from '../index.ts';
import ComboboxInput from './components/ComboboxInput.tsx';
import ComboboxOptionList from './components/ComboboxOptionList.tsx';

interface FilteredOption extends Option {
  hide?: boolean;
}

export interface Option {
  value: string;
  label: string;
}

export interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name'> {
  name: string;
  label?: string;
  options: Option[];
  fullWidth?: boolean;
  required?: boolean;
}

function ComboboxField({ label, fullWidth, required, options: optionsProp, ...props }: Props) {
  const { setFieldValue } = useFormikContext();
  const [{ value, onChange, ...field }, meta] = useField<string[]>(props);
  const inputRef = useRef<HTMLInputElement>(null);
  const [dropdownMinWidth, setDropdownMinWidth] = useState<number | undefined>(undefined);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [options, setOptions] = useState<FilteredOption[]>(optionsProp);
  const [selectedValues, setSelectedValues] = useState<Option[]>(
    Array.isArray(value) ? options.filter((o) => value.includes(o.value)) : []
  );
  const [debounce, setValueToDebounce] = useDebounce(200);

  if (!Array.isArray(selectedValues)) {
    throw new Error(`${props.name}'s value must be an array`);
  }

  const resetOptions = () => {
    const labels = selectedValues.map((v) => v.label);
    setOptions(optionsProp.filter((o) => !labels.includes(o.label)));
  };

  const hideOption = (value: string, hide?: boolean) => {
    setOptions((prev) => prev.map((o) => (o.value === value ? { ...o, hide } : o)));
  };

  const removeSelected = (item?: Option) => {
    if (item) {
      // Remove an item
      setSelectedValues((prev) => prev.filter((o) => o.value !== item.value));
      hideOption(item.value, false);
    } else {
      // Remove all items
      setSelectedValues([]);
      resetOptions();
      setValueToDebounce('');
    }
  };

  const selectItem = (item: Option) => {
    setSelectedValues((prev) => [...prev, item]);
    hideOption(item.value, true);
    setValueToDebounce('');
  };

  const onInputFocus = () => {
    inputRef.current?.focus();
    setOpenDropdown(true);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueToDebounce(e.target.value);
  };

  // Filter options based on input text
  useEffect(() => {
    if (debounce.length > 0) {
      const labels = selectedValues.map((v) => v.label);
      // Filter options that are not already selected and contain the input text
      const filter = () => {
        return optionsProp.filter((o) => {
          const isAlreadySelected = labels.includes(o.label);
          const isLabelContained = o.label.toLowerCase().includes(debounce.toLowerCase());
          return !isAlreadySelected && isLabelContained;
        });
      };
      setOptions(filter);
    } else {
      // Reset options if input text is empty
      resetOptions();
    }
  }, [debounce]);

  // Save selected values to formik
  useEffect(() => {
    setFieldValue(
      props.name,
      selectedValues.map((o) => o.value)
    );
  }, [selectedValues]);

  // Get min width of the dropdown list
  useEffect(() => {
    if (inputRef.current) {
      setDropdownMinWidth(inputRef.current.offsetWidth);
    }
  }, [inputRef.current]);

  return (
    <ClickOutsideAlerter
      className={cn('relative', !fullWidth && 'inline-block')}
      onClick={() => setOpenDropdown(false)}
    >
      <FieldLabel
        component="label"
        htmlFor={props.name}
        required={required}
        error={!!meta.error}
        children={label}
        className="inline-block"
      />
      <ComboboxInput
        name={field.name}
        options={optionsProp}
        values={selectedValues}
        onFocus={onInputFocus}
        onChange={onInputChange}
        onRemove={removeSelected}
        ref={inputRef}
        isFocused={openDropdown}
      />
      <ComboboxOptionList
        minWidth={dropdownMinWidth ?? 100}
        open={openDropdown}
        options={options}
        onClick={selectItem}
      />
      <FieldErrorMessage fieldName={field.name} />
    </ClickOutsideAlerter>
  );
}

export default memo(ComboboxField);
