import React from "react";
import ActiveRoute from "../ActiveRoute/ActiveRoute";
import { HiOutlineHome } from "@react-icons/all-files/hi/HiOutlineHome";
import { RiProfileLine } from "@react-icons/all-files/ri/RiProfileLine";
import { CgList } from "@react-icons/all-files/cg/CgList";
import { FaRegUser } from "@react-icons/all-files/fa/FaRegUser";
import { HiSearch } from "@react-icons/all-files/hi/HiSearch";
import { FaRegBell } from "@react-icons/all-files/fa/FaRegBell";
import { HiOutlineLogout } from "@react-icons/all-files/hi/HiOutlineLogout";
import logo from "../../images/logo.png";

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: "/",
      name: "HOME",
      icon: <HiOutlineHome />,
    },
    {
      id: 2,
      path: "/dashboard",
      name: "DASHBOARD",
      icon: <RiProfileLine />,
    },
    {
      id: 3,
      path: "/blogs",
      name: "BLOGS",
      icon: <CgList />,
    },
    {
      id: 4,
      path: "/profile",
      name: "Profile",
      icon: <FaRegUser />,
    },
  ];
  return (
    <>
      <nav className="bg-white mr-0 fixed bottom-0 lg:left-0 w-full lg:w-fit lg:inset-y-0 flex flex-row lg:flex-col justify-center items-center lg:justify-between p-3 z-50">
        <div className="flex flex-row-reverse lg:flex-col items-center gap-4 lg:gap-y-10">
          <div>
            <img className="hidden lg:block w-16 mx-auto" src={logo} alt="" />
            <div className="text-2xl lg:text-3xl bg-white text-neutral t w-fit p-3 rounded-xl mx-auto hover:text-primary">
              <HiSearch />
            </div>
          </div>
          <div className="flex flex-row lg:flex-col gap-8">
            {links.map((link) => (
              <div key={link.id}>
                <ActiveRoute to={link.path}>{link.icon}</ActiveRoute>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="text-2xl lg:text-3xl bg-white text-neutral w-fit mx-auto p-3 rounded-xl hover:text-primary">
            <FaRegBell />
          </div>
          <div className="text-2xl lg:text-3xl bg-white text-neutral w-fit mx-auto p-3 rounded-xl hover:text-primary mt-4">
            <HiOutlineLogout />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
