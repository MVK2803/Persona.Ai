export default function PersonalityBar({
  heading,
  heightPerc,
  blurPer,
  borderBool,
  Personality,
  Type,
}) {
  return (
    <div
      className={`w-full  h-[${heightPerc}%] bg-white bg-opacity-[${blurPer}%] rounded-lg overflow-hidden p-[5px] ${
        borderBool == 1
          ? "border border-gray-50  border-[2px] border-opacity-30"
          : ""
      }`}
    >
      <h className="font-extrabold text-xl">{heading}</h>
      {Personality.map((value, index) => {
        return (
          <div className="" key={index}>
            <div className="flex justify-between">
              <h>{value[0]}</h>
              <h className={`${Type != 1 ? "hidden" : ""}`}>{value[1]}</h>
            </div>
            <div className="w-full bg-teal-200 rounded-full h-2.5 flex flex-row">
              <div
                className={`h-2.5 rounded-full ${Type == 1 ? "" : " hidden"} `}
                style={{ width: `${value[2]}%` }}
              ></div>

              <div
                className="bg-teal-600 h-2.5 rounded-full"
                style={{ width: `${Type == 1 ? "5%" : `${value[2]}%`}` }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
