import { useParams } from "react-router-dom";
import { FormEvent, useEffect } from "react";
import { Category } from "@/utils/localStorageHandler";
import AddItem from "../../components/category page/AddItem";

const Category = () => {
  const { category } = useParams<string>();

  const Items = JSON.parse(localStorage.getItem("Items") || "{}");

  const categoryItems: Category =
    Items[category as string] || (Items[category as string] = {});

  console.log(categoryItems);

  useEffect(() => {
    localStorage.setItem("Items", JSON.stringify(Items));
  }, [categoryItems]);

  const itemAdded = (e: FormEvent) => {
    console.log(e)
  }

  return (
    <>
      <main className="flex flex-col justify-center items-center text-center gap-2 pt-10">
        <h1>{category?.replace(/_/g, " ")}</h1>
        <h2>Category</h2>
        <AddItem onSubmit={itemAdded} />
        <p>{JSON.stringify(categoryItems)}</p>
        <p>from Items:</p>
        {populateItems(categoryItems)}
      </main>
    </>
  );
};

export default Category;

const populateItems = (itemsArray: Category) => {

  return (
    <>
      {Object.keys(itemsArray).map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </>
  );
};
