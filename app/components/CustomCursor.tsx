'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Determine if it's a touch device, if so we don't need a custom cursor
    if (window.matchMedia('(pointer: coarse)').matches) return;
    
    setIsReady(true);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  if (!isReady) return null;

  return (
    <>
      {/* Small dot exactly at the cursor */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0 }}
        style={{ backgroundColor: 'var(--green-accent)' }}
      />
      
      {/* Outer ring tracking slightly delayed */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border pointer-events-none z-[9998] mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 20, mass: 0.5 }}
        style={{ borderColor: 'var(--green-accent)' }}
      />
      
      {/* Outer faint ring tracking very delayed */}
      <motion.div
        className="fixed top-0 left-0 w-20 h-20 rounded-full border pointer-events-none z-[9997]"
        animate={{
          x: mousePosition.x - 40,
          y: mousePosition.y - 40,
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 25, mass: 1 }}
        style={{ borderColor: 'rgba(0, 230, 118, 0.15)' }}
      />
    </>
  );
}
