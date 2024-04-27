import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export const useIsRTL = () => {
  const {
    i18n: { language },
  } = useTranslation();

  const isRTL = useMemo(() => {
    return language === 'ar';
  }, [language]);

  return { isRTL };
};
