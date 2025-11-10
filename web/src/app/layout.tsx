import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ski Resorts',
  description: ' Discover the best ski resorts around the world',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased bg-white text-gray-900  font-sans min-h-screen`}
      >
        <header className='sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm'>
          <div className='px-4 md:px-16 py-4'>
            <Link
              href='/'
              className='text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors'
            >
              Ski Resorts
            </Link>
          </div>
        </header>
        <main>{children}</main>
        <footer className='bg-gray-900 text-gray-300 mt-auto'>
          <div className='container mx-auto px-4 py-12'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
              <div>
                <h3 className='text-white font-semibold text-lg mb-4'>
                  About Us
                </h3>
                <p className='text-sm'>
                  Discover the best ski resorts around the world. Find your
                  perfect snow adventure with our curated selection of premier
                  ski destinations.
                </p>
              </div>
              <div>
                <h3 className='text-white font-semibold text-lg mb-4'>
                  Quick Links
                </h3>
                <ul className='space-y-2 text-sm'>
                  <li>
                    <Link
                      href='/'
                      className='hover:text-white transition-colors'
                    >
                      Home
                    </Link>
                  </li>
                  <li></li>
                </ul>
              </div>
              <div>
                <h3 className='text-white font-semibold text-lg mb-4'>
                  Contact
                </h3>
                <p className='text-sm'>
                  Email: info@skiresorts.com
                  <br />
                  Phone: +1 (555) 123-4567
                </p>
              </div>
            </div>
            <div className='border-t border-gray-800 pt-8 text-center text-sm'>
              <p>
                &copy; {new Date().getFullYear()} Ski Resorts. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

