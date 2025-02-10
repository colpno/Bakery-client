import Checkbox from '~/components/Checkbox.tsx';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export interface CheckboxOption {
  label: string;
  value: string;
}

export interface CheckboxProps extends Omit<InputProps, 'type'> {
  label: string;
}

export interface CheckboxGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  label?: string;
  options: CheckboxOption[];
  required?: boolean;
  slotProps?: {
    label?: React.HTMLAttributes<HTMLParagraphElement>;
    group?: React.HTMLAttributes<HTMLDivElement>;
    checkbox?: React.ComponentProps<typeof Checkbox>;
  };
  cols?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
}
