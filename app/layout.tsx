import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local'
import Link from 'next/link';

const cyrillicPixel = localFont({
  src: [
    {
      path: '../public/fonts/cyrillic_pixel-7.ttf',
      weight: '400'
    }
  ],
  variable: '--font-cyrillic-pixel'
});

const pixeloidSans = localFont({
  src: [
    {
      path: '../public/fonts/PixeloidSans.ttf',
      weight: '400'
    }
  ],
  variable: '--font-pixeloid-sans'
})

export const metadata: Metadata = {
  title: 'Kinter Classic',
  description: 'The original, remastered.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={pixeloidSans.className}>
        <nav className="navigation">
          <Link className={`${cyrillicPixel.className} navigation-logo`} href="/">
            <img src="logo.png"></img>
            Kinter Classic
          </Link>

          <div>
          <Link className="navigation-link" href="/">
            HOME
          </Link>
          <Link className="navigation-link" href="/about">
            ABOUT
          </Link>
          <Link className="navigation-link" href="/download">
            DOWNLOAD
          </Link>
          </div>
        </nav>
        <main className="main-container">{children}</main>
        <footer>© Inferno Games 2021-2023. All rights reserved</footer>
      </body>
    </html>
  );
}