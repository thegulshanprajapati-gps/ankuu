'use client';

import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Main calmly sununga',
    detail: 'Interrupt ki jagah pehle samajhne ki habit build karunga.'
  },
  {
    title: 'No repeating mistakes',
    detail: 'Jo issue hua hai uska practical fix follow karunga.'
  },
  {
    title: 'Space + respect',
    detail: 'Teri boundaries ko bina debate ke respect karunga.'
  },
  {
    title: 'Better communication',
    detail: 'Confusion aate hi direct aur polite baat karunga.'
  },
  {
    title: 'No ego, only clarity',
    detail: 'Point prove nahi, relation safe rakhna priority hogi.'
  },
  {
    title: 'Small efforts daily',
    detail: 'Consistency se trust rebuild karna mera focus rahega.'
  }
];

export default function PromiseCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card, index) => (
        <motion.article
          key={card.title}
          className="glass relative rounded-2xl p-5"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.35, delay: index * 0.04 }}
          whileHover={{ y: -4, scale: 1.01 }}
        >
          <span className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-200/80 text-[11px] font-bold text-slate-800 dark:bg-amber-300/85 dark:text-slate-900">
            {'\u2713'}
          </span>
          <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100">
            {card.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {card.detail}
          </p>
        </motion.article>
      ))}
    </div>
  );
}