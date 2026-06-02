import React from 'react';
import { tourDatabase } from '@/data/tour-database';
import TourDetailClient from './TourDetailClient';
import { notFound } from 'next/navigation';

// Pre-renders all 33 tours statically during Next.js build
export async function generateStaticParams() {
  return Object.keys(tourDatabase).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const tour = tourDatabase[slug];
  
  if (!tour) {
    return {
      title: 'Tour Program Not Found | Sahara Star Tours',
    };
  }

  return {
    title: `${tour.title} | Sahara Star Tours`,
    description: tour.itinerary[0] ? tour.itinerary[0].desc : tour.title,
  };
}

export default async function TourDetail({ params }) {
  const { slug } = await params;
  const tour = tourDatabase[slug];

  if (!tour) {
    notFound();
  }

  return <TourDetailClient tourKey={slug} tour={tour} />;
}
