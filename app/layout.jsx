import '@/styles/globals.css';
import FloatingAnkuuBadge from '@/components/FloatingAnkuuBadge';
import FloatingFriendIcons from '@/components/FloatingFriendIcons';
import ThemeProvider from '@/components/ThemeProvider';
import ToastProvider from '@/components/ToastProvider';
import Navbar from '@/components/Navbar';

const getSiteUrl = () => {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL;

  if (!configuredUrl) {
    return 'http://localhost:3000';
  }

  const withProtocol = configuredUrl.startsWith('http')
    ? configuredUrl
    : `https://${configuredUrl}`;

  return withProtocol.replace(/\/+$/, '');
};

const siteUrl = getSiteUrl();

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Sorry Ankuu',
  description:
    'A gentle and respectful apology website for Ankuu, with accountability, warmth, and better communication promises.',
  openGraph: {
    title: 'Sorry Ankuu',
    description:
      'Ankuu, this is a sincere apology with love, respect, and no pressure.',
    url: siteUrl,
    siteName: 'Sorry Ankuu',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Sorry Ankuu - A heartfelt apology'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sorry Ankuu',
    description: 'A heartfelt apology for Ankuu, made with respect.',
    images: ['/og-image.svg']
  },
  icons: {
    icon: '/favicon.svg'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased transition-colors duration-500">
        <ThemeProvider>
          <div className="pointer-events-none fixed inset-0 overflow-hidden">
            <div className="absolute -left-24 top-8 h-64 w-64 rounded-full bg-[#ffd6cb]/56 blur-3xl dark:bg-[#c78763]/24" />
            <div className="absolute right-0 top-28 h-72 w-72 rounded-full bg-[#d8ebff]/50 blur-3xl dark:bg-[#4d95ac]/22" />
            <div className="absolute -bottom-20 left-1/3 h-64 w-64 rounded-full bg-[#ffecc8]/45 blur-3xl dark:bg-[#705f3a]/18" />
          </div>
          <FloatingFriendIcons />

          <Navbar />
          <main className="relative z-10 pb-12 pt-24">{children}</main>
          <FloatingAnkuuBadge />

          <ToastProvider />
        </ThemeProvider>
      </body>
    </html>
  );
}
