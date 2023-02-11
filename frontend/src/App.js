import React, { useState } from "react";
import axios from "axios";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [details, setDetails] = useState([]);
  const [img,setImg]=useState();

  const [image, setImage] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
    const response = await axios.get(`http://127.0.0.1:5000/get_info`);
    //alert(response.data[0]["Age"]);
    
    setInputValue(JSON.stringify(response.data[0]))
    setImg(JSON.stringify(response.data[1]))
    setImage("https://media.licdn.com/dms/image/D5603AQEYOiwH1AUbGw/profile-displayphoto-shrink_400_400/0/1670810985550?e=1681344000&v=beta&t=oIm3e4IsyXNAuwza99m2vpFgPFhnLxe7PDrVofLGSIk");
    console.log(typeof(JSON.stringify(response.data[1])))}
    catch(err)
    {
      alert("TRY RELOADING .......")
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          type="text"
          value={inputValue}
          
        />
        <button type="submit">Submit</button>
        <textarea type="text" value={img}/>
        <br />
        <img src={image} alt="Generated Image" />
        <br />
      </form>
      
    </div>
  );
}

export default App;
