'use client';

import Link from 'next/link';
import { IconMenu } from '@tabler/icons-react';

import {
  cn,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@mmcinema-ui/shadcn';
import { useTranslations } from 'next-intl';

interface TopNavProps extends React.HTMLAttributes<HTMLElement> {
  links: {
    title: string;
    href: string;
    isActive: boolean;
  }[];
}

export function TopNav({ className, links, ...props }: TopNavProps) {
  const t = useTranslations('nav_groups');
  return (
    <>
      <div className="md:hidden">
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button size="icon" variant="outline">
              <IconMenu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="bottom" align="start">
            {links.map(({ title, href, isActive }) => (
              <DropdownMenuItem key={`${title}-${href}`} asChild>
                <Link href={href} className={!isActive ? 'text-muted-foreground' : ''}>
                  {t(title)}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <nav
        className={cn('hidden items-center space-x-4 md:flex lg:space-x-6', className)}
        {...props}
      >
        {links.map(({ title, href, isActive }) => (
          <Link
            key={`${title}-${href}`}
            href={href}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive ? '' : 'text-muted-foreground'
            }`}
          >
            {t(title)}
          </Link>
        ))}
      </nav>
    </>
  );
}
