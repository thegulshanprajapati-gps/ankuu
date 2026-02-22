'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function FloatingAnkuuBadge() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 animate-float rounded-full px-4 py-2 text-sm font-semibold backdrop-blur-md ${
        isDark
          ? 'border border-amber-200/35 bg-slate-900/90 text-amber-100 shadow-[0_16px_38px_-20px_rgba(0,0,0,0.75)]'
          : 'border border-white/75 bg-white/88 text-slate-700 shadow-[0_18px_40px_-24px_rgba(30,41,59,0.45)]'
      }`}
    >
      <span>Ankuu </span>
      <span className={isDark ? 'text-amber-300' : 'text-amber-500'}>{'\u{1F49B}'}</span>
    </div>
  );
}
