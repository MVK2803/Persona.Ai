import React, { useState } from "react";

const App = () => {
  const [textValue, setTextValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:5000/get_info", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: textValue }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={textValue} onChange={(e) => setTextValue(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
