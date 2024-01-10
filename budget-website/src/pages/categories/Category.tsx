import { useActionData, useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Categories,
  CategoryType,
  Item,
  getNewID,
} from "@/utils/localStorageHandler";
import AddItem from "../../components/category page/AddItem";
import { ItemDisplay } from "@/components/category page/Item";

const Category = () => {
  const ItemAdded = useActionData() as Item;
  const getItems = useLoaderData();
  const { category } = useParams<string>();

  const [Items, setItems] = useState<Categories>(getItems as Categories);
  const [categoryItems, setcategoryItems] = useState<CategoryType>(
    Items[category as string] || (Items[category as string] = [])
  );

  useEffect(() => {
    localStorage.setItem("Items", JSON.stringify(Items));
    setcategoryItems(Items[category as string]);
  }, [getItems, Items]);

  useEffect(() => {
    if (ItemAdded) {
      console.log(ItemAdded);
      const itemWithID = getNewID(
        categoryItems.map((obj) => obj.id),
        ItemAdded
      );
      setcategoryItems([...categoryItems, itemWithID]);
      console.log(itemWithID, categoryItems);
    }
  }, [ItemAdded]);

  useEffect(() => {
    setItems({ ...Items, [category as string]: categoryItems });
  }, [categoryItems]);

  return (
    <>
      <main className="flex flex-col justify-center items-center text-center gap-2 pt-10 pb-20 px-2">
        <h1>{upperCaseTitle(category?.replace(/_/g, " ") as string)}</h1>
        <h2>Category</h2>
        <AddItem />
        <p>from Items:</p>
        {
          categoryItems.map((item, index) => {
          return (
            <ItemDisplay key={index}
              params={item}
            />
            );
          })
        }
      </main>
    </>
  );
};

const upperCaseTitle: (sentence: string) => string = (sentence: string) => {
  return sentence.replace(/\w\S*/g, (txt: string) => {
    return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
  });
};

export default Category;

export const getItems = async () => {
  const Items = await JSON.parse(localStorage.getItem("Items") || "{}");
  return Items;
};
