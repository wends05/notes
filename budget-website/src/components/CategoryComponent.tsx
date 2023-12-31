import { Link, useNavigate } from "react-router-dom"

const CategoryComponent = ({image, title, to}:
{
  image: string,
  title: string,
  to: string
}) => {
  return (
    <Link className={"card"} to={`${to}`}>
      <img
        src={image}
        alt={title}
        className={"image"}
        />
      {title}
    </Link>
  )
}

export default CategoryComponent