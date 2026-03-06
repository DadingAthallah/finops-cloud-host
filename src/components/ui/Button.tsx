import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

export const Button = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}: HTMLMotionProps<"button"> & {
  variant?: 'primary' | 'outline' | 'ghost';
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium text-sm transition-colors duration-200 rounded-full px-5 py-2.5 backdrop-blur-sm tracking-tight';
  
  const variants = {
    primary: 'bg-white text-black hover:bg-slate-200 shadow-[0_0_15px_rgba(255,255,255,0.1)]',
    outline: 'border border-white/10 hover:bg-white/5 text-white',
    ghost: 'hover:bg-white/5 text-slate-400 hover:text-white',
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};
