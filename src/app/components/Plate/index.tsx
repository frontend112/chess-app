"use client";

import React, { FC, MouseEventHandler, useRef } from "react";
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
  BLANK = "",
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
  console.log(x, y);
  let currentPieceImage: Pieces = Pieces.BLANK;

  const currentPieceRef = useRef<HTMLDivElement>(null);

  if (indexY === 1) {
    currentPieceImage = Pieces.BLACKPAWN;
  }

  if (indexY === 6) {
    currentPieceImage = Pieces.WHITEPAWN;
  }

  if (indexY === 0) {
    switch (indexX) {
      case 7:
      case 0:
        currentPieceImage = Pieces.BLACKROOK;
        break;
      case 6:
      case 1:
        currentPieceImage = Pieces.BLACKNIGHT;
        break;
      case 5:
      case 2:
        currentPieceImage = Pieces.BLACKBISHOP;
        break;
      case 3:
        currentPieceImage = Pieces.BLACKQUEEN;
        break;
      case 4:
        currentPieceImage = Pieces.BLACKKING;
        break;
      default:
        break;
    }
  }

  if (indexY === 7) {
    switch (indexX) {
      case 7:
      case 0:
        currentPieceImage = Pieces.WHITEROOK;
        break;
      case 6:
      case 1:
        currentPieceImage = Pieces.WHITEKNIGHT;
        break;
      case 5:
      case 2:
        currentPieceImage = Pieces.WHITEBISHOP;
        break;
      case 3:
        currentPieceImage = Pieces.WHITEQUEEN;
        break;
      case 4:
        currentPieceImage = Pieces.WHITEKING;
        break;
      default:
        break;
    }
  }

  const handleMouseDown = () => {
    window.addEventListener("mousemove", (e) => {
      if (currentPieceRef.current?.style) {
        const currentelStyle = currentPieceRef.current.style;
        const innerW = window.innerWidth;
        const innerH = window.innerHeight;
        currentelStyle.position = "absolute";

        if (innerW > innerH) {
          currentelStyle.width = `${innerW / 15}px`;
          currentelStyle.height = `${innerW / 15}px`;
          currentelStyle.top = `${e.clientY - innerW / 30}px`;
          currentelStyle.left = `${e.clientX - innerW / 30}px`;
        } else {
          currentelStyle.width = `${innerH / 15}px`;
          currentelStyle.height = `${innerH / 15}px`;
          currentelStyle.top = `${e.clientY - innerH / 30}px`;
          currentelStyle.left = `${e.clientX - innerH / 30}px`;
        }
      }
    });
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
        "flex",
        "plate",
        (indexX + indexY) % 2 === 0 && "bg-green-800",
        (indexX + indexY) % 2 === 0 && "text-white"
      )}
    >
      {indexX === 0 && (
        <span
          className={`plate__index-number plate__index-number--${y} relative`}
        ></span>
      )}
      {currentPieceImage && (
        <div
          className={`cursor-pointer w-full h-full justify-center items-center relative ${currentPieceImage}`}
          ref={currentPieceRef}
          onMouseDown={handleMouseDown}
        ></div>
      )}
      {indexY === 7 && (
        <span
          className={`plate__index-letter plate__index-letter--${x} relative`}
        ></span>
      )}
    </div>
  );
};

export default Plate;
