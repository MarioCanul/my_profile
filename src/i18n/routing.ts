
import { defineRouting } from 'next-intl/routing';
import type { Pathnames } from 'next-intl/routing';

export const locales = ['es', 'en']; // Asegúrate de que 'es' esté aquí

export const defaultLocale = 'es'; // Establece 'es' como idioma por defecto

export const localePrefix = 'always'; // Esto le dice a next-intl que redirija la ruta '/'

export const pathnames = {
   '/': '/',
   // Configuración de rutas si la necesitas
} satisfies Pathnames<typeof locales>;
export const routing = defineRouting({
   locales,
   defaultLocale,
   localePrefix,
   pathnames
});