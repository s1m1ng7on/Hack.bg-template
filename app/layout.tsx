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
          <Link className="navigation-link" href="/login">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAAERUlEQVRYhe2YW2gcVRjHf99urBDSNi2UKFhsam0VWjDsSCo23hAV7YNomhTxpT6poLSiWPVR+iI1UHzQh+AVRNc2ViPS9sGK+iDdSaN4oTQJ1Ai9IDGJgXhJZ/8+zGw7mczunsnlRfzDsnPOfN93fnPu58D/+o/LFuIsaQXQAWwGrgVWRq8mgV+AH4GvzeyPhZSTFapB0k5JxyRdVH3NSDoiqVtSfqnhOiWNOEBV07Ckh5YCbLWkwwsAS6pP0qrFgtsg91qblvSno+2QpOsWA+5cnYL+lrRf0saY3yZJPZL+qeN7dt6QCpu1Xs1NS7qjRow7I5taGpLUPB9Alz73uEOcJx3iHMwK1+kQ9Lwcpg2F09IFh3gPusI1yG1QFDN88EGHeKfTPjiXEq8TWO9Q7qQrIDDhYHM98HAyMw3wMcdC1znaZbHdVfOtpJVyW74k6S9JLfVKlHSVwqnIRTOSlsf9kzW4DXBdL68E9jvYvQosc4zZEDFcUhJws2Ogih6VdEDSHABJyyS9BjySMeYshobEyyz9qqKnge2S3gK+j/JuIuxPrfOIN4shCbic+Wk98PI8fZNaEU8kAZda3wGHgOPAKHABWA1cA2wBugBV9Zb0uuNoy6qTqrFmJxhmVVpykJxxrgt37QM8M/vSxdjMLsbTySb+IWPh08C3hIPjPGGTGWGTtQC+mb0TdxgcHGwOguB+M/MktUgaB0ZyuVx/oVAYngMcTyg8BI2lgMc1CrwLfB4BzLh8ie/7jZJeMrPdQGMVs0/y+fxzbW1tQ6mAEeRR4J4U57PAC8D7yWZwgLsa6AcKDuaTQJfneceqAXYDHySyjwOdZvZ7FrAIrhH4KgXuo9jzLYTdoqJpoMPzvJNpgHngFLAhyioDG81sJCscQKlU2mdmLybzPc+7VLbv+0VgR8Lk1NTU1JY5uxkzC4DnY1k54A1JV2SFGxwcbI763Hx0Q1NTU2fadgsz6wM+jmXdDbyXnKPqqVwuP0D1AeGiHVWvPhSeW09wuakBvgB2mtlvLtEHBgZ6JO2JkkXP87odfLokfRglR1NrEMDMxoH7gHOx7LuAnyTtksN5pFwur6lnU0ctVQEBooHRAcQn0DXAm8BpSXslbarhP7VAwAmn2y2F59ZeUs4MkcaBn6P/p8zsDECpVNpjZj2Rza+Eqw4Anud1VZ59338G2Bol18aev3Hq9GY2AXQqPBq+QnjAiWsVcGv0fAh4GyCXy/VLqgCujX5p2srcaQbgs5pNnAJ6GLgR6AaOAGkryvbKQ6FQGDazT7OUEdNkEAS9mfeD0TxZBIrRAWcb4TZ9HdEFpqR8ZEcul3s2CILbuXy5CYDv+/EaS6vZve3t7WMLumF11cDAwL2S+nCfEw94nrcb0s/Fi65CoXDUzG4jHEi1NAk8UYGDBd5RZ1WxWMy3trZ2EW48bibcM44TTmP9QRD0tre3j8V9/gVfNrF1PstmnwAAAABJRU5ErkJggg==" />
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