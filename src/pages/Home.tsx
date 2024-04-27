import {Hero, Solutions, ContactUs, Plans} from '@components';
import {useTranslation} from 'react-i18next';
import Button from '../components/Button';
import {useIsRTL} from '@hooks/useIsRTL';

export default function Home() {
  const {
    i18n: {changeLanguage},
  } = useTranslation();
  const {isRTL} = useIsRTL();
  return (
    <>
      <Button
        title={isRTL ? 'En' : 'ع'}
        onClick={() => changeLanguage(isRTL ? 'en' : 'ar')}
        className="fixed top-2 start-2 "
      />
      <Hero />
      <Solutions />
      <Plans />
      <ContactUs />
    </>
  );
}
