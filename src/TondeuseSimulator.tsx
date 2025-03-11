import React, { useState, useRef } from "react";
import FileUpload from "./components/FileUpload/FileUpload";
import MowerResults from "./components/MowerResults/MowerResults";
import { processMowerInstructions } from "./services/MowerSimulator";

const TondeuseSimulator: React.FC = () => {
  const [fileContent, setFileContent] = useState<string>("");
  const [result, setResult] = useState<string[]>([]);
  const [fileName, setFileName] = useState<string>("Aucun fichier choisi");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileContent = (content: string) => {
    setFileContent(content);
  };

  const processInstructions = () => {
    const results = processMowerInstructions(fileContent);
    setResult(results);
  };

  const reset = () => {
    setFileContent("");
    setResult([]);
    setFileName("Aucun fichier choisi");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="container">
      <h2>Simulateur de Tondeuse</h2>
      <FileUpload
        onFileUpload={handleFileContent}
        fileInputRef={fileInputRef}
        fileName={fileName}
        setFileName={setFileName}
      />
      <div className="button-group">
        <button onClick={processInstructions} className="btn">
          Lancer la simulation
        </button>
        <button onClick={reset} className="btn reset-btn">
          Réinitialiser
        </button>
      </div>
      {result.length > 0 && <MowerResults results={result} />}
    </div>
  );
};

export default TondeuseSimulator;
