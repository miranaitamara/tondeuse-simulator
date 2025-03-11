import { processMowerInstructions } from "./MowerSimulator";

describe("processMowerInstructions", () => {
  it("should return correct result for multiple mower instructions", () => {
    const input = `
      55
      44 S
      LFRRFFLFRFF
      22 N
      FFRLLRFRLF
    `;
    const expectedOutput = [
      "Tondeuse 1 : [1, 3] et orientation W",
      "Tondeuse 2 : [2, 5] et orientation N",
    ];
    const result = processMowerInstructions(input);
    expect(result).toEqual(expectedOutput);
  });

  it("should return an empty array if the first line is not in the correct format", () => {
    const input = `
      55
      44
      LFRRFFLFRFF
      22 N
      FFRLLRFRLF
    `;
    const result = processMowerInstructions(input);
    expect(result).toEqual(["Tondeuse 2 : [2, 5] et orientation N"]);
  });

  it("should handle the case where mower instructions are not well formatted", () => {
    const input = `
      55
      44 Z
      LFRRFFLFRFF
    `;
    const result = processMowerInstructions(input);
    expect(result).toEqual([]);
  });

  it("should handle maximum grid size and boundaries correctly", () => {
    const input = `
      100 100
      00 00 N
      FFFFFFFF
      100 100 E
      FFFFFFFF
    `;
    const result = processMowerInstructions(input);
    expect(result).toEqual([]);
  });

  it("should ignore unknown instructions and not affect mower positions", () => {
    const input = `
      55
      44 N
      LFRXFFLFRFF
    `;
    const expectedOutput = ["Tondeuse 1 : [2, 5] et orientation N"];
    const result = processMowerInstructions(input);
    expect(result).toEqual(expectedOutput);
  });

  it("should handle empty array", () => {
    const input = `
      3 3
      0 0 N
      FFF
      1 1 E
      RFF
    `;
    const result = processMowerInstructions(input);
    expect(result).toEqual([]);
  });
});
