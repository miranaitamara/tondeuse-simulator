import { Mower } from "../types";

const DIRECTIONS: Array<Mower["orientation"]> = ["N", "E", "S", "W"];

export const processMowerInstructions = (fileContent: string) => {
  const lines = fileContent
    .trim()
    .split("\n")
    .map((line) => line.trim());

  if (lines.length < 3) {
    console.error("Format du fichier incorrect");
    return [];
  }

  const [maxX, maxY] = lines[0].split("").map(Number);

  const results: string[] = [];

  for (let i = 1; i < lines.length; i += 2) {
    const position = lines[i].match(/^(\d)(\d)\s([NESW])$/);

    if (!position) {
      console.error(`Format incorrect à la ligne ${i + 1}: ${lines[i]}`);
      continue;
    }

    const x = parseInt(position[1], 10);
    const y = parseInt(position[2], 10);
    let orientation = position[3] as Mower["orientation"];

    const instructions = lines[i + 1].trim();
    const mower = executeInstructions(
      { x, y, orientation },
      instructions,
      maxX,
      maxY
    );

    results.push(
      `Tondeuse ${Math.floor(i / 2) + 1} : [${mower.x}, ${
        mower.y
      }] et orientation ${mower.orientation}`
    );
  }

  return results;
};

const executeInstructions = (
  mower: Mower,
  instructions: string,
  maxX: number,
  maxY: number
): Mower => {
  let { x, y, orientation } = mower;

  for (const instr of instructions) {
    switch (instr) {
      case "L":
        orientation = DIRECTIONS[(DIRECTIONS.indexOf(orientation) + 3) % 4];
        break;
      case "R":
        orientation = DIRECTIONS[(DIRECTIONS.indexOf(orientation) + 1) % 4];
        break;
      case "F":
        const [newX, newY] = moveForward(x, y, orientation);
        if (newX >= 0 && newX <= maxX && newY >= 0 && newY <= maxY) {
          x = newX;
          y = newY;
        }
        break;
      default:
        console.warn(`Instruction inconnue: ${instr}`);
    }
  }
  return { x, y, orientation };
};

const moveForward = (
  x: number,
  y: number,
  orientation: Mower["orientation"]
): [number, number] => {
  switch (orientation) {
    case "N":
      return [x, y + 1];
    case "E":
      return [x + 1, y];
    case "S":
      return [x, y - 1];
    case "W":
      return [x - 1, y];
    default:
      return [x, y];
  }
};
