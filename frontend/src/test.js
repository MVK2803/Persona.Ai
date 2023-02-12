import React, { useState } from 'react';

function App() {
  const [fields, setFields] = useState([]);

  const handleButtonClick = () => {
    let fieldsArray = [];
    for (let i = 0; i < 5; i++) {
      fieldsArray.push(
        <div key={i}>
          <label>Label {i + 1}:</label>
          <input type="text" />
        </div>
      );
    }
    setFields(fieldsArray);
  };

  return (
    <div>
      
      <button onClick={handleButtonClick}>Create Fields</button>
      {fields}
    </div>
  );
}

export default App;
