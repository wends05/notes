
type Data = {
  Name: string,
  Items: {
    [category: string]: {
      Total: number,
      Budget: number,
      Items: {
        Item: string,
        Amount: string,
        Quantity: string
      }[]
    }
  }
}

const data : Data = {
  Name: "Wends",
  Items:
  {
    "Bills":
      {
        Total: 0,
        Budget: 0,
        Items: [
          {
            Item: "Rent",
            Amount: "1000",
            Quantity: "2"
          }
        ]
      },
    "Food and Drinks":
      {
        Total: 0,
        Budget: 0,
        Items: [
          {
            Item: "Pizza",
            Amount: "10",
            Quantity: "2"
          }
        ]
      },
    "Lifestyle":
      {
        Total: 0,
        Budget: 0,
        Items: [
          {
            Item: "Shoes",
            Amount: "100",
            Quantity: "2"
          }
        ]
      },
    "Transportation":
      {
        Total: 0,
        Budget: 0,
        Items: [
          {
            Item: "Gas",
            Amount: "10",
            Quantity: "2"
          }
        ]
      },
    
  }
}