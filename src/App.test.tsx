import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import TondeuseSimulator from "./TondeuseSimulator";

describe("TondeuseSimulator", () => {
  it("processes the simulation with predefined input", async () => {
    render(<TondeuseSimulator />);

    const predefinedFileContent = `55
44 S
LFRRFFLFRFF
22 N
FFRLLRFRLF`;

    const fileInput = screen.getByLabelText("Choisir un fichier");
    fireEvent.change(fileInput, {
      target: { files: [new File([predefinedFileContent], "testfile.txt")] },
    });

    const simulateButton = screen.getByText("Lancer la simulation");
    fireEvent.click(simulateButton);

    // await waitFor(() => {
    //   expect(screen.getByText("Résultats :")).toBeInTheDocument();
    //   expect(
    //     screen.getByText("Tondeuse 1 : [1, 3] et orientation W")
    //   ).toBeInTheDocument();
    //   expect(
    //     screen.getByText("Tondeuse 2 : [2, 5] et orientation N")
    //   ).toBeInTheDocument();
    // });
  });
});
