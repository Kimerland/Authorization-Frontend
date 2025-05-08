import React, { CSSProperties, FC, ReactNode } from "react";
import "./PageBlockWrapper.css";

interface IPageWrapper {
  children: ReactNode;
  style?: CSSProperties;
  backgroundImage?: string;
}

export const PageBlockWrapper: FC<IPageWrapper> = ({
  children,
  style,
  backgroundImage,
}) => {
  return (
    <div className="full-width" style={{ backgroundImage, ...style }}></div>
  );
};
