import React, { useState } from "react";
import axios from "axios";
import Cards from "./Components/Cards";
import Biodata from "./Components/Biodata";
import ProfileImage from "./Components/ProfileImage";
import PersonalityBar from "./Components/ProgressBars";

function App() {
  const Personality = [
    ["Introvert", "Extrovet", 40],
    ["Introvert", "Extrovet", 50],
    ["Introvert", "Extrovet", 60],
  ];

  return (
    <div className="absolute bg-teal-500 h-full w-full flex items-center justify-center">
      <div className=" w-[80%] h-[80%] flex flex-row rounded-md p-2 space-x-2 ">
        <div className="w-[25%] h-full  rounded-l-lg flex flex-col space-y-2  ">
          <ProfileImage imageUrl="https://picsum.photos/536/354" />
          <Biodata
            bioData={{
              name: "John Doe Thomas",
              job: "Architect",
              bio: "tLorem Ipsum is simply dummy text of the printing and typesetting industry. rinter took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
              age: "11",
              mStatus: "Single",
              Location: "USA",
            }}
          />
        </div>
        <div className="  w-[75%] h-full  flex flex-row rounded-r-lg space-x-2">
          <div className="w-[50%] flex  flex-col  space-y-2">
            <Cards
              heading="Goals"
              heightPerc="40"
              blurPer="30"
              borderBool="0"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut"
            />
            <Cards
              heading="Need and Goals"
              heightPerc="30"
              blurPer="20"
              borderBool="1"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut"
            />
            <PersonalityBar
              heading="Personality"
              heightPerc="30"
              blurPer="30"
              borderBool="0"
              Personality={Personality}
              Type="1"
            />
          </div>
          <div className="w-[50%] flex  flex-col  space-y-2">
            <Cards
              heading="Pain Points"
              heightPerc="40"
              blurPer="20"
              borderBool="1"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut"
            />
            <Cards
              heading="Attiudes and Behavious"
              heightPerc="30"
              blurPer="30"
              borderBool="0"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut"
            />
            <PersonalityBar
              heading="Motivations"
              heightPerc="40"
              blurPer="20"
              borderBool="1"
              Personality={Personality}
              Type="2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
