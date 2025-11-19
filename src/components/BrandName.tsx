import { cn } from "@/lib/utils";
import { CSSProperties } from "react";

interface BrandNameProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "gradient" | "accent";
  inline?: boolean;
  style?: CSSProperties;
}

export const BrandName = ({ 
  className, 
  size = "md",
  variant = "default",
  inline = false,
  style
}: BrandNameProps) => {
  const sizeClasses = {
    sm: "text-base md:text-lg",
    md: "text-xl md:text-2xl",
    lg: "text-2xl md:text-3xl",
    xl: "text-3xl md:text-4xl"
  };

  const variantClasses = {
    default: "text-foreground",
    gradient: "bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent",
    accent: "text-primary"
  };

  const baseClasses = inline 
    ? "font-bold uppercase"
    : "font-extrabold uppercase tracking-wider";

  return (
    <span 
      className={cn(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      style={{ 
        fontFamily: 'Orbitron, sans-serif',
        ...style
      }}
    >
      EDIGHT
    </span>
  );
};
