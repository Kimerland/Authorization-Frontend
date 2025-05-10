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
    <div
      className="page-block-wrapper"
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        ...style,
      }}
    >
      <div className="page-block-wrapper-black">
        <div className="page-block-container-glass">{children}</div>
      </div>
    </div>
  );
};
