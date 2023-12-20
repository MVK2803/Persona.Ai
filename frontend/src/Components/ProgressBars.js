export default function PersonalityBar({
  heading,
  heightPerc,
  blurPer,
  borderBool,
  Personality,
  Type,
}) {
  const cardStyles = {
    width: "100%",
    height: `calc(${heightPerc}% )`,
    backgroundColor: "rgba(255, 255, 255, " + blurPer / 100 + ")",
    borderRadius: "8px", // Adjust the value as needed
    overflow: "hidden",
    padding: "",
    border: borderBool === "1" ? "2px solid rgba(255, 255, 255, 0.3)" : "none",
  };
  return (
    <div className=" p-[0px] lg:p-[5px]" style={cardStyles}>
      <h className="font-extrabold text-xl">{heading}</h>
      {Personality.map((value, index) => {
        return (
          <div className="" key={index}>
            <div className="text-slate-500 flex justify-between">
              <h className="text-sm lg:text-lg">{value[0]}</h>
              <h
                className={`text-sm lg:text-lg  ${
                  Type !== "1" ? "hidden" : ""
                }`}
              >
                {value[1]}
              </h>
            </div>
            <div className="w-full bg-teal-200 rounded-full h-2.5 flex flex-row">
              <div
                className={`h-2.5 rounded-full ${
                  Type === "1" ? "" : " hidden"
                } `}
                style={{ width: `${value[2]}%` }}
              ></div>

              <div
                className="bg-teal-600 h-2.5 rounded-full"
                style={{ width: `${Type === "1" ? "5%" : `${value[2]}%`}` }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
