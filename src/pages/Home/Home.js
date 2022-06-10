import React from "react";
import avatar from "../../images/user-7.jpg";

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
            <h2 className="text-2xl lg:text-3xl font-bold mb-3">
              $19,892
              <br />
              <small className="text-sm text-neutral">Account Balance</small>
            </h2>
            <h3 className="text-lg lg:text-xl font-bold mb-3">
              $19,892
              <br />
              <small className="text-sm text-neutral">
                Year-to-date-contribution
              </small>
            </h3>
            <h3 className="text-lg lg:text-xl font-bold mb-3">
              $19,892
              <br />
              <small className="text-sm text-neutral">Total Interest</small>
            </h3>
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
          <div className="my-8 pl-4">
            <p className="text-lg mb-4">Today</p>
          </div>
        </section>
        <section>Section-2</section>
        <section>Section-3</section>
      </div>
    </>
  );
};

export default Home;
