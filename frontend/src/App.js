import React, { useState } from "react";
import axios from "axios";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [imageUrl, setImageUrl] = useState('');
  const[button,setButton]=useState("⭯")
  const [fields, setFields] = useState([]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      
      var str;
      setButton("LOADING ....");
      const response = await axios.get(`http://127.0.0.1:5000/get_info`);
      const image = new Blob([Uint8Array.from(atob(response.data.image), c => c.charCodeAt(0))], { type: 'image/png' });
      str=response.data.text.message;
      setButton("⭯");
      const imageUrl = URL.createObjectURL(image);
      setImageUrl(imageUrl);
      let fieldsArray = [];
      let labels=["Name","Age","Gender","Occupation","Country","Education"]
      for (let i = 0; i < 6; i++) {
        fieldsArray.push(
          <div key={i} className="field">
            <label className="label">{labels[i]}</label>
            <label type="text" className="input" >{str[labels[i]]}</label>
          </div>
        );
      }
      setFields(fieldsArray);
      
      
    }
    catch(err)
    { setButton("⭯");
      alert("API ERROR_TRY RELOADING");
    }
  };

  return (
    <>
    <nav className="navbar">PERSONA.AI</nav>
    <div className="container">
    {imageUrl && <img className="img" src={imageUrl} alt="Placeholder" />}

      
      <div className="fields-container">
        {fields}
      </div>
      <button className="button" onClick={handleSubmit}>{button}</button>
    </div>
    </>
  );
}

export default App;
