import {FieldError, UseFormRegister} from 'react-hook-form';
import IInputs from './IInputs';
import {DetailedHTMLProps, InputHTMLAttributes} from 'react';

export default interface IInputField
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  register: UseFormRegister<IInputs>;
  error: FieldError | undefined;
  placeHolder: string;
  textarea?: boolean;
  fieldName: keyof IInputs;
}
