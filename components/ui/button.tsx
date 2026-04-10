import * as React from "react";

export function Button({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`px-4 py-2 rounded-xl font-medium transition bg-cyan-400 text-black hover:bg-cyan-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
