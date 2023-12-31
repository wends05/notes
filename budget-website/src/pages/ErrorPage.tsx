import { Link } from "react-router-dom"

const ErrorPage = () => {

  return (
    <div className="main">
      Oops! Page not found. Please return to the Home Page.
      <Link to="/home">
        <button className={"btn"}>Home</button>
      </Link>
    </div>
  )
}

export default ErrorPage