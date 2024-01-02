import { LoaderFunction, useLoaderData } from "react-router-dom"

const Category = () => {

  const categoryLoaded = useLoaderData()
  console.log(categoryLoaded)

  return (
    <>
      <h1>{wah}</h1>
    </>
  )
}

export default Category

export const getItems : LoaderFunction<any> = async () => {
  const categoryLoaded = await localStorage.getItem(JSON.parse("Name"))
  return { categoryLoaded }
}


