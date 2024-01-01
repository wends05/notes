
import { Link } from "react-router-dom";

const HeaderLinks = [
  {
    page: "Home",
    href: "/home"
  },
  {
    page: "About",
    href: "/about"
  },
  {
    page: "Tracker",
    href: "/tracker"
  },
  {
    page: "Settings",
    href: "/settings"
  }
]

const Header = () => {
  return (
  <>
    <nav
      className="hidden md:flex absolute z-50 justify-center gap-4 mt-2 mx-2 left-1/2 -translate-x-1/2 w-3/4 items-center bg-slate-500 text-white rounded-md"
    >
      {
        HeaderLinks.map((page, index)=> (
          <Link key={index} to={page.href} className="btn">
            {page.page}
          </Link>
        ))
      }
    </nav>
    <nav
      className="md:hidden absolute left-1/2 -translate-x-1/2 bg-slate-500 z-50 rounded-md w-1/2 flex flex-col gap-2"
    >
      {
        HeaderLinks.map((page, index) => (
          <Link key={index} to={page.href} className="btn">
            {page.page}
          </Link>
        ))
      }
    </nav>
  </>
)
}

export default Header