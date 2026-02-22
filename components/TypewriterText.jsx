'use client';

import { useEffect, useRef, useState } from 'react';

export default function TypewriterText({
  lines,
  speed = 34,
  pause = 700,
  onComplete
}) {
  const [rendered, setRendered] = useState(() => lines.map(() => ''));
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const hasCompleted = useRef(false);

  useEffect(() => {
    setRendered(lines.map(() => ''));
    setLineIndex(0);
    setCharIndex(0);
    hasCompleted.current = false;
  }, [lines]);

  useEffect(() => {
    if (lineIndex >= lines.length) {
      if (!hasCompleted.current) {
        hasCompleted.current = true;
        onComplete?.();
      }
      return;
    }

    const currentLine = lines[lineIndex] || '';

    if (charIndex < currentLine.length) {
      const timer = setTimeout(() => {
        setRendered((prev) => {
          const next = [...prev];
          next[lineIndex] = currentLine.slice(0, charIndex + 1);
          return next;
        });
        setCharIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    }

    const nextLineTimer = setTimeout(() => {
      setLineIndex((prev) => prev + 1);
      setCharIndex(0);
    }, pause);

    return () => clearTimeout(nextLineTimer);
  }, [charIndex, lineIndex, lines, onComplete, pause, speed]);

  return (
    <div className="space-y-2 text-sm leading-relaxed text-slate-700 md:text-base dark:text-slate-200">
      {lines.map((_, idx) => {
        const active = idx === lineIndex && lineIndex < lines.length;
        return (
          <p key={`line-${idx}`}>
            {rendered[idx]}
            {active ? <span className="animate-pulse">|</span> : null}
          </p>
        );
      })}
    </div>
  );
}