import {t} from 'i18next';
import IInputs from 'src/interfaces/IInputs';
import {z, ZodType} from 'zod';
const saudiPhoneNumberRegex = /^\+9665\d{8}$/;

export const ContactSchema: ZodType<IInputs> = z.object({
  address: z.string().min(1, t('required')),
  name: z.string().min(1, t('required')),
  email: z.string().email({message: t('invalid_email')}),
  phone: z
    .string()
    .min(1, t('required'))
    .refine(
      value => {
        return saudiPhoneNumberRegex.test(value);
      },
      {
        message: t('invalid_phone_number'),
      },
    ),
  message: z.string().min(1, t('required')),
});
