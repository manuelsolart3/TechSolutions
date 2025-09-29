import { ArrowRight } from 'lucide-react';

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  icon = false,
  className = '',
  onClick,
  ...props 
}) {
  const baseStyles = 'font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-lime-500 hover:bg-lime-600 text-black shadow-lg shadow-lime-500/20 hover:scale-105 hover:shadow-lime-500/40',
    secondary: 'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-lime-500/50',
    outline: 'border-2 border-lime-500 text-lime-500 hover:bg-lime-500 hover:text-black',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className} group`}
      onClick={onClick}
      {...props}
    >
      {children}
      {icon && (
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      )}
    </button>
  );
}