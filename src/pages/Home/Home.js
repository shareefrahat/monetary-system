import React from "react";
import avatar from "../../images/user-7.jpg";
import GraphSection from "./GraphSection";

const Home = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between lg:ml-28 lg:pl-10 p-6">
        <section>
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
        <section>
          <GraphSection></GraphSection>
        </section>
        <section>Section-3</section>
      </div>
    </>
  );
};

export default Home;
