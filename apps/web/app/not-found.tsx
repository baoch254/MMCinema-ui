'use client';

import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { ArrowLeft } from 'lucide-react';

import { Button, Card } from '@mmcinema-ui/shadcn/ui';

const NotFoundPage = () => {
  const t = useTranslations('CORE');
  const router = useRouter();

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <Card className="p-8 text-center shadow-md">
        <h1 className="text-3xl font-bold mb-4">404</h1>
        <h3 className="text-xl font-semibold mb-2">{t('not_found.title')}</h3>
        <p className="text-gray-500 mb-6">{t('not_found.message')}</p>
        <Button
          onClick={() => router.push('/')}
          className="flex items-center justify-center gap-2 m-auto"
        >
          <ArrowLeft className="w-5 h-5" />
          {t('back')}
        </Button>
      </Card>
    </div>
  );
};

export default NotFoundPage;