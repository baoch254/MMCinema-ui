import './global.css';

import localFont from 'next/font/local';
import NextTopLoader from 'nextjs-toploader';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages, getTranslations } from 'next-intl/server';
import { cookies } from 'next/headers';

import {
  QueryProvider,
  ThemeProvider,
  ScreenProvider,
  SearchProvider,
} from '@mmcinema-ui/shared-providers';
import AppSidebar from '@mmcinema-ui/shared-ui/layout/components/organisms/app-sidebar';

import { baseOpenGraph } from '@web/metadata';
import { SidebarProvider } from '@mmcinema-ui/shadcn';

const font = localFont({
  src: [
    {
      path: './fonts/BeVietnamPro-Light.ttf',
      weight: '300',
    },
    {
      path: './fonts/BeVietnamPro-Regular.ttf',
      weight: '400',
    },
    {
      path: './fonts/BeVietnamPro-Medium.ttf',
      weight: '500',
    },
    {
      path: './fonts/BeVietnamPro-SemiBold.ttf',
      weight: '600',
    },
    {
      path: './fonts/BeVietnamPro-Bold.ttf',
      weight: '700',
    },
  ],
  display: 'swap',
  variable: '--font-be-vietnam-pro',
});

export async function generateMetadata() {
  const locale = await getLocale();

  const t = await getTranslations({ locale, namespace: 'title_page' });

  return {
    title: {
      template: `%s | ${t('root')}`,
      default: t('root'),
    },
    openGraph: {
      ...baseOpenGraph,
    },
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  const messages = await getMessages();
  const defaultOpen = cookies().get('sidebar:state')?.value === 'true';

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${font.className} ${font.variable}`}>
        <NextTopLoader showSpinner={false} color="hsl(var(--primary))" />
        <NextIntlClientProvider messages={messages}>
          <QueryProvider>
            <ScreenProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                <SearchProvider>
                  <SidebarProvider defaultOpen={defaultOpen}>
                    <AppSidebar />
                    {children}
                  </SidebarProvider>
                </SearchProvider>
              </ThemeProvider>
            </ScreenProvider>
          </QueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
