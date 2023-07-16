import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local'
import Link from 'next/link';

const kumbhSans = localFont({
  src: [
    {
      path: '../public/fonts/KumbhSans.ttf',
      weight: '400'
    }
  ]
});

const cyrillicPixel = localFont({
  src: [
    {
      path: '../public/fonts/CyrillicPixel.ttf',
      weight: '400'
    }
  ]
});

const pixeloidSans = localFont({
  src: [
    {
      path: '../public/fonts/PixeloidSans.ttf',
      weight: '400'
    }
  ]
})

export const metadata: Metadata = {
  title: 'Inferno Games',
  description: 'Bringing immersive gaming experiences to life with cutting-edge technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={kumbhSans.className}>
      <nav className="navigation">
          <Link className="navigation-logo" href="/">
            <img src="logo.png" alt="" />
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
        <footer>
          © Inferno Games 2021-2023. All rights reserved
          </footer>
      </body>
    </html>
  );
}