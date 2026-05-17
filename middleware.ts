import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const isProtectedRoute = createRouteMatcher(['/menu(.*)'])
const isPublicRoute = createRouteMatcher(['/login(.*)', '/registro(.*)', '/'])

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth()
  
  // LOG PARA DIAGNÓSTICO
  // console.log('--- PROXY LOG ---', { 
  //   userId: userId ? 'DETECTADO' : 'NULO', 
  //   path: req.nextUrl.pathname 
  // })

  // Si hay sesión y estamos en una página pública (incluida la raíz), forzar ir al menú
  if (userId && (isPublicRoute(req) || req.nextUrl.pathname === '/')) {
    return NextResponse.redirect(new URL('/menu/laboratorio', req.url))
  }

  // Proteger rutas de menú, excepto las públicas como /menu2
  if (isProtectedRoute(req) && !isPublicRoute(req)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest|glb)).*)',
    '/(api|trpc)(.*)',
  ],
}
