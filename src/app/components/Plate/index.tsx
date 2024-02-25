"use client";

import React, { FC } from "react";
import cn from "classnames";

// import blackPawn from "@/app/images/black/black_pawn.png";
// import whitePawn from "@/app/images/white/white_pawn.png";
// import blackRook from "@/app/images/black/black_rook.png";
// import whiteRook from "@/app/images/white/white_rook.png";
// import blackKnight from "@/app/images/black/black_knight.png";
// import whiteKnight from "@/app/images/white/white_knight.png";
// import blackBishop from "@/app/images/black/black_bishop.png";
// import whiteBishop from "@/app/images/white/white_bishop.png";
// import blackQueen from "@/app/images/black/black_queen.png";
// import whiteQueen from "@/app/images/white/white_queen.png";
// import blackKing from "@/app/images/black/black_king.png";
// import whiteKing from "@/app/images/white/white_king.png";
// import Image from "next/image";
enum Pieces {
  BLACKPAWN = "black black__pawn",
  WHITEPAWN = "white white__pawn",
  BLACKROOK = "black black__rook",
  WHITEROOK = "white white__rook",
  BLACKNIGHT = "black black__knight",
  WHITEKNIGHT = "white white__knight",
  BLACKBISHOP = "black black__bishop",
  WHITEBISHOP = "white white__bishop",
  BLACKQUEEN = "black black__queen",
  WHITEQUEEN = "white white__queen",
  BLACKKING = "black black__king",
  WHITEKING = "white white__king",
}

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
    image = Pieces.BLACKPAWN;
  }

  if (indexY === 6) {
    image = Pieces.WHITEPAWN;
  }

  if (indexY === 0) {
    switch (indexX) {
      case 7:
      case 0:
        image = Pieces.BLACKROOK;
        break;
      case 6:
      case 1:
        image = Pieces.BLACKNIGHT;
        break;
      case 5:
      case 2:
        image = Pieces.BLACKBISHOP;
        break;
      case 3:
        image = Pieces.BLACKQUEEN;
        break;
      case 4:
        image = Pieces.BLACKKING;
        break;
      default:
        break;
    }
  }

  if (indexY === 7) {
    switch (indexX) {
      case 7:
      case 0:
        image = Pieces.WHITEROOK;
        break;
      case 6:
      case 1:
        image = Pieces.WHITEKNIGHT;
        break;
      case 5:
      case 2:
        image = Pieces.WHITEBISHOP;
        break;
      case 3:
        image = Pieces.WHITEQUEEN;
        break;
      case 4:
        image = Pieces.WHITEKING;
        break;
      default:
        break;
    }
  }

  const handleMouseDown = () => {
    console.log("clicked");
  };
  return (
    <div
      className={cn(
        "portrait:w-[12vw]",
        "portrait:h-[12vw]",
        "landscape:w-[12vh]",
        "landscape:h-[12vh]",
        "relative",
        (indexX + indexY) % 2 === 0 && "bg-green-800",
        (indexX + indexY) % 2 === 0 && "text-white"
      )}
    >
      <span className="absolute">{indexX === 0 && y}</span>
      <span className="absolute right-0 bottom-0">{indexY === 7 && x}</span>
      {image && (
        <div className={image}></div>
        // <Image
        //   onMouseDown={handleMouseDown}
        //   src={image}
        //   alt="piece"
        //   priority={true}
        //   style={{
        //     position: "absolute",
        //     top: "50%",
        //     left: "50%",
        //     transform: "translate(-50%, -50%)",
        //     cursor: "pointer",
        //   }}
        // />
      )}
    </div>
  );
};

export default Plate;
