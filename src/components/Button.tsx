import {t} from 'i18next';
import {FC} from 'react';
import IButton from 'src/interfaces/IButton';
import classNames from 'classnames';
const Button: FC<IButton> = ({
  title = 'button',
  variant = 'filled',
  className,
  onClick,
  ...rest
}) => {
  return (
    <button
      {...rest}
      onClick={onClick}
      className={classNames({
        'rounded-2xl border-2 font-bold flex-1 items-center justify-center py-2 px-[22px] text-sm cursor-pointer uppercase':
          true,
        'text-white bg-primary border-transparent hovered-button':
          variant === 'filled',
        'text-primary bg-transparent border-primaryDark2 border-primaryDark5 border-1 hover:bg-primaryDark6':
          variant === 'outlined',
        [`${className}`]: !!className,
      })}>
      {t(title)}
    </button>
  );
};
export default Button;
