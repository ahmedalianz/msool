import classNames from 'classnames';
import {FC} from 'react';
import IPlusMinus from 'src/interfaces/IPlusMinus';

const PlusMinus: FC<IPlusMinus> = ({icon, onClick, disabled}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames({
        'outline-none bg-transparent border-[1px] border-black border-solid rounded-lg p-2 w-10 h-10 flex justify-center items-center text-3xl':
          true,
        'text-primary opacity-40 cursor-default': disabled,
        'text-black cursor-pointer': !disabled,
      })}>
      {icon === 'plus' ? '+' : '-'}
    </button>
  );
};
export default PlusMinus;
