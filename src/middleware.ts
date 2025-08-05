// middleware.ts
import { type NextRequest, NextResponse } from 'next/server';

import createIntlMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';
import { updateSession } from '@/utils/supabase/updateSession';

// Crea el middleware de next-intl con la configuración de rutas/idiomas
const intlMiddleware = createIntlMiddleware(routing);

export async function middleware(request: NextRequest) {
   console.log('[middleware] Se ejecuta en:', request.nextUrl.pathname);

   // Ejecuta el middleware de next-intl
   const intlResponse = intlMiddleware(request);

   // Pasa esa respuesta a updateSession para que no se cree una nueva
   // return await updateSession(request, intlResponse);
   return intlResponse
}

export const config = {
   matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};

