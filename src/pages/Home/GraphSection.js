import React from "react";

const GraphSection = () => {
  return (
    <>
      <div>
        <div className="mb-10">
          <h6 className="text-md text-primary font-bold">Retirement Income</h6>
          <p className="text-xl lg:text-2xl">Staring Year 2056</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-20 w-full">
          <div className="mb-4 border-b border-b-primary pb-4">
            <h2 className="text-xl lg:text-2xl font-bold">$300,000</h2>
            <small className="text-sm text-neutral">My Goal</small>
          </div>
          <div className="mb-4 border-b border-b-primary pb-4">
            <h2 className="text-xl lg:text-2xl font-bold">59%</h2>
            <small className="text-sm text-neutral">Goal Achieved</small>
          </div>
          <div className="mb-4 border-b border-b-primary pb-4">
            <h2 className="text-xl lg:text-2xl font-bold">$300</h2>
            <small className="text-sm text-neutral">Est. Monthly Income</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default GraphSection;
