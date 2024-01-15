import { Link } from "react-router-dom"

const HomeCard = ({image, title, to}:
{
  image: string,
  title: string,
  to: string
}) => {
  return (
    <Link className={"card"} to={`../category${to}`}>
      <img
        src={image}
        alt={title}
        className={"image"}
        />
      {title}
    </Link>
  )
}

export default HomeCard