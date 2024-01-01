
const Category = (
  { category }: { category: string | undefined}
) => {

  console.log(category)

  return (
    <>
      <h1>{category}</h1>
    </>
  )
}

export const getItems = async () => {
  return localStorage.getItem("Items") && JSON.parse(localStorage.getItem("Items") || "")
}

export default Category
