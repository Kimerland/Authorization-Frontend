import React from "react";
import BackgroundDecorations from "../Decorations/BackgroundDecorations ";
import { PageBlockWrapper } from "../PageBlockWrapper/PageBlockWrapper";

interface AuthProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthProps) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden z-0">
      <BackgroundDecorations />
      <PageBlockWrapper>{children}</PageBlockWrapper>
    </div>
  );
}
