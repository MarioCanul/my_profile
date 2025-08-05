'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from './ui/Button';

export default function ThemeToggle() {
   const { theme, setTheme } = useTheme();
   const [mounted, setMounted] = useState(false);
   useEffect(() => {
      setMounted(true);
   }, [])
   if (!mounted) return null;
   return (
      <Button
         className="ml-auto px-3 py-1 rounded border"
         onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
         {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
      </Button>
   )
}