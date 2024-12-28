'use server';

import { cookies } from 'next/headers';
import { Locale, defaultLocale } from './config';

const COOKIE_NAME = 'NEXT_LOCALE';

export async function getUserLocale(): Promise<Locale> {
  const userLocale = cookies().get(COOKIE_NAME)?.value as Locale | undefined;

  return userLocale || defaultLocale;
}

export async function setUserLocale(locale: Locale) {
  cookies().set(COOKIE_NAME, locale);
}
