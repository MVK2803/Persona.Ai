import React from "react";
import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { useNavigate } from "react-router-dom";
import Cards from "../Components/Cards";
import Biodata from "../Components/Biodata";
import ProfileImage from "../Components/ProfileImage";
import PersonalityBar from "../Components/ProgressBars";
import MobilePersona from "../Components/MobilePersona";
export default function MainPage() {
  const navigate = useNavigate();
  const personaString = localStorage.getItem("persona");
  const persona = JSON.parse(personaString);
  //console.log(persona);

  let personalityList = [
    ["Introvert", "Extrovert", 0],
    ["Insecure", "Confident", 0],
    ["Passive", "Assertive", 0],
  ];
  for (let i = 0; i < 3; i++) {
    personalityList[i][2] = persona.Personality[i];
  }
  let motivationList = [
    ["Pleasure", "", 0],
    ["Validation", "", 0],
    ["Fear", "", 0],
    ["Health", "", 0],
  ];
  for (let i = 0; i < 4; i++) {
    motivationList[i][2] = persona.Motivation[i];
  }
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const fadeIn = useSpring({
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? "translateY(0)" : "translateY(-20px)",
    config: { duration: 500 }, // Adjust the duration
  });

  return (
    <animated.div
      className="absolute bg-teal-500 h-full w-full flex items-center justify-center font-montesserat"
      style={fadeIn}
    >
      <button
        className="absolute top-0 left-0 m-2 p-2  rounded-full text-teal-100 hover:bg-teal-600"
        onClick={() => {
          navigate("/");
        }}
      >
        ← Home
      </button>
      <div className=" hidden w-[80%] h-[80%] lg:flex flex-row rounded-md p-2 space-x-2 ">
        <div className="w-[25%] h-full  rounded-l-lg flex flex-col space-y-2  ">
          <ProfileImage imageUrl={persona.Image} />
          <Biodata
            bioData={{
              name: persona.Name,
              job: persona.Job,
              bio: persona.Quote,
              age: persona.Age,
              mStatus: persona.Marital,
              Location: persona.Location,
            }}
          />
        </div>
        <div className="  w-[75%] h-full  flex flex-row rounded-r-lg space-x-2">
          <div className="w-[50%] flex  flex-col  space-y-2">
            <Cards
              heading="About"
              heightPerc="40"
              blurPer="30"
              borderBool="0"
              content={persona.About}
            />
            <Cards
              heading="Need and Goals"
              heightPerc="30"
              blurPer="20"
              borderBool="1"
              content={persona.Goals}
            />
            <PersonalityBar
              heading="Personality"
              heightPerc="30"
              blurPer="30"
              borderBool="0"
              Personality={personalityList}
              Type="1"
            />
          </div>
          <div className="w-[50%] flex  flex-col  space-y-2">
            <Cards
              heading="Pain Points"
              heightPerc="40"
              blurPer="20"
              borderBool="1"
              content={persona.Painpts}
            />
            <Cards
              heading="Attiudes and Behavious"
              heightPerc="30"
              blurPer="30"
              borderBool="0"
              content={persona.Attitude}
            />
            <PersonalityBar
              heading="Motivations"
              heightPerc="40"
              blurPer="20"
              borderBool="1"
              Personality={motivationList}
              Type="2"
            />
          </div>
        </div>
      </div>
      <div className=" md:hidden w-[90%] h-[90%] flex flex-col  p-2  items-center ">
        <MobilePersona persona={persona} personalityList={personalityList} />
      </div>
    </animated.div>
  );
}
