import {ButtonHTMLAttributes, DetailedHTMLProps, MouseEvent} from 'react';

export default interface IButton
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  title: string;
  variant?: 'filled' | 'outlined';
  className?: string;
  onClick?: (e: MouseEvent) => void;
}
