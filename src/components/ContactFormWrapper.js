'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import BookingForm from './BookingForm';

export default function ContactFormWrapper() {
  const searchParams = useSearchParams();
  const [prefilledData, setPrefilledData] = useState(null);

  useEffect(() => {
    const planRaw = searchParams.get('plan');
    if (planRaw) {
      try {
        const plan = JSON.parse(decodeURIComponent(planRaw));
        setPrefilledData({
          package: 'none',
          travelers: plan.people ? `${plan.people} ${parseInt(plan.people) === 1 ? 'Traveler' : 'Travelers'}` : '',
          message: `I would like to request a formal custom proposal based on the following custom plan preferences:
- Duration: ${plan.days} Days / ${parseInt(plan.days) - 1} Nights
- Accommodations: ${plan.tier} Tier
- Included Activities: ${plan.addons}
- Group Size: ${plan.people} ${parseInt(plan.people) === 1 ? 'Traveler' : 'Travelers'}

(Looking forward to receiving your custom suggestions!)`
        });
      } catch (e) {
        console.error("Failed to parse custom plan from query parameters", e);
      }
    }
  }, [searchParams]);

  return <BookingForm prefilledData={prefilledData} />;
}
