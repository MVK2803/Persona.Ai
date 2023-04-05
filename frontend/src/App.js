import React, { useState } from "react";
import axios from "axios";
import img1 from './ico.png';

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [button,setButton] = useState("⭯");
  const [fields, setFields] = useState([]);
  const[name,setName]=useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      var str;
      setButton("LOADING ....");
      const response = await axios.get(`http://127.0.0.1:5000/get_info`);
      setButton("⭯");
      str = response.data.message;
      console.log(str);

      let fieldsArray = [];
      let labels = ["Name", "Age", "Gender", "Occupation", "Country", "Education"];
      setName(str["Name"])
      for (let i = 0; i < 6; i++) {
        fieldsArray.push(
          <div key={i} className="field">
            <label className="label">{labels[i]}</label>
            <label type="text" className="input">{str[labels[i]]}</label>
          </div>
        );
      }
      setFields(fieldsArray);
    }
    catch (err) {
      setButton("⭯");
      alert("API ERROR_TRY RELOADING");
    }
  };

  return (
    <>
      <nav className="navbar">PERSONA.AI</nav>
      

      <div className="container">
        <div className="left-div">
          <div className="card">
            <img className="img" src={img1} alt="Placeholder" />
            <h>{name}</h>
          </div>
        </div>

        <div className="line"></div>  

        <div className="fields-container">
          <h className="fields-head">User <span className="red">Details</span></h>
          <div className="each-field">
            {fields}
          </div>
        </div>
      </div>

      <div className="btn-grp">
        <button className="button" onClick={handleSubmit}>{button}</button>
      </div>
    </>
  );
}

export default App;
