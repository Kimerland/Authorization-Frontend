import React from "react";
import "./BackgroundDecorations.css";
import { decorations } from "./config";
import Image from "next/image";

const BackgroundDecorations = () => {
  return (
    <div className="background__decorations__wrapper">
      {decorations.map((item, index) => (
        <Image
          key={index}
          src={item.src}
          className={`background__decorations__container ${item.className}`}
          width={item.width}
          height={item.height}
          alt={item.alt}
        />
      ))}
    </div>
  );
};

export default BackgroundDecorations;
