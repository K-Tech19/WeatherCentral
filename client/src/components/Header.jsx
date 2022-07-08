import React from "react";
import {Link} from "react-router-dom"

const Header = () => {
  return (
  <div className=" m-4  text-center">
    <nav className="flex justify-between space-x-4 my-4 mx-10 bg-orange-400 gap-8 px-8">
         <a href="#" className="font-bold">Weather Central</a>
      <ul>
        {[
          ["Home", "#"],
          ["About", "#"],
          ["Profile", "#"],
        ].map(([title, url]) => (
          <a
            href={url}
            className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:bg-slate-400"
          >
            {title}
          </a>
        ))}
      </ul>
    </nav>
    </div>
  );
};

export default Header;
