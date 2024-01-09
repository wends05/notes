//@ts-nocheck


export const createStorage = () => {
  localStorage.getItem("Items")
    ? localStorage.getItem("Items")
    : localStorage.setItem("Items", JSON.stringify({}));
};

export type startPageFormProps =  {
  username: string
}

export const getName = async ({ request }) => {
  const formData = await request.formData()
  const Name : startPageFormProps = Object.fromEntries(formData)
  localStorage.setItem("Name", JSON.stringify(Name.username))
  return Name
}

export const submitItem = async ({ request }: { request: Request }) => {
  const formData = await request.formData()
  const ItemInfo : ItemData = Object.fromEntries(formData)
}

export type Categories = {
  [category: string]: Category;
};

export type Category = {
  [item: string]: ItemData;
};
export interface ItemData {
  id: number;
  Quantity?: number | 1;
  Amount?: number | 1;
  Total: number;
}

export type Data = {
  Name: string;
  Items: Categories;
};

// example chura sang localStorage

const exampleData: Data = {
  Name: "Wends",
  Items: {
    food_and_drinks: {
      Pizza: {
        id: 1,
        Quantity: 2,
        Amount: 10,
        Total: 20,
      },
      Burger: {
        id: 2,
        Quantity: 2,
        Amount: 10,
        Total: 20,
      },
    },
    bills: {
      Rent: {
        id: 3,
        Quantity: 2,
        Amount: 10,
        Total: 20,
      },
    },
  },
};
// const data: Data = {
//   Name: "Wends",
//   Items: {
//     bills: {
//       Total: 0,
//       Budget: 0,
//       Items: [
//         {
//           Item: "Rent",
//           Amount: "1000",
//           Quantity: "2",
//         },
//       ],
//     },
//     food_and_drinks: {
//       Total: 0,
//       Budget: 0,
//       Items: [
//         {
//           Item: "Pizza",
//           Amount: "10",
//           Quantity: "2",
//         },
//       ],
//     },
//     lifestyle: {
//       Total: 0,
//       Budget: 0,
//       Items: [
//         {
//           Item: "Shoes",
//           Amount: "100",
//           Quantity: "2",
//         },
//       ],
//     },
//     transportation: {
//       Total: 0,
//       Budget: 0,
//       Items: [
//         {
//           Item: "Gas",
//           Amount: "10",
//           Quantity: "2",
//         },
//       ],
//     },
//   },
// };
