import React from "react";
import CircularBar from "./CircularBar";
import ContributionGraph from "./ContributionGraph";

const GraphSection = () => {
  return (
    <>
      <div>
        <div className="mb-10">
          <h6 className="text-md text-primary font-bold">Retirement Income</h6>
          <p className="text-xl lg:text-2xl">Staring Year 2056</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-20 w-full">
          <div className="mb-4 border-b-2 border-b-primary pb-4">
            <h2 className="text-xl lg:text-2xl font-bold">$300,000</h2>
            <small className="text-sm text-neutral">My Goal</small>
          </div>
          <div className="flex flex-row justify-between lg:gap-20">
            <div className="mb-4 border-b-2 border-b-primary pb-4">
              <h2 className="text-xl lg:text-2xl font-bold">59%</h2>
              <small className="text-sm text-neutral">Goal Achieved</small>
            </div>
            <div className="mb-4 border-b-2 border-b-primary pb-4">
              <h2 className="text-xl lg:text-2xl font-bold">$300</h2>
              <small className="text-sm text-neutral">
                Est. Monthly Income
              </small>
            </div>
          </div>
        </div>
        <div className="my-10">
          <p className="text-lg lg:text-xl font-bold">Contribution Overtime</p>
          <div className="flex flex-row justify-between items-center my-5">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2">
              <span className="inline-block w-3 h-2 rounded-md bg-primary"></span>
              <small className="text-neutral block">Employer:</small>
              <small className="block font-bold">73,500K</small>
            </div>
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2">
              <span className="inline-block w-3 h-2 rounded-md bg-[#4935ffde]"></span>
              <small className="text-neutral block">Employee:</small>
              <small className="block font-bold">52,500K</small>
            </div>
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2">
              <span className="inline-block w-3 h-2 rounded-md bg-[#6ab0eee9]"></span>
              <small className="text-neutral block">Total Interest:</small>
              <small className="block font-bold">244,313K</small>
            </div>
          </div>
          <div>
            <ContributionGraph></ContributionGraph>
          </div>
        </div>
        <div className="mb-40 lg:mb-0 mt-16">
          <p className="text-lg lg:text-xl font-bold">
            How do I compare to my peers?
          </p>
          <small className="text-neutral block">
            These numbers represents current goal achievement
          </small>
          <div className="flex flex-col lg:flex-row justify-start items-center gap-10 lg:gap-20 mt-8">
            <div className="w-full">
              <div className="text-md pb-4 border-b border-b-slate-200 mb-4">
                <h6>
                  Age: Under{" "}
                  <select
                    name="age"
                    id=""
                    className="bg-transparent outline-none"
                  >
                    <option value="">30</option>
                    <option value="">40</option>
                    <option value="">50</option>
                    <option value="">60</option>
                  </select>
                </h6>
              </div>
              <div className="text-md pb-4 border-b border-b-slate-200 mb-4">
                <h6>
                  Salary:{" "}
                  <select
                    name="salary"
                    id=""
                    className="bg-transparent outline-none"
                  >
                    <option value="">20K - 30K</option>
                    <option value="">30K - 40K</option>
                    <option value="">40K - 50K</option>
                    <option value="">50K - 60K</option>
                    <option value="">60K - 70K</option>
                    <option value="">70K - 80K</option>
                    <option value="">80K - 90K</option>
                    <option value="">90K - 100K</option>
                  </select>
                </h6>
              </div>
              <div className="text-md pb-4 border-b border-b-slate-200 mb-4">
                <h6>
                  Gender:{" "}
                  <select
                    name="gender"
                    id=""
                    className="bg-transparent outline-none"
                  >
                    <option value="">Male</option>
                    <option value="">Female</option>
                    <option value="">Other</option>
                  </select>
                </h6>
              </div>
            </div>
            <div>
              <CircularBar></CircularBar>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GraphSection;
