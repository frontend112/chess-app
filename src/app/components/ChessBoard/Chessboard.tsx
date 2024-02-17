import cn from "classnames";
import blackBishop from "@/app/images/black/black_bishop.png";
import whiteBishop from "@/app/images/white/white_bishop.png";
import Image from "next/image";
import Plate from "../Plate/Plate";
const axisX: string[] = ["A", "B", "C", "D", "E", "F", "G", "H"];
const axisY: string[] = [];
for (let i = 8; i > 0; i--) {
  axisY.push(i.toString());
}
const startingPositions = {
  black: {
    pawn: [
      { x: "A", y: 7 },
      { x: "B", y: 7 },
      { x: "C", y: 7 },
      { x: "D", y: 7 },
      { x: "E", y: 7 },
      { x: "F", y: 7 },
      { x: "G", y: 7 },
      { x: "H", y: 7 },
    ],
    rock: [
      { x: "A", y: 8 },
      { x: "H", y: 8 },
    ],
    horse: [
      { x: "B", y: 8 },
      { x: "G", y: 8 },
    ],
    bishop: [
      { x: "C", y: 8 },
      { x: "F", y: 8 },
    ],
    queen: [{ x: "D", y: 8 }],
    king: [{ x: "E", y: 8 }],
  },
  white: {
    pawn: [
      { x: "A", y: 2 },
      { x: "B", y: 2 },
      { x: "C", y: 2 },
      { x: "D", y: 2 },
      { x: "E", y: 2 },
      { x: "F", y: 2 },
      { x: "G", y: 2 },
      { x: "H", y: 2 },
    ],
    rock: [
      { x: "A", y: 1 },
      { x: "H", y: 1 },
    ],
    horse: [
      { x: "B", y: 1 },
      { x: "G", y: 1 },
    ],
    bishop: [
      { x: "C", y: 8 },
      { x: "F", y: 8 },
    ],
    queen: [{ x: "D", y: 8 }],
    king: [{ x: "E", y: 8 }],
  },
};

const Chessboard = () => {
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center">
      {axisY.map((y, indexY) => (
        <div key={y.toString()} className="flex max-w-[50vw] text-green-800">
          {axisX.map((x, indexX) => (
            <Plate coords={{ x, y }} indexX={indexX} indexY={indexY} />
          ))}
        </div>
      ))}
    </main>
  );
};

export default Chessboard;
