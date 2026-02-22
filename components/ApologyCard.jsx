'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import TypewriterText from '@/components/TypewriterText';

const introLines = [
  'Ankuu, sabse pehle seedha sorry.',
  'Meri galti thi, aur main uski puri responsibility leta hoon.'
];

const promiseBullets = [
  'Main react karne se pehle calmly sununga.',
  'Agar kuch unclear hoga to seedha respectfully bolunga.',
  'Same mistake repeat na ho, uske liye conscious effort daily dunga.',
  'Space aur boundaries ko bina question kiye respect karunga.',
  'Ego side pe rakhkar clarity choose karunga.'
];

export default function ApologyCard() {
  const [showLetter, setShowLetter] = useState(false);

  return (
    <div className="glass rounded-3xl p-6 md:p-8">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">
        Heartfelt & Honest
      </p>
      <TypewriterText lines={introLines} onComplete={() => setShowLetter(true)} />

      <AnimatePresence>
        {showLetter ? (
          <motion.div
            className="mt-6 space-y-5 text-sm leading-relaxed text-slate-700 md:text-base dark:text-slate-200"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.45 }}
          >
            <p>
              Ankuu, jo bhi hurt hua hai uske liye main genuinely sorry hoon. Main
              kisi excuse ke peeche nahi chhupna chahta. Tu jo feel kar rahi hai,
              woh valid hai, and I respect that.
            </p>

            <p>
              Tu meri best friend hai, aur mere words/actions ne agar trust ya peace
              disturb kiya, then that is on me. Main yeh prove karna chahta hoon
              actions se, sirf words se nahi.
            </p>

            <div>
              <p className="mb-3 font-semibold text-slate-800 dark:text-slate-100">
                Yeh meri clear commitments hain:
              </p>
              <ul className="space-y-2">
                {promiseBullets.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-700 dark:bg-slate-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p>
              Reply ka koi pressure nahi hai. Bas itna chahunga ki jab tu ready ho,
              ek baar baat kar lein respectfully.
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
