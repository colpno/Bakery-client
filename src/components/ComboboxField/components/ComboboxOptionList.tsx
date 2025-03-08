import { memo } from 'react';
import { v4 } from 'uuid';

import { Typography } from '~/components/index.ts';
import { Option } from '../ComboboxField.tsx';

interface FilteredOption extends Option {
  hide?: boolean;
}

interface ComboboxOptionListProps {
  minWidth: number;
  open?: boolean;
  options: FilteredOption[];
  onClick: (item: FilteredOption) => void;
}

function ComboboxOptionList({ minWidth, options, open, onClick }: ComboboxOptionListProps) {
  const uuid = v4();

  if (!open) return null;

  return (
    <div
      style={{ minWidth }}
      className="absolute top-full left-0 z-popover translate-y-1 overflow-hidden rounded-md shadow-md *:not-last:border-b-1 *:not-last:border-gray-300 dark:*:not-last:border-gray-400"
    >
      {options.length > 0 ? (
        options.map((o, i) => {
          if (o.hide) return null;
          return (
            <Typography
              className="line-clamp-1 cursor-pointer bg-secondary-2 px-2 py-1.5 hover:bg-accent-1 hover:text-white sm:px-3"
              title={o.label}
              onClick={() => onClick(o)}
              key={`${uuid}-${i}`}
            >
              {o.label}
            </Typography>
          );
        })
      ) : (
        <Typography className="bg-secondary-2 py-4 text-center">No options</Typography>
      )}
    </div>
  );
}

export default memo(ComboboxOptionList);
