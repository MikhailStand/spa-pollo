import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Полло Спа — SPA, косметология и красота в Королёве',
  description:
    'Полло Спа в Королёве: SPA-ритуалы, массаж, косметология, уходы за телом и салон красоты. Онлайн-запись и подарочные сертификаты.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
