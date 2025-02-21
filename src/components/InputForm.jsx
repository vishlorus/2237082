import React, { useState } from "react";

const InputForm = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const jsonData = JSON.parse(input);
      onSubmit(jsonData);
    } catch (error) {
      alert("Invalid JSON format");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
      <textarea
        className="border p-2 w-80 h-20"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='{"data": ["A", "1", "B", "2"]}'
      />
      <button type="submit" className="bg-blue-500 text-white p-2 mt-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default InputForm;
