import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularBar = () => {
  const average = 78;
  const top = 95;
  const me = 59;
  return (
    <div className="flex flex-row items-center justify-center gap-5">
      <div className="w-24 font-bold">
        <CircularProgressbar
          strokeWidth={10}
          value={average}
          text={`${average}%`}
          styles={buildStyles({
            textColor: "black",
            pathColor: "#48d8ac",
            trailColor: "#d6f7ef",
            textSize: "20px",
            strokeLinecap: "butt",
          })}
        />
        <p className="text-center mt-2 font-normal">Average</p>
      </div>
      <div className="w-24 font-bold">
        <CircularProgressbar
          strokeWidth={10}
          value={top}
          text={`${top}%`}
          styles={buildStyles({
            textColor: "black",
            pathColor: "#48d8ac",
            trailColor: "#d6f7ef",
            textSize: "20px",
            strokeLinecap: "butt",
          })}
        />
        <p className="text-center mt-2 font-normal">Top</p>
      </div>
      <div className="w-24 font-bold">
        <CircularProgressbar
          strokeWidth={10}
          value={me}
          text={`${me}%`}
          styles={buildStyles({
            textColor: "black",
            pathColor: "#48d8ac",
            trailColor: "#d6f7ef",
            textSize: "20px",
            strokeLinecap: "butt",
          })}
        />
        <p className="text-center mt-2 font-normal">Me</p>
      </div>
    </div>
  );
};

export default CircularBar;
