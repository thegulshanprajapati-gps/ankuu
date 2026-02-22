'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useEffect, useMemo, useState } from 'react';

const sectionLinks = [
  { label: 'Apology', hash: '#apology' },
  { label: 'Promises', hash: '#promises' },
  { label: 'Why You Matter', hash: '#why-you-matter' },
  { label: 'Forgive Me?', hash: '#forgive' }
];

export default function Navbar() {
  const pathname = usePathname();
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';

  const links = useMemo(() => {
    const hashLinks = sectionLinks.map((item) => ({
      label: item.label,
      href: pathname === '/' ? item.hash : `/${item.hash}`
    }));

    return [
      { label: 'Home', href: '/' },
      ...hashLinks,
      { label: 'Memories', href: '/memories' },
      { label: 'Message', href: '/message' }
    ];
  }, [pathname]);

  const toggleTheme = () => {
    if (!mounted) return;
    setTheme(isDark ? 'light' : 'dark');
  };

  const isActiveLink = (href) => {
    if (href.startsWith('#') || href.startsWith('/#')) return false;
    return pathname === href;
  };

  const navShellClass = isDark
    ? 'mx-auto flex w-full max-w-6xl items-center gap-3 rounded-2xl border border-slate-500/50 bg-slate-900/92 px-3 py-2 shadow-lg shadow-slate-950/55 backdrop-blur-xl'
    : 'mx-auto flex w-full max-w-6xl items-center gap-3 rounded-2xl border border-slate-200/90 bg-white/92 px-3 py-2 shadow-lg shadow-slate-300/25 backdrop-blur-xl';

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 py-3 md:px-6">
      <div className={navShellClass}>
        <div className="whitespace-nowrap rounded-full bg-amber-300 px-3 py-1 text-xs font-bold text-slate-900">
          Sorry Ankuu
        </div>

        <nav className="hide-scrollbar flex flex-1 items-center gap-2 overflow-x-auto whitespace-nowrap text-xs font-semibold md:text-sm">
          {links.map((item) => {
            const active = isActiveLink(item.href);
            const linkClass = active
              ? isDark
                ? 'bg-slate-700 text-slate-100'
                : 'bg-amber-100 text-slate-900'
              : isDark
                ? 'text-slate-300 hover:bg-slate-700/75 hover:text-slate-100'
                : 'text-slate-700 hover:bg-amber-50/90 hover:text-slate-900';

            return (
              <Link
                key={item.href + item.label}
                href={item.href}
                className={`rounded-full px-3 py-1.5 transition-colors duration-200 ${linkClass}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={toggleTheme}
          className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition md:text-sm ${
            isDark
              ? 'border-slate-500 bg-slate-800 text-slate-100 hover:bg-slate-700'
              : 'border-slate-300 bg-slate-100 text-slate-700 hover:bg-white'
          }`}
          aria-label="Toggle dark mode"
        >
          {mounted ? (isDark ? 'Light' : 'Dark') : 'Theme'}
        </button>
      </div>
    </header>
  );
}
