import { ButtonHTMLAttributes, FC, ReactElement } from 'react';

const VARIANT = {
  default: 'bg-black text-white hover:bg-gray-700',
  outlined: 'border border-black hover:text-gray-500 hover:border-gray-500',
  text: 'h-fit hover:text-gray-500',
  none: '',
};

const SIZE = {
  default: 'px-4 py-2 rounded-md',
  small: '',
  medium: '',
  large: '',
  none: '',
};

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactElement | string;
  className?: string;
  type?: 'button' | 'reset' | 'submit';
  variant?: 'default' | 'text' | 'outlined' | 'none';
  size?: 'default' | 'small' | 'medium' | 'large' | 'none';
}

const Button: FC<IButton> = ({
  children,
  className = '',
  type = 'button',
  variant = 'default',
  size = 'default',
  ...props
}) => {
  return (
    <button
      {...props}
      type={type}
      className={`${VARIANT[variant] ?? ''} ${SIZE[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
