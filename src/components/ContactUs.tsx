import {t} from 'i18next';
import {useForm, SubmitHandler} from 'react-hook-form';
import IInputs from 'src/interfaces/IInputs';
import InputField from './InputField';
import Button from './Button';
import {zodResolver} from '@hookform/resolvers/zod';
import {ContactSchema} from '../schemas/contactForm';

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<IInputs>({resolver: zodResolver(ContactSchema)});
  const onSubmit: SubmitHandler<IInputs> = async (data: IInputs) =>
    console.log('data=>>', data);

  return (
    <div className="px-8 lg:px-12 py-[40px]">
      <p className="m-0 mb-2 text-2xl font-medium">{t('contact_us')}</p>
      <hr className="m-0 mb-12 border-solid border-b-[0.3px] border-gray-200" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-wrap">
          <InputField
            type="text"
            label="address"
            register={register}
            error={errors.address}
            placeHolder={'placeholder1'}
            fieldName="address"
          />
          <InputField
            type="text"
            label="name"
            register={register}
            error={errors.name}
            placeHolder={'placeholder2'}
            fieldName="name"
          />
          <InputField
            label="email"
            register={register}
            error={errors.email}
            placeHolder={'placeholder3'}
            fieldName="email"
          />
          <InputField
            type="text"
            label="phone"
            register={register}
            error={errors.phone}
            placeHolder={'placeholder4'}
            fieldName="phone"
          />
          <InputField
            label="message"
            register={register}
            error={errors.message}
            placeHolder={'placeholder5'}
            fieldName="message"
            textarea
          />
        </div>
        <div className="pt-4 mt-4 pe-8 flex-grow-0 max-w-1/2 flex">
          <Button title="send" type="submit" />
        </div>
      </form>
    </div>
  );
}
