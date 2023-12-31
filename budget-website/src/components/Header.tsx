
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
    page: "Calendar",
    href: "/calendar"
  },
  {
    page: "Settings",
    href: "/settings"
  }
]

const Header = () => {
  return (
  <>
    <nav className={"flex absolute z-50 justify-center gap-4 mt-2 mx-2 left-1/2 -translate-x-1/2 w-3/4 items-center bg-slate-500 text-white rounded-md"}>
      {
        HeaderLinks.map((page, index)=> (
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