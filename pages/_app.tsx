import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import en from '../locales/en.json';

const messages: Record<string, {}> = { en };

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const locale = router.query.locale?.toString() || 'en';

  return (
    <IntlProvider locale={locale} defaultLocale="en" messages={messages[locale]}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp;
