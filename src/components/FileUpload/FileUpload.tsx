import React from "react";
import "./FileUpload.css";

interface FileUploadProps {
  onFileUpload: (content: string) => void;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  fileName: string;
  setFileName: React.Dispatch<React.SetStateAction<string>>;
}

const FileUpload: React.FC<FileUploadProps> = ({
  onFileUpload,
  fileInputRef,
  fileName,
  setFileName,
}) => {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = (e) => {
        if (typeof e.target?.result === "string") {
          onFileUpload(e.target.result);
        }
      };
      reader.readAsText(file);
    } else {
      setFileName("Aucun fichier choisi");
    }
  };

  return (
    <div>
      <label htmlFor="file-upload" className="custom-file-upload">
        Choisir un fichier
      </label>
      <input
        id="file-upload"
        type="file"
        accept=".txt"
        onChange={handleFileUpload}
        className="file-input"
        ref={fileInputRef}
      />
      <span className="file-name">
        {fileName}
        {/* {fileInputRef.current?.files?.length
          ? fileInputRef.current.files[0].name
          : "Aucun fichier choisi"} */}
      </span>
    </div>
  );
};

export default FileUpload;
