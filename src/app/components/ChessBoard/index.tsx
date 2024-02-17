import Plate from "../Plate";
const axisX: string[] = ["A", "B", "C", "D", "E", "F", "G", "H"];
const axisY: string[] = [];
for (let i = 8; i > 0; i--) {
  axisY.push(i.toString());
}

const Chessboard = () => {
  return (
    <>
      {axisY.map((y, indexY) => (
        <div key={y.toString()} className="flex max-w-[50vw] text-green-800">
          {axisX.map((x, indexX) => (
            <Plate
              coords={{ x, y }}
              indexX={indexX}
              indexY={indexY}
              key={`${x}-${y}`}
            />
          ))}
        </div>
      ))}
    </>
  );
};

export default Chessboard;
