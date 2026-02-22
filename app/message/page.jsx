'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import SectionContainer from '@/components/SectionContainer';

function buildMessage(context) {
  const cleaned = context.trim();

  if (!cleaned) {
    return 'Ankuu, jo bhi hua uske liye I am genuinely sorry. Main bina excuse diye accept karta hoon ki meri side se galti hui. Teri feelings valid hain, and I respect your space. Jab bhi tu ready ho, main calmly baat karke things better karna chahta hoon.';
  }

  return `Ankuu, "${cleaned}" wali situation ke liye I am truly sorry. Main is baat ki full responsibility leta hoon aur koi excuse nahi de raha. Mujhe samajh hai ki isse tujhe hurt hua hoga, and your feelings are absolutely valid. Main better communication, patience aur respect ke saath improve kar raha hoon. Reply ka koi pressure nahi hai, jab tu comfortable ho tab baat kar lenge.`;
}

export default function MessagePage() {
  const [incident, setIncident] = useState('');
  const [generated, setGenerated] = useState('');

  const canAct = useMemo(() => Boolean(generated), [generated]);

  const generateMessage = () => {
    setGenerated(buildMessage(incident));
  };

  const copyMessage = async () => {
    if (!generated) return;

    try {
      await navigator.clipboard.writeText(generated);
      toast.success('Message copied.');
    } catch (error) {
      toast.error('Copy failed. Try manual copy please.');
    }
  };

  const shareOnWhatsApp = () => {
    if (!generated) return;
    const url = `https://wa.me/?text=${encodeURIComponent(generated)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <SectionContainer
      id="message-tool"
      title="Sorry Message Helper"
      subtitle="Short context likho, respectful Hinglish apology ready ho jayegi."
      className="pb-16"
    >
      <div className="mb-6 flex justify-start">
        <Link href="/#forgive" className="soft-btn-secondary">
          Back to Apology
        </Link>
      </div>

      <div className="glass rounded-3xl p-6 md:p-8">
        <label htmlFor="incident" className="text-sm font-semibold text-slate-700 dark:text-slate-200">
          What happened (short)
        </label>
        <textarea
          id="incident"
          rows={4}
          value={incident}
          onChange={(event) => setIncident(event.target.value)}
          placeholder="Example: Kal maine bina soche harsh tone me reply kar diya..."
          className="input-soft mt-2 w-full"
        />

        <div className="mt-4 flex flex-wrap gap-3">
          <button type="button" className="soft-btn-primary" onClick={generateMessage}>
            Generate Respectful Sorry
          </button>
          <button
            type="button"
            className="soft-btn-secondary"
            onClick={copyMessage}
            disabled={!canAct}
          >
            Copy Message
          </button>
          <button
            type="button"
            className="soft-btn-secondary"
            onClick={shareOnWhatsApp}
            disabled={!canAct}
          >
            Share on WhatsApp
          </button>
        </div>

        <div className="mt-6 rounded-2xl border border-white/55 bg-white/68 p-4 text-sm leading-relaxed text-slate-700 dark:border-slate-500/35 dark:bg-slate-900/45 dark:text-slate-200">
          {generated ||
            'Generated message yahan show hoga. Tone: soft, respectful, no pressure.'}
        </div>

        <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
          No pressure, just respect.
        </p>
      </div>
    </SectionContainer>
  );
}
