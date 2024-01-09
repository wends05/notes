type ItemType = {
  Item: "water bil";
  Amount: 1000;
  Quantity: 1;
  Total: 1000;

  id: number;
  category: string;
};




export const Item = ({ params }: { params: ItemType }) => {
  return (
    <>
      <label>
        {params.Item}
      </label>
    </>
  );
};
