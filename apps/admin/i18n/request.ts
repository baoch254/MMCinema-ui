import { getRequestConfig } from 'next-intl/server';

import { languages } from '@mmcinema-ui/shared-common';

export default getRequestConfig(async () => {
  const locale = await languages.localeLang.getUserLocale();

  return {
    locale,
    messages: languages[locale],
  };
});
