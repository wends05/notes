import { NavLink } from "react-router-dom";
import { categories } from "@/pages/categories/Outline";
import { useState } from "react";
import { XCircle } from "lucide-react";

const CategoryNav = () => {
  const [Open, setOpen] = useState(true);

  return (
    <>
      <nav className="hidden sm:flex items-center rounded-md p-1 justify-center gap-2">
        {categories.map((nav, index) => (
          <NavLink
            key={index}
            to={`/category${nav.to}`}
            className={
              "flex flex-col bg-slate-600 rounded-md text-center items-center px-2 hover:bg-slate-600 text-white"
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
          className={`w-[50%] grid grid-cols-2 absolute p-2 text-center align-middle justify-center items-center rounded-md min-h-12 bg-slate-500
            ${Open ? "block" : "hidden"}
          `}
        >
          <p>Categories</p>

          
          <span className="items-center justify-center flex gap-x-2">
            <p>Close</p>
            <XCircle />
          </span>
        </div>
      </nav>
    </>
  );
};

export default CategoryNav;
