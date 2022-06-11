import React, { useState } from "react";
import avatar from "../../images/user-7.jpg";
import GraphSection from "./GraphSection";

const Home = () => {
  const [percent, setPercent] = useState(100);
  const [age, setAge] = useState(100);
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-10">
        <section className="bg-gray-50/80 lg:pl-32 lg:pr-20 px-6 py-10 h-screen w-full lg:w-1/4">
          <div className="flex flex-row justify-start text-left gap-4 items-center">
            <img className="w-20 rounded-full" src={avatar} alt="" />
            <p className="text-xl lg:text-2xl font-bold">
              Hi Mike
              <br />
              <small className="text-sm text-neutral">Welcome Back</small>
            </p>
          </div>
          <div className="my-8 pl-4">
            <p className="text-lg mb-4">Today</p>
            <div className="mb-4">
              <h2 className="text-2xl lg:text-3xl font-bold">$19,892</h2>
              <small className="text-sm text-neutral">Account Balance</small>
            </div>
            <div className="mb-4">
              <h3 className="text-lg lg:text-xl font-bold">$4,000</h3>
              <small className="text-sm text-neutral">
                Year-to-date-contribution
              </small>
            </div>
            <div className="mb-4">
              <h3 className="text-lg lg:text-xl font-bold">$1,892</h3>
              <small className="text-sm text-neutral">Total Interest</small>
            </div>
            <button className="btnbtn px-6 py-2 bg-primary text-slate-100 rounded-md">
              <select
                className=" bg-primary text-slate-100 rounded-md"
                name="action"
                id="user-action"
              >
                <option>I want to</option>
                <option>Deposit</option>
                <option>Withdraw</option>
              </select>
            </button>
          </div>
          <div className="mt-12 pl-4">
            <p className="text-lg mb-6">Recent Transactions</p>
            <div className="text-sm pb-4 border-b border-b-slate-200 mb-4">
              <small className="text-sm text-neutral">2020-08-07</small>
              <h6>Withdrawal Transfer to Bank-XXX11</h6>
            </div>
            <div className="text-sm pb-4 border-b border-b-slate-200 mb-4">
              <small className="text-sm text-neutral">2020-07-21</small>
              <h6>Withdrawal Transfer to Bank-XXX11</h6>
            </div>
            <div className="text-sm pb-4 border-b border-b-slate-200 mb-4">
              <small className="text-sm text-neutral">2020-07-16</small>
              <h6>Withdrawal Transfer to Bank-XXX11</h6>
            </div>
          </div>
        </section>
        <section className="lg:px-20 px-6 py-10 w-full lg:w-2/4">
          <GraphSection></GraphSection>
        </section>
        <section className="lg:px-20 px-6 py-10 mb-20 lg:mb-0 w-full lg:w-1/4">
          <div>
            <div className="bg-gray-50/80 p-6 rounded-md">
              <div className="border-b border-b-slate-200 mb-4">
                <p className="text-lg mb-6 font-bold">Retirement Strategy</p>
                <div className="mb-6">
                  <label for="range-1" className="block mb-2 text-sm">
                    Employee Contribution
                  </label>
                  <p className="flex flex-row items-center gap-5">
                    <input
                      className="slider w-full"
                      type="range"
                      min="1"
                      max="100"
                      value={percent}
                      onChange={(e) => setPercent(e.target.value)}
                    />
                    <span>{percent}%</span>
                  </p>
                </div>
                <div className="mb-6">
                  <label for="range-1" className="block mb-2 text-sm">
                    Retirement Age
                  </label>
                  <p className="flex flex-row items-center gap-5">
                    <input
                      className="slider w-full"
                      type="range"
                      min="1"
                      max="100"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                    <span>{age}</span>
                  </p>
                </div>
              </div>
              <div></div>
            </div>
            <div></div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
