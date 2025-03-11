import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FileUpload from "./FileUpload";

describe("FileUpload Component", () => {
  it("renders without crashing", () => {
    const fileInputRef = { current: null };
    render(
      <FileUpload
        onFileUpload={() => {}}
        fileInputRef={fileInputRef}
        fileName=""
        setFileName={() => {}}
      />
    );
    expect(screen.getByText("Choisir un fichier")).toBeInTheDocument();
  });

  it("updates file name when a file is selected", () => {
    const setFileName = jest.fn();
    const fileInputRef = { current: null };
    render(
      <FileUpload
        onFileUpload={() => {}}
        fileInputRef={fileInputRef}
        fileName=""
        setFileName={setFileName}
      />
    );

    const input = screen.getByLabelText("Choisir un fichier");
    const file = new File(["file content"], "testfile.txt", {
      type: "text/plain",
    });

    fireEvent.change(input, { target: { files: [file] } });

    expect(setFileName).toHaveBeenCalledWith("testfile.txt");
  });

  it("resets file name when no file is selected", () => {
    const setFileName = jest.fn();
    const fileInputRef = { current: null };
    render(
      <FileUpload
        onFileUpload={() => {}}
        fileInputRef={fileInputRef}
        fileName=""
        setFileName={setFileName}
      />
    );

    const input = screen.getByLabelText("Choisir un fichier");

    fireEvent.change(input, { target: { files: [] } });

    expect(setFileName).toHaveBeenCalledWith("Aucun fichier choisi");
  });
});
