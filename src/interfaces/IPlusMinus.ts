import {ButtonHTMLAttributes, DetailedHTMLProps, MouseEvent} from 'react';

export default interface IPlusMinus
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon: 'plus' | 'minus';
  onClick?: (e: MouseEvent) => void;
}
