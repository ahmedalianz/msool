import classNames from 'classnames';
import {t} from 'i18next';
import {FC} from 'react';
import IInputField from 'src/interfaces/IInputField';

const InputField: FC<IInputField> = ({
  label,
  register,
  error,
  placeHolder,
  textarea,
  fieldName,
  ...rest
}) => {
  const commonClassName =
    'px-[14px] py-[18px] flex-1 border-[1px] hover:border-blackLight border-blackLight2 m-0 rounded-3xl cursor-text focus:border-primary outline-none';
  return (
    <div
      className={classNames({
        'pt-4 m-0 w-full lg:pe-8 lg:flex-grow-0': true,
        'lg:max-w-1/2': !textarea,
        'lg:max-w-full': textarea,
      })}>
      <p className="m-0 mb-2 text-primaryDark3">{t(label)}</p>
      <div className="flex flex-col p-0 m-0 border-0 w-full">
        {textarea ? (
          <textarea
            rows={4}
            cols={50}
            {...register(fieldName, {required: t('required')})}
            placeholder={t(placeHolder)}
            className={classNames({
              'resize-none': true,
              [`${commonClassName}`]: true,
              'border-error hover:border-error focus:border-error':
                !!error?.message,
            })}
          />
        ) : (
          <input
            {...rest}
            {...register(fieldName, {required: t('required')})}
            placeholder={t(placeHolder)}
            className={classNames({
              [`${commonClassName}`]: true,
              'border-error hover:border-error focus:border-error':
                !!error?.message,
            })}
          />
        )}
        {error?.message && (
          <p className="text-error text-start text-xs mb-0 mt-1 mx-3">
            {error.message}
          </p>
        )}
      </div>
    </div>
  );
};
export default InputField;
