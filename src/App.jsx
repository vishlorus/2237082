import React, { useState } from "react";
import axios from "axios";
import Select from "react-select";
import InputForm from "./components/InputForm";
import ResponseDisplay from "./components/ResponseDisplay";

const App = () => {
  const [response, setResponse] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    { value: "numbers", label: "Numbers" },
    { value: "alphabets", label: "Alphabets" },
    { value: "highest_alphabet", label: "Highest Alphabet" },
  ];

  const handleSubmit = async (jsonData) => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/bfhl", jsonData);
      setResponse(res.data);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to fetch API response.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">BFHL API Frontend</h1>
      <InputForm onSubmit={handleSubmit} />
      {response && (
        <>
          <Select
            options={options}
            isMulti
            onChange={setSelectedOptions}
            className="w-64 mt-4"
          />
          <ResponseDisplay response={response} selectedOptions={selectedOptions} />
        </>
      )}
    </div>
  );
};

export default App;
