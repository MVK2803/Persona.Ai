import React, { useState } from "react";
import axios from "axios";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [img,setImg]=useState();

  const [image, setImage] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      //console.log("SUCESS");
      const response = await axios.get(`http://127.0.0.1:5000/get_info`);
      const image = new Blob([Uint8Array.from(atob(response.data.image), c => c.charCodeAt(0))], { type: 'image/png' });
      setInputValue(JSON.stringify(response.data.text.message));
      const imageUrl = URL.createObjectURL(image);
      //console.log(imageUrl);
      const imgElement = document.getElementById('img');
      imgElement.src = imageUrl;
    }
    catch(err)
    {
      alert("TRY RELOADING .......");
    }
  };

  return (
    <>
      
      <textarea type="text" value={inputValue}/>
      <button type="submit" onClick={handleSubmit}>Submit</button>
      <img  id ="img" src={img} alt="generated img"/>

      
    </>
  );
}

export default App;
