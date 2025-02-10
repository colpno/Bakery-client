type TypoVariant = 'body1' | 'body2' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type TypoComponent = keyof JSX.IntrinsicElements;

type BaseProps = {
  /** @default 'body1' */
  variant?: TypoVariant;
  /** @default 'p' */
  component?: TypoComponent;
} & React.AllHTMLAttributes<HTMLElement>;

export type TypoAsTypographyProps = BaseProps;

export type TypoAsHyperLinkProps = Omit<BaseProps, 'href'> & {
  href: string;
  external?: false;
};

export type TypoAsCopyableTextProps = BaseProps & {
  children: string;
  copyable?: boolean;
};

export type TypographyProps =
  | TypoAsTypographyProps
  | TypoAsHyperLinkProps
  | TypoAsCopyableTextProps;
