import { useActionData, useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Categories,
  CategoryType,
  Item,
  editTotal,
  getNewID,
} from "@/utils/localStorageHandler";
import AddItem from "../../components/category page/AddItem";
import { ItemDisplay } from "@/components/category page/Item";

const Category = () => {
  const { category } = useParams();
  const getData = useLoaderData() as Categories;
  let itemAdded: Item | null = useActionData() as Item;

  const [Items, setItems] = useState<Categories>(getData);

  const [CategoryData, setCategoryData] = useState<CategoryType>(
    Items[category as string] || {
      Items: [],
      Budget: 0,
      Total: 0,
    }
  );

  const [Budget, setBudget] = useState<number>(CategoryData.Budget);

  useEffect(() => {
    setCategoryData(
      Items[category as string] || {
        Items: [],
        Budget: 0,
        Total: 0,
      }
    );
    setBudget(CategoryData.Budget);
  }, [getData]);

  useEffect(() => {
    setItems((prevState) => ({
      ...prevState,
      [category as string]: CategoryData,
    }));
  }, [CategoryData]);

  useEffect(() => {
    localStorage.setItem("Items", JSON.stringify(Items));
  }, [Items]);

  useEffect(() => {
    if (itemAdded) {
      console.log(itemAdded);

      setCategoryData((prevState) => {
        const allIDs: number[] = [];

        for (const category in Items) {
          Items[category].Items.forEach((item: Item) => allIDs.push(item.id));
        }
        console.log(allIDs);
        const newItem = getNewID(allIDs, itemAdded as Item);

        if (!allIDs.includes(newItem.id)) {
          return {
            ...prevState,
            Items: [...prevState.Items, newItem],
            Total: Number(prevState.Total) + Number(newItem.Amount),
          };
        }
        console.error(
          "gaga may parehas nga id imo nga array wahahaha",
          allIDs,
          itemAdded
        );
        itemAdded = null;
        return prevState;
      });
    }
  }, [itemAdded]);

  const edititem = (data: Item) => {
    setCategoryData((prevState) => {
      const prevItem = prevState.Items.find((item) => item.id === data.id);

      return {
        ...prevState,
        Items: prevState.Items.map((item) => {
          if (item.id === data.id) {
            return data;
          }
          return item;
        }),
        Total: prevState.Total - prevItem!.Total + data.Total,
      };
    });
  };

  const deleteItem = (data: Item) => {
    setCategoryData((prevState) => ({
      ...prevState,
      Items: prevState.Items.filter((item) => item.id !== data.id),
      Total: prevState.Total - data.Total,
    }));
  };

  return (
    <>
      <main className="flex flex-col justify-center items-center text-center gap-2 pt-10 pb-20 px-2">
        <h1>{upperCaseTitle(category?.replace(/_/g, " ") as string)}</h1>
        <h2>Category</h2>
        <AddItem />
        <div>
          Budget: <input
            type="number"
            defaultValue={Budget}
            className="input text-center rounded-md w-20"
            onChange={(e) => {
              setBudget(parseFloat(e.target.value));
              setCategoryData((prev) => ({
                ...prev,
                Budget: parseFloat(e.target.value) | 0,
              }));
            }}
          />
          <p>Total: {CategoryData.Total}</p>
          <p>Difference: {CategoryData.Budget - CategoryData.Total}</p>
        </div>
        <p>from Items:</p>
        {CategoryData?.Items.map((item: Item) => (
          <ItemDisplay
            edit={edititem}
            dlt={deleteItem}
            key={item.id}
            params={item}
          />
        ))}
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
