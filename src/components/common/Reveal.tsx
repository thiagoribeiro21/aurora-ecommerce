// Revela o conteúdo com um fade + leve slide quando entra no viewport.

import type { CSSProperties, PropsWithChildren } from 'react';
import { useInView } from 'react-intersection-observer';

export type RevealProps = {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  delay?: number; // ms
  style?: CSSProperties;
};

export function Reveal({
  children,
  threshold = 0.2,
  rootMargin = '0px 0px -10% 0px',
  once = true,
  delay = 0,
  style,
}: PropsWithChildren<RevealProps>) {
  const { ref, inView } = useInView({
    threshold,
    rootMargin,
    triggerOnce: once,
  });

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(12px)',
        transition: `opacity .5s ease ${delay}ms, transform .5s ease ${delay}ms`,
        // dica pro browser: essas props vão animar
        willChange: 'opacity, transform',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
