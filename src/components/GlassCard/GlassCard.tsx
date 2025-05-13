import React, { ReactNode } from "react";
import "./GlassCard.css";

export const GlassCard: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="glass-card">{children}</div>;
};
