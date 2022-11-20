import React from 'react';
import clsx from 'clsx';
import { breakpoints } from 'utils/breakpoints';

import type { Props } from './Button.types';

function Button({
  className,
  color = 'primary',
  disabled,
  square = false,
  type = 'button',
  variant = 'contained',
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={clsx('button', className, color, { disabled, square }, breakpoints(variant))}
      disabled={disabled}
      type={type}
    />
  );
}

export default Button;
