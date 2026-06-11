import type { ComponentType } from 'react';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';

interface AppProps {
  Component: ComponentType<any>;
  pageProps: any;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
