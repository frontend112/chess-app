import React, { FC } from "react";
import cn from "classnames";

import blackPawn from "@/app/images/black/black_pawn.png";
import whitePawn from "@/app/images/white/white_pawn.png";
import blackRook from "@/app/images/black/black_rook.png";
import whiteRook from "@/app/images/white/white_rook.png";
import blackKnight from "@/app/images/black/black_knight.png";
import whiteKnight from "@/app/images/white/white_knight.png";
import blackBishop from "@/app/images/black/black_bishop.png";
import whiteBishop from "@/app/images/white/white_bishop.png";
import blackQueen from "@/app/images/black/black_queen.png";
import whiteQueen from "@/app/images/white/white_queen.png";
import blackKing from "@/app/images/black/black_king.png";
import whiteKing from "@/app/images/white/white_king.png";
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
  let image = null;

  if (indexY === 1) {
    image = blackPawn;
  }

  if (indexY === 6) {
    image = whitePawn;
  }

  if (indexY === 0) {
    switch (indexX) {
      case 7:
      case 0:
        image = blackRook;
        break;
      case 6:
      case 1:
        image = blackKnight;
        break;
      case 5:
      case 2:
        image = blackBishop;
        break;
      case 3:
        image = blackQueen;
        break;
      case 4:
        image = blackKing;
        break;
      default:
        break;
    }
  }

  if (indexY === 7) {
    switch (indexX) {
      case 7:
      case 0:
        image = whiteRook;
        break;
      case 6:
      case 1:
        image = whiteKnight;
        break;
      case 5:
      case 2:
        image = whiteBishop;
        break;
      case 3:
        image = whiteQueen;
        break;
      case 4:
        image = whiteKing;
        break;
      default:
        break;
    }
  }
  return (
    <div
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
      {image && (
        <Image
          src={image}
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
