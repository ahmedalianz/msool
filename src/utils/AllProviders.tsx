import {FC, ReactNode, Suspense, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {HelmetProvider} from 'react-helmet-async';

const mode = import.meta.env.VITE_MODE ?? 'not-found';
const dir = {
  ar: 'rtl',
  en: 'ltr',
};

export const AllProviders: FC<{children: ReactNode}> = ({children}) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  const {
    i18n: {language},
  } = useTranslation();

  const direction = dir[(language as 'ar' | 'en') ?? 'ar'];

  useEffect(() => {
    document.body.dir = direction;
  }, [language]);

  return (
    <Suspense fallback={<></>}>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </HelmetProvider>
    </Suspense>
  );
};
