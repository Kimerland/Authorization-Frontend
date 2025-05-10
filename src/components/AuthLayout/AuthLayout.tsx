import React, { ReactNode } from "react";
import BackgroundDecorations from "../Decorations/BackgroundDecorations ";
import { PageBlockWrapper } from "../PageBlockWrapper/PageBlockWrapper";

interface AuthProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthProps) {
  return (
    <div className="realative min-h-screen w-full overflow-hidden">
      <BackgroundDecorations />
      <PageBlockWrapper>{children}</PageBlockWrapper>
    </div>
  );
}
