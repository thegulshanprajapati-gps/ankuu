'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import toast from 'react-hot-toast';
import ApologyCard from '@/components/ApologyCard';
import Checklist from '@/components/Checklist';
import ConfettiBurst from '@/components/ConfettiBurst';
import PromiseCards from '@/components/PromiseCards';
import SectionContainer from '@/components/SectionContainer';

export default function HomePage() {
  const [forgiveState, setForgiveState] = useState('');
  const [confettiKey, setConfettiKey] = useState(0);

  const getShareUrl = () => (typeof window !== 'undefined' ? window.location.href : '');

  const handleForgive = () => {
    setForgiveState('forgive');
    setConfettiKey((prev) => prev + 1);
  };

  const handleStillUpset = () => {
    setForgiveState('upset');
  };

  const handleShare = () => {
    const text = `Ankuu, yeh website maine sirf respect se banayi hai: ${getShareUrl()}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(getShareUrl());
      toast.success('Link copied.');
    } catch (error) {
      toast.error('Copy nahi hua, please manually copy karo.');
    }
  };

  return (
    <>
      <SectionContainer id="hero" className="pt-10 md:pt-14">
        <motion.div
          className="glass relative overflow-hidden rounded-3xl p-6 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-bl-[40px] bg-gradient-to-br from-amber-200/50 via-rose-200/20 to-transparent dark:from-amber-300/12 dark:via-rose-200/0" />

          <p className="mb-3 inline-flex rounded-full border border-white/60 bg-white/72 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 dark:border-slate-400/35 dark:bg-slate-900/40 dark:text-slate-200">
            A Sincere Note
          </p>

          <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-5xl dark:text-slate-100">
            Ankuu, I'm really sorry.
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-lg dark:text-slate-300">
            Mere liye tu genuinely important hai. Yeh page koi drama nahi hai,
            bas ek clean, honest apology hai.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="hero-chip">No excuses</span>
            <span className="hero-chip">No blame</span>
            <span className="hero-chip">No pressure</span>
            <span className="hero-chip">Only respect</span>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#apology" className="soft-btn-primary">
              Read My Apology
            </a>
            <Link href="/memories" className="soft-btn-secondary">
              Go to Memories
            </Link>
          </div>
        </motion.div>
      </SectionContainer>

      <SectionContainer
        id="apology"
        title="My Apology Letter"
        subtitle="No excuses. No blame-shift. Sirf accountability aur respect."
      >
        <ApologyCard />
      </SectionContainer>

      <SectionContainer
        id="promises"
        title="What I Promise"
        subtitle="Yeh lines sirf bolne ke liye nahi, daily practice ke liye hain."
      >
        <PromiseCards />
      </SectionContainer>

      <SectionContainer
        id="why-you-matter"
        title="Why You Matter"
        subtitle="Best-friend wali value words se zyada actions me dikhni chahiye."
      >
        <Checklist />
      </SectionContainer>

      <SectionContainer
        id="forgive"
        title="Forgive Me?"
        subtitle="Tumhari marzi first. Jo feel kar rahi ho, woh fully valid hai."
        className="pb-16"
      >
        <div className="glass rounded-3xl p-6 md:p-8">
          <ConfettiBurst fireKey={confettiKey} />

          <div className="flex flex-wrap gap-3">
            <button type="button" className="soft-btn-primary" onClick={handleForgive}>
              Okay, I forgive you
            </button>
            <button
              type="button"
              className="soft-btn-secondary"
              onClick={handleStillUpset}
            >
              Still upset
            </button>
          </div>

          <div className="mt-5 min-h-10">
            {forgiveState === 'upset' ? (
              <p className="text-sm text-slate-700 dark:text-slate-200">
                It's okay Ankuu, take your time. I'll wait respectfully.
              </p>
            ) : null}
            {forgiveState === 'forgive' ? (
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                Thank you Ankuu {'\u2764\uFE0F'}
              </p>
            ) : null}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button type="button" className="soft-btn-secondary" onClick={handleShare}>
              Share on WhatsApp
            </button>
            <button type="button" className="soft-btn-secondary" onClick={handleCopyLink}>
              Copy Link
            </button>
            <Link href="/message" className="soft-btn-secondary">
              Open Message Tool
            </Link>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
