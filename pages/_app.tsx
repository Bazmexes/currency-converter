import '@/styles/custom-reset.scss';
import type { AppProps } from 'next/app';

import { StoreProvider } from '@/store/StoreProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider {...pageProps}>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
