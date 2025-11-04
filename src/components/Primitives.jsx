import { motion } from 'framer-motion';

export function Button({ children, href = '#', variant = 'primary', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-indigo-500/30';
  const styles = {
    primary: 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 active:bg-indigo-700',
    outline: 'border border-gray-300 text-gray-900 hover:bg-white/60',
    ghost: 'text-gray-900 border border-gray-200 hover:bg-white',
  };
  return (
    <a href={href} className={`${base} ${styles[variant] || styles.primary} ${className}`} {...props}>
      {children}
    </a>
  );
}

export function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`relative ${className}`}>
      {children}
    </section>
  );
}

export const fadeIn = {
  hidden: { opacity: 0, y: 16, filter: 'blur(4px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
