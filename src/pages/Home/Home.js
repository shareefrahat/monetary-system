import React, { useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../../images/user-7.jpg";
import GraphSection from "./GraphSection";
import { FaRegBell } from "@react-icons/all-files/fa/FaRegBell";
import { HiOutlineLogout } from "@react-icons/all-files/hi/HiOutlineLogout";

const Home = () => {
  const [percent, setPercent] = useState(100);
  const [age, setAge] = useState(100);
  return (
    <>
      <div className="flex flex-row justify-between lg:hidden px-1 sticky top-0 bg-white">
        <div className="text-2xl bg-white text-neutral p-3 rounded-xl hover:text-primary">
          <HiOutlineLogout />
        </div>
        <div className="text-2xl bg-white text-neutral p-3 rounded-xl hover:text-primary">
          <FaRegBell />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-10 bg-white">
        <section className="bg-gray-50/80 lg:pl-32 lg:pr-20 px-6 py-10 h-screen">
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
            <div>
              <div className="mb-4">
                <h2 className="text-4xl font-bold">$19,892</h2>
                <small className="text-sm text-neutral">Account Balance</small>
              </div>
              <div className="flex flex-row lg:flex-col gap-x-8">
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
              </div>
            </div>
            <button className="btn px-6 py-3 bg-primary text-slate-100 rounded-xl inline-block w-full lg:w-fit">
              <select
                className=" bg-primary text-slate-100 rounded-xl outline-none"
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
        <section className="lg:px-0 px-6 lg:py-10">
          <GraphSection></GraphSection>
        </section>
        <section className="lg:px-16 px-6 lg:py-10 mb-40 lg:mb-0">
          <div>
            <div className="bg-gray-50/80 p-6 rounded-md mb-10">
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
              <div className="mt-10">
                <p className="text-sm mb-5 flex flex-row justify-between items-center">
                  <span>Employer Contribution</span>
                  <span>8.4%</span>
                </p>
                <p className="text-sm mb-5 flex flex-row justify-between items-center">
                  <span>Interest Rate</span>
                  <span>5%</span>
                </p>
                <button className="btn px-6 py-3 bg-primary text-slate-100 rounded-xl w-full">
                  Update
                </button>
                <Link
                  to="/"
                  className="text-sm text-center text-primary mt-5 block"
                >
                  View Help Docs {">"}
                </Link>
              </div>
            </div>
            <div>
              <div className="border-l-2 border-l-primary py-1 px-8">
                <p className="text-md mb-2">
                  <span>Are you considering a</span>
                  <br />
                  <span className="font-bold">Housing Advance?</span>
                </p>
                <small className="text-neutral block">
                  Limited time reduced interest
                </small>
                <Link to="/" className="text-sm text-primary mt-2 block">
                  Learn More {">"}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
