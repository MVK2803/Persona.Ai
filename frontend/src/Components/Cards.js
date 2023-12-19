import React from "react";
export default function Cards({
  heading,
  content,
  heightPerc,
  blurPer,
  borderBool,
}) {
  return (
    <>
      <div
        className={`W-full ${
          borderBool == 1
            ? " border border-white  border-[2px] border-opacity-30"
            : ""
        } h-[${heightPerc}%] bg-white bg-opacity-[${blurPer}%] rounded-lg overflow-hidden p-[5px]`}
      >
        <h className="font-extrabold text-xl">{heading}</h>
        <p>{content}</p>
      </div>
    </>
  );
}
