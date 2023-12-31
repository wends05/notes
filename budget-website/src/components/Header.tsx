
import { Link } from "react-router-dom";

const HeaderLinks = [
  {
    page: "Home",
    href: "/"
  },
  {
    page: "About",
    href: "/about"
  },
  {
    page: "Calendar",
    href: "/calendar"
  }
]

const Header = () => {
  return (
  <>
    <nav>
      {
        HeaderLinks.map((page)=> (
          <Link to={page.href}>
            {page.page}
          </Link>
        ))
      }
    </nav>
  </>
)
}

export default Header