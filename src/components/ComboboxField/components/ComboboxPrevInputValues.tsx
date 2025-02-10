import { memo } from 'react';
import { MdClose } from 'react-icons/md';
import { v4 } from 'uuid';

import { Button, Typography } from '~/components/index.ts';
import { Option } from '../ComboboxField.tsx';

interface ComboboxPrevInputValuesProps {
  values: Option[];
  onRemove: (item: Option) => void;
}

function ComboboxPrevInputValues({ values, onRemove }: ComboboxPrevInputValuesProps) {
  const uuid = v4();

  return values.map((o, i) => (
    <Typography
      component="span"
      className="flex items-center gap-2 rounded-xl bg-primary-100 px-3 py-[3px] shadow-[inset_0_0_8px_1px_rgba(0,0,0,0.05)] select-none dark:bg-primary-400 dark:text-black"
      key={`${uuid}-${i}`}
    >
      {o.label}
      <Button
        as="unstyled"
        className="rounded-full bg-gray-300 p-[3px]"
        onClick={() => onRemove(o)}
      >
        <MdClose />
      </Button>
    </Typography>
  ));
}

export default memo(ComboboxPrevInputValues);
