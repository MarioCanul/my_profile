'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useTransition } from 'react';
import { Button } from './ui/Button';

export default function LanguageSwitcher() {
   const router = useRouter();
   const pathname = usePathname();
   const locale = useLocale();
   const [isPending, startTransition] = useTransition();
   const toggleLocale = () => {
      const newLocale = locale === 'en' ? 'es' : 'en';
      const pathParts = pathname.split('/');
      pathParts[1] = newLocale;
      const newPath = pathParts.join('/');
      startTransition(() => {
         router.replace(newPath);
      });
   };

   return (
      <Button
         onClick={toggleLocale}
         disabled={isPending}
         className="border px-3 py-1 rounded"
      >
         {locale === 'en' ? 'ES' : 'EN'}
      </Button>
   )
}