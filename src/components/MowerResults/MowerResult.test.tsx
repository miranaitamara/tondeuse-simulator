import React from "react";
import { render, screen } from "@testing-library/react";
import MowerResults from "./MowerResults";

describe("MowerResults Component", () => {
  it("renders results correctly", () => {
    const results = ["Result 1", "Result 2", "Result 3"];
    render(<MowerResults results={results} />);

    results.forEach((result) => {
      expect(screen.getByText(result)).toBeInTheDocument();
    });
  });

  it("does not render any results when the list is empty", () => {
    render(<MowerResults results={[]} />);
    expect(screen.queryByText("Result 1")).toBeNull();
  });
});
