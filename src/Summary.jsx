import React, { useState, useEffect } from "react";
import "./index.css";

const SummaryComponent = ({ data }) => {
  const [summary, setSummary] = useState(data || "");

  useEffect(() => {
    // If new data is passed, update the summary
    if (data) {
      setSummary(formatSummary(data));
    }
  }, [data]);

  // Function to format the summary string
  const formatSummary = (text) => {
    let formattedText = text;
  
    // Convert **bold** to <strong>bold</strong>
    formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  
    // Convert bullet points (* text) into headings and paragraphs
    formattedText = formattedText.replace(/^\* (.*?)$/gm, (match, p1) => {
      return `<h3>${p1}</h3><p>`;
    });
  
    // Convert double new lines into proper paragraph spacing
    formattedText = formattedText.replace(/\n\n/g, "</br></br></p><p>");
  
    // Ensure the summary starts and ends properly within paragraph tags
    formattedText = `<p>${formattedText}</p>`;
  
    return formattedText;
  };
  

  return (
    <div className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 border-4 border-gray-400 rounded-2xl p-8 m-5 shadow-xl text-white text-xl">
      <div
        dangerouslySetInnerHTML={{
          __html: summary, // Render the formatted summary
        }}
      />
    </div>
  );
};

export default SummaryComponent;
