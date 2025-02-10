type HTMLButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonAs = 'button' | 'unstyled' | 'icon';
type ButtonVariant = 'outlined' | 'container' | 'content';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface BaseProps extends Omit<HTMLButtonProps, 'color'> {
  loading?: boolean;
  disableTextTransform?: boolean;
  href?: string;
  external?: boolean;
  /** @default 'container' */
  variant?: ButtonVariant;
  /** @default 'md' */
  size?: ButtonSize;
}

export interface ButtonAsButtonProps extends BaseProps {
  as?: Extract<ButtonAs, 'button'>;
}

export interface ButtonAsUnstyledProps extends HTMLButtonProps {
  as: Extract<ButtonAs, 'unstyled'>;
}

export interface ButtonAsIconProps extends BaseProps {
  as: Extract<ButtonAs, 'icon'>;
}

export type ButtonProps = ButtonAsButtonProps | ButtonAsIconProps | ButtonAsUnstyledProps;
