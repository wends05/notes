import { NavLink } from "react-router-dom";

const HeaderLinks = [
  {
    page: "Home",
    href: "./home",
  },
  {
    page: "About",
    href: "./about",
  },
  {
    page: "Tracker",
    href: "./tracker",
  },
  {
    page: "Settings",
    href: "./settings",
  },
];

const Header = () => {
  return (
    <>
      <nav className="flex fixed w-[90%] gap-1 sm:w-3/4 z-50 justify-center sm:gap-4 py-1 mt-2 justify-cetner left-1/2 -translate-x-1/2 bg-slate-500 text-white rounded-md">
 
        <button >
          
        </button>
        {HeaderLinks.map((page, index) => (
          <NavLink key={index} to={`${page.href}`} className="btn">
            {page.page}
          </NavLink>
        ))}
      </nav>
    </>
  );
};

export default Header;
