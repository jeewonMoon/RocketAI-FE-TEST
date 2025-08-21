import {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FE코딩테스트_문지원',
  description: '운세박사 프론트엔드 코딩테스트',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
