'use client';

import confetti from 'canvas-confetti';
import { useEffect } from 'react';

export default function ConfettiBurst({ fireKey }) {
  useEffect(() => {
    if (!fireKey) return;

    const colors = ['#f8c8dc', '#ffe79a', '#bde4ff', '#c8ffd9', '#ffffff'];

    confetti({
      particleCount: 90,
      spread: 80,
      startVelocity: 50,
      origin: { y: 0.72 },
      colors
    });

    const second = setTimeout(() => {
      confetti({
        particleCount: 70,
        spread: 110,
        startVelocity: 45,
        origin: { y: 0.68 },
        colors
      });
    }, 120);

    return () => clearTimeout(second);
  }, [fireKey]);

  return null;
}