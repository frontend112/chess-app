"use client";

import React, { FC } from "react";
import cn from "classnames";

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
  let currentPiece = null;

  if (indexY === 1) {
    currentPiece = Pieces.BLACKPAWN;
  }

  if (indexY === 6) {
    currentPiece = Pieces.WHITEPAWN;
  }

  if (indexY === 0) {
    switch (indexX) {
      case 7:
      case 0:
        currentPiece = Pieces.BLACKROOK;
        break;
      case 6:
      case 1:
        currentPiece = Pieces.BLACKNIGHT;
        break;
      case 5:
      case 2:
        currentPiece = Pieces.BLACKBISHOP;
        break;
      case 3:
        currentPiece = Pieces.BLACKQUEEN;
        break;
      case 4:
        currentPiece = Pieces.BLACKKING;
        break;
      default:
        break;
    }
  }

  if (indexY === 7) {
    switch (indexX) {
      case 7:
      case 0:
        currentPiece = Pieces.WHITEROOK;
        break;
      case 6:
      case 1:
        currentPiece = Pieces.WHITEKNIGHT;
        break;
      case 5:
      case 2:
        currentPiece = Pieces.WHITEBISHOP;
        break;
      case 3:
        currentPiece = Pieces.WHITEQUEEN;
        break;
      case 4:
        currentPiece = Pieces.WHITEKING;
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
        "portrait:text-[2vw]",
        "landscape:w-[12vh]",
        "landscape:h-[12vh]",
        "landscape:text-[2vh]",
        "relative",
        (indexX + indexY) % 2 === 0 && "bg-green-800",
        (indexX + indexY) % 2 === 0 && "text-white"
      )}
      onMouseDown={handleMouseDown}
    >
      <span className="absolute left-0.5 top-0.5">{indexX === 0 && y}</span>
      <span className="absolute right-0.5 bottom-0.5">{indexY === 7 && x}</span>
      {currentPiece && <div className={currentPiece}></div>}
    </div>
  );
};

export default Plate;
