'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FaCommentDots, FaHeart, FaSmileBeam, FaStar } from 'react-icons/fa';

const baseIcons = [
  { Icon: FaHeart, position: 'left-[6%] top-[24%]', delay: 0 },
  { Icon: FaStar, position: 'left-[14%] bottom-[18%]', delay: 0.5 },
  { Icon: FaSmileBeam, position: 'right-[12%] top-[22%]', delay: 0.9 },
  { Icon: FaCommentDots, position: 'right-[7%] bottom-[24%]', delay: 1.3 },
  { Icon: FaHeart, position: 'left-[45%] top-[14%]', delay: 1.7 }
];

const lightPalette = [
  'text-rose-500/55',
  'text-red-400/50',
  'text-pink-400/55',
  'text-rose-400/52',
  'text-fuchsia-400/45'
];

const darkPalette = [
  'text-rose-300/65',
  'text-amber-300/55',
  'text-cyan-200/55',
  'text-pink-200/50',
  'text-violet-200/45'
];

export default function FloatingFriendIcons() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';
  const palette = isDark ? darkPalette : lightPalette;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {baseIcons.map((item, idx) => (
        <motion.div
          key={`${item.position}-${idx}`}
          className={`absolute ${item.position} ${palette[idx % palette.length]}`}
          initial={{ y: 0, opacity: isDark ? 0.15 : 0.18 }}
          animate={{
            y: [-6, -24, -10],
            opacity: isDark ? [0.2, 0.6, 0.28] : [0.24, 0.68, 0.34]
          }}
          transition={{
            duration: 7 + idx,
            delay: item.delay,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'mirror'
          }}
        >
          <item.Icon className="h-8 w-8 drop-shadow-[0_8px_18px_rgba(0,0,0,0.42)] md:h-10 md:w-10" />
        </motion.div>
      ))}
    </div>
  );
}
