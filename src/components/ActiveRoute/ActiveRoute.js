import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const ActiveRoute = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <>
      <Link
        className={
          match
            ? "text-2xl lg:text-3xl bg-primary text-slate-100 w-fit mx-auto p-3 rounded-xl block shadow-xl"
            : "text-2xl lg:text-3xl bg-white text-neutral t w-fit mx-auto p-3 rounded-xl block shadow-none hover:text-primary"
        }
        to={to}
        {...props}
      >
        <div> {children}</div>
      </Link>
    </>
  );
};

export default ActiveRoute;
