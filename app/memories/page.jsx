'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import SectionContainer from '@/components/SectionContainer';

const memories = [
  { src: '/memories/memory-01.svg', caption: 'Random laugh moments, best vibe.' },
  { src: '/memories/memory-02.svg', caption: 'Choti baat pe bhi deep talks.' },
  { src: '/memories/memory-03.svg', caption: 'Tu hasi to pura day better ho gaya.' },
  { src: '/memories/memory-04.svg', caption: 'Silent support, bina bole samajh jana.' },
  { src: '/memories/memory-05.svg', caption: 'Hamari inside jokes, always iconic.' },
  { src: '/memories/memory-06.svg', caption: 'Normal day bhi special lagta tha.' },
  { src: '/memories/memory-07.svg', caption: 'Teri calm energy ka alag hi effect hai.' },
  { src: '/memories/memory-08.svg', caption: 'Unplanned moments, pure and real.' },
  { src: '/memories/memory-09.svg', caption: 'Ek photo, hazaar yaadein.' },
  { src: '/memories/memory-10.svg', caption: 'Trust wali dosti, no filters.' },
  { src: '/memories/memory-11.svg', caption: 'Little moments that mattered most.' },
  { src: '/memories/memory-12.svg', caption: 'Best friend memory bank: priceless.' }
];

export default function MemoriesPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setActiveIndex(null);
      if (event.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev + 1) % memories.length);
      }
      if (event.key === 'ArrowLeft') {
        setActiveIndex((prev) => (prev - 1 + memories.length) % memories.length);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex]);

  const currentItem = activeIndex !== null ? memories[activeIndex] : null;

  return (
    <SectionContainer
      id="memories"
      title="Our Memories"
      subtitle="Yahan placeholder images hain, tum apni real photos `public/memories` me replace kar sakte ho."
      className="pb-16"
    >
      <div className="mb-6 flex justify-start">
        <Link href="/#hero" className="soft-btn-secondary">
          Back to Apology
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {memories.map((memory, index) => (
          <motion.button
            key={memory.src}
            type="button"
            className="glass group overflow-hidden rounded-2xl text-left"
            onClick={() => setActiveIndex(index)}
            whileHover={{ y: -4 }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.02 }}
          >
            <Image
              src={memory.src}
              alt={memory.caption}
              width={700}
              height={520}
              className="h-36 w-full object-cover transition duration-500 group-hover:scale-105 md:h-44"
            />
            <p className="px-3 py-2 text-xs leading-relaxed text-slate-700 dark:text-slate-200 md:text-sm">
              {memory.caption}
            </p>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {currentItem ? (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/75 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
          >
            <motion.div
              className="relative w-full max-w-3xl rounded-3xl border border-white/20 bg-slate-900/90 p-4 text-white"
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="absolute right-3 top-3 rounded-full border border-white/35 bg-white/15 px-3 py-1 text-sm"
                onClick={() => setActiveIndex(null)}
              >
                Close
              </button>

              <Image
                src={currentItem.src}
                alt={currentItem.caption}
                width={1200}
                height={900}
                className="h-auto w-full rounded-2xl object-cover"
              />

              <p className="mt-3 text-sm text-slate-100">{currentItem.caption}</p>

              <div className="mt-4 flex gap-2">
                <button
                  type="button"
                  className="soft-btn-secondary bg-white/10 text-white hover:bg-white/20"
                  onClick={() =>
                    setActiveIndex((prev) => (prev - 1 + memories.length) % memories.length)
                  }
                >
                  Prev
                </button>
                <button
                  type="button"
                  className="soft-btn-secondary bg-white/10 text-white hover:bg-white/20"
                  onClick={() => setActiveIndex((prev) => (prev + 1) % memories.length)}
                >
                  Next
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </SectionContainer>
  );
}
