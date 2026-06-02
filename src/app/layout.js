import React from 'react';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: 'Sahara Star Tours | Bespoke Sahara Desert & Morocco Travel Agency',
  description:
    'Discover the magic of Morocco with Sahara Star Tours. From luxury Sahara Desert safaris to Marrakech medina tours and high Atlas treks, book your dream journey today.',
  keywords:
    'sahara star tours, morocco travel agency, sahara desert tour, marrakech riad booking, atlas mountains hiking, moroccan tours, custom travel morocco',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* FontAwesome integration */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          precedence="default"
        />
      </head>
      <body suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
