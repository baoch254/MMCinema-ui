import { languages } from '@mmcinema-ui/shared-common';

type Messages = typeof languages.vi;

declare global {
  interface IntlMessages extends Messages {}
}
