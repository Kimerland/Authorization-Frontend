import Image from "next/image";
import React from "react";

const BackgroundDecorations = () => {
  return (
    <>
      <Image
        src={"/obstacle_1.svg"}
        className="obstacle_1"
        width={264}
        height={264}
        alt="obstacle_down"
      />
      <Image
        src={"/obstacle_2.svg"}
        className="obstacle_2"
        width={193}
        height={193}
        alt="obstacle_hight"
      />
      <Image
        src={"/wave_1.svg"}
        className="wave_1"
        width={193}
        height={193}
        alt="wave_1"
      />
      <Image
        src={"/wave_2.svg"}
        className="wave_2"
        width={193}
        height={193}
        alt="wave_2"
      />
    </>
  );
};

export default BackgroundDecorations;
