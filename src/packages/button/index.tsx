import React, { HTMLAttributes, PropsWithChildren } from 'react';

import cs from 'classnames';

import { ThemeTypes, ThemeSizes } from '../interface';

import './style.scss';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type?: ThemeTypes | 'link';
  size?: ThemeSizes;
  round?: boolean;
  ghost?: boolean;
  loading?: boolean;
  disabled?: boolean;
  d3?: boolean;
  icon?: React.ReactNode;
}

function Button({
  type = 'info',
  size = 'middle',
  disabled = false,
  round = false,
  ghost = false,
  icon,
  d3,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      {...props}
      className={cs('btn', type, size, {
        disabled,
        round,
        ghost,
        d3,
      })}
      disabled={disabled}
    >
      {props.children}
    </button>
  );
}

export default Button;
