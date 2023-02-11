import React, { useState } from "react";
import axios from "axios";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [details, setDetails] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.get(`http://127.0.0.1:5000/get_info`);
    console.log(response.data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      
    </div>
  );
}

export default App;
