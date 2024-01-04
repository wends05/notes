export const createStorage = () => {
  localStorage.getItem("Items")
    ? localStorage.getItem("Items")
    : localStorage.setItem("Items", JSON.stringify({}));
};


export type Categories = {
  [category: string]: CategoryData;
};

export type CategoryData = {
  [Item : string]: Item2 | {}
}
export interface Item2 {
  id: number
  Quantity?: number | 1;
  Amount?: number | 1;
  Total: number
}

export type Data = {
  Name: string;
  Items: Categories;
};

// example chura sang localStorage

const exampleData : Data = {
  Name: "Wends",
  Items: {
    food_and_drinks:
    {
      "Matcha Latte": {
        id: 1,
        Quantity: 10,
        Amount: 10,
        Total: 10
      }
    }
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
