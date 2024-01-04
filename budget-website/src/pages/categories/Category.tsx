import { useParams } from "react-router-dom";
import { useEffect, ReactNode } from "react";
import { CategoryData } from "@/utils/localStorageHandler";

const Category = () => {
  const { category } = useParams<string>();

  const Items = JSON.parse(localStorage.getItem("Items") || "{}");

  const categoryItems: CategoryData =
    Items[category as string] || (Items[category as string] = {});

  console.log(categoryItems);

  useEffect(() => {
    localStorage.setItem("Items", JSON.stringify(Items));
  }, [categoryItems]);

  return (
    <>
      <main className="flex flex-col justify-center items-center text-center pt-10">
        <h1>{category?.replace(/_/g, " ")}</h1>
        <h2>Category</h2>
        <p>{JSON.stringify(categoryItems)}</p>
        <p>from Items:</p>
        {populateItems(category, categoryItems)}
      </main>
    </>
  );
};

export default Category;

const populateItems = (
  category: string | undefined,
  itemsArray: CategoryData
) => {
  return <>
  {
    itemsArray && ""
  }</>;
};
