import React, { useState } from "react";
import axios from "axios";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [img,setImg]=useState();
  const [fields, setFields] = useState([]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      /*console.log("SUCESS");
      const response = await axios.get(`http://127.0.0.1:5000/get_info`);
      const image = new Blob([Uint8Array.from(atob(response.data.image), c => c.charCodeAt(0))], { type: 'image/png' });
      setInputValue(JSON.stringify(response.data.text.message));
      const imageUrl = URL.createObjectURL(image);
      //console.log(imageUrl);
      const imgElement = document.getElementById('img');
      imgElement.src = imageUrl;*/
      let fieldsArray = [];
      let labels=["name","ageed","monic","catal","foran"]
      for (let i = 0; i < 5; i++) {
        fieldsArray.push(
          <div key={i} className="field">
            <label className="label">{labels[i]}</label>
            <input type="text" className="input" />
          </div>
        );
      }
      setFields(fieldsArray);

    }
    catch(err)
    {
      alert("TRY RELOADING .......");
    }
  };

  return (
    <>
    <nav className="navbar">PERSONA.AI</nav>
    <div className="container">
      
      
      <div className="fields-container">
        {fields}
      </div>
      <button className="button" onClick={handleSubmit}>Generete Persona</button>
    </div>
    </>
  );
}

export default App;
