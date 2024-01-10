import { NavLink } from "react-router-dom";
import { categories } from "@/pages/categories/Outline";
import { useState } from "react";
import { XCircle } from "lucide-react";

const CategoryNav = () => {
  const [Open, setOpen] = useState(false);

  return (
    <>
      <nav className="hidden sm:flex items-center rounded-md justify-center gap-2">
        {categories.map((nav, index) => (
          <NavLink
            key={index}
            to={`/category${nav.to}`}
            className={
              "flex flex-row bg-slate-600 rounded-md text-center items-center p-2 hover:bg-slate-600 text-white"
            }
          >
            <img
              src={nav.imageLink}
              alt={nav.category}
              className="min-h-16 max-h-16"
            />
            <h3 className="truncate">{nav.category}</h3>
          </NavLink>
        ))}
      </nav>
      <nav className="sm:hidden w-[50%] flex justify-center align-middle ">
        <button
          className="hover:bg-slate-500 active:bg-slate-600 rounded-md p-2 flex flex-row bg-slate-400  text-white"
          onClick={() => setOpen((open) => !open)}
        >
          Categories
        </button>

        <div
          className={`w-60 flex flex-col absolute text-center align-middle justify-center items-center rounded-md p-2 text-white bg-slate-500 transition-all duration-500
            ${!Open && "opacity-0 -translate-y-[400px]"}
          `}
        >   
          <button
            className="items-center justify-center flex gap-2 bg-slate-600 hover:bg-slate-700 rounded-md p-2"
            onClick={() => setOpen((open) => !open)}
          >
            <p>Close</p>
            <XCircle />
          </button>
          <div className={"py-2 flex flex-col gap-2 w-full"}>
            {
            categories.map((nav, index) => (
              <NavLink to={`/category${nav.to}`} key={index} className={"bg-slate-400 rounded p-1 hover:bg-slate-600 flex flex-row items-center justify-center"} onClick={() => setOpen((open) => !open)}>
                <img src={nav.imageLink} alt={nav.category} className={"min-h-12 max-h-12"} />
                {nav.category}
              </NavLink>
            ))
          }
          </div>
          
        </div>
      </nav>
    </>
  );
};

export default CategoryNav;
