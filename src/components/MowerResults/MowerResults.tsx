import React from "react";
import "./MowerResults.css";

interface MowerResultsProps {
  results: string[];
}

const MowerResults: React.FC<MowerResultsProps> = ({ results }) => {
  return (
    <div className="results">
      <h3>Résultats :</h3>
      {results.map((res, index) => (
        <p key={index}>{res}</p>
      ))}
    </div>
  );
};

export default MowerResults;
