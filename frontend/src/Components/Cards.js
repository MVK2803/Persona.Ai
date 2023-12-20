import React from "react";

export default function Cards({
  heading,
  content,
  heightPerc,
  blurPer,
  borderBool,
}) {
  const cardStyles = {
    width: "100%",
    height: `calc(${heightPerc}% )`,
    backgroundColor: "rgba(255, 255, 255, " + blurPer / 100 + ")",
    borderRadius: "8px", // Adjust the value as needed
    overflow: "hidden",
    padding: "5px",
    border: borderBool === "1" ? "2px solid rgba(255, 255, 255, 0.3)" : "none",
  };
  const bulletPoints = typeof content !== "string" ? content : "";
  // console.log(bulletPoints);
  return (
    <div style={cardStyles}>
      <h className="font-extrabold text-xl ">{heading}</h>

      {bulletPoints === "" ? (
        <p className="text-slate-500">{content}</p>
      ) : (
        <div className="flex flex-col text-slate-500">
          {bulletPoints.map((value, index) => (
            <p key={index}>• {value}</p>
          ))}
        </div>
      )}
    </div>
  );
}
