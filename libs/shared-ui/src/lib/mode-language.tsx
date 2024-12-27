'use client';

import { useLocale, useTranslations } from 'next-intl';
import { languages } from '@mmcinema-ui/shared-common';
import { images } from '@mmcinema-ui/assets';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Button,
  Avatar,
  AvatarImage,
  AvatarFallback,
} from '@mmcinema-ui/shadcn';

const ModeLanguage = () => {
  const locale = useLocale();
  const t = useTranslations('CORE.language');

  const listLanguages = languages.configLang.locales.map((lang) => ({
    label: t(lang),
    key: lang,
    photo: images[lang],
    onClick: () => languages.localeLang.setUserLocale(lang),
  }));

  const currentLang = listLanguages.find((lang) => lang.key === locale) ?? listLanguages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full size-8">
          <Avatar className="size-8">
            <AvatarImage src={currentLang.photo} alt={currentLang.key} />
            <AvatarFallback>{currentLang.key.toUpperCase()}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {listLanguages.map((lang) => (
          <DropdownMenuItem key={lang.key} onClick={lang.onClick}>
            <div className="flex items-center gap-2">
              <Avatar className="size-8">
                <AvatarImage src={lang.photo} alt={lang.key} />
                <AvatarFallback>{lang.key.toUpperCase()}</AvatarFallback>
              </Avatar>
              <span>{lang.label}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ModeLanguage;
