import { NavLink } from "react-router-dom";
import { categories } from "@/pages/categories/Outline";

const CategoryNav = () => {
  return (
    <nav className="flex items-center rounded-md p-1 justify-center gap-2">
      {categories.map((nav, index) => (
        <NavLink key={index} to={`/category${nav.to}`} className={"flex flex-col bg-slate-600 rounded-md text-center items-center px-2 hover:bg-slate-600 text-white"}>
          <img src={nav.imageLink} alt={nav.category} className="min-h-16 max-h-16" />
          <h3 className="truncate">{nav.category}</h3>
        </NavLink>
      ))}
    </nav>
  );
};

export default CategoryNav;
