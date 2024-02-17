import React, { FC } from "react";
import cn from "classnames";

import blackPawn from "@/app/images/black/black_pawn.png";
import whitePawn from "@/app/images/white/white_pawn.png";
import Image from "next/image";

type Props = {
  coords: {
    x: string;
    y: string;
  };
  indexX: number;
  indexY: number;
};

const Plate: FC<Props> = ({ coords: { x, y }, indexX, indexY }) => {
  return (
    <div
      key={indexX.toString()}
      className={cn(
        "w-[4vw]",
        "h-[4vw]",
        "relative",
        (indexX + indexY) % 2 === 0 && "bg-green-800",
        (indexX + indexY) % 2 === 0 && "text-white"
      )}
    >
      <span>{indexX === 0 && y}</span>
      <span className="absolute right-0 bottom-0">{indexY === 7 && x}</span>
      {+y > 6 && (
        <Image
          src={whitePawn}
          alt="piece"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
      {+y < 3 && (
        <Image
          src={blackPawn}
          alt="piece"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
    </div>
  );
};

export default Plate;
