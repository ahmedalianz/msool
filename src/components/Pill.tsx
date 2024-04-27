import {t} from 'i18next';
import {FC} from 'react';
import IPill from 'src/interfaces/IPill';
const Pill: FC<IPill> = ({title = 'button', className}) => {
  return (
    <div
      className={`text-white rounded-[20px] font-bold text-center w-full py-2 pill ${className}`}>
      {t(title)}
    </div>
  );
};
export default Pill;
