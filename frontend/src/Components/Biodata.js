export default function Biodata({ bioData }) {
  return (
    <>
      <div className="bg-white  bg-opacity-[35%] w-full h-[50%] rounded-lg flex r flex flex-col p-2 space-y-[3px]  justify-center">
        <div className="text-center flex flex-col ">
          <h className="font-extrabold text-xl">{bioData.name}</h>
          <h className="font-large text-xl">{bioData.job}</h>
        </div>
        <p>{bioData.bio}</p>
        <h>
          <span className="font-extrabold">Age: </span>
          {bioData.age}
        </h>
        <h>
          <span className="font-extrabold">Marital Status: </span>
          {bioData.mStatus}
        </h>
        <h>
          <span className="font-extrabold">Location: </span>
          {bioData.Location}
        </h>
      </div>
    </>
  );
}
