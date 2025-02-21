import React from "react";

const ResponseDisplay = ({ response, selectedOptions }) => {
  const filteredData = selectedOptions.map((option) => ({
    label: option.label,
    value: response[option.value],
  }));

  return (
    <div className="mt-4 bg-white p-4 shadow-md rounded">
      <h2 className="text-lg font-bold">Response Data</h2>
      {filteredData.map((item, index) => (
        <p key={index} className="text-gray-700">
          <strong>{item.label}:</strong> {item.value.join(", ")}
        </p>
      ))}
    </div>
  );
};

export default ResponseDisplay;
