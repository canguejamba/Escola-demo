import { MouseEventHandler, ReactNode } from "react";
import clsx from "clsx";

type CTAButtonVariant = "primary" | "secondary";

export interface CTAButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: CTAButtonVariant;
  className?: string;
}

const baseClasses =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

const variantClasses: Record<CTAButtonVariant, string> = {
  primary: "bg-brand text-white hover:bg-brand-light focus-visible:ring-brand-light",
  secondary: "bg-white text-brand border border-brand hover:bg-brand/10 focus-visible:ring-brand"
};

export function CTAButton({ children, onClick, variant = "primary", className }: CTAButtonProps) {
  return (
    <button type="button" onClick={onClick} className={clsx(baseClasses, variantClasses[variant], className)}>
      {children}
    </button>
  );
}

export default CTAButton;
