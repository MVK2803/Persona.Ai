import PersonalityBar from "./ProgressBars";
export default function MobilePersona({ persona, personalityList }) {
  return (
    <div className="w-full max-w-sm bg-white rounded-lg shadow-lg bg-opacity-[30%] ">
      <div className="flex flex-col items-center space-y-[5px] p-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={persona.Image}
          alt="Bonnie image"
        />
        <h5 className="mb-1 text-xl font-medium ">{persona.Name}</h5>
        <h5 className="text-sm text-gray-500 ">{persona.Job}</h5>
        <h5 className="text-sm text-gray-500 ">
          <span className="font-bold text-black">Age: </span>
          {persona.Age}
        </h5>
        <h5 className="text-sm text-gray-500 ">
          <span className="font-bold text-black">Marital Status: </span>
          {persona.Marital}
        </h5>
        <h5 className="text-sm text-gray-500 ">
          <span className="font-bold text-black">Loaction: </span>
          {persona.Location}
        </h5>
        <div className="text-sm text-gray-500 ">
          <p>{persona.About}</p>
        </div>
        <PersonalityBar
          heightPerc="100"
          blurPer="0"
          borderBool="0"
          Personality={personalityList}
          Type="1"
        />
      </div>
    </div>
  );
}
