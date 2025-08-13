import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import {LanguageSwitcher} from "../../components/LanguageSwitcher";
import { Public_Sans, Inter, Geist_Mono } from "next/font/google";
import "../globals.css";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${publicSans.variable} ${inter.variable} ${geistMono.variable} antialiased bg-[#FFF2E8] font-sans`}>
        <NextIntlClientProvider messages={messages}>
          {/* Language Switcher no topo direito */}
          <div className="fixed top-4 right-4 z-50">
            <LanguageSwitcher locale={locale}/>
          </div>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
