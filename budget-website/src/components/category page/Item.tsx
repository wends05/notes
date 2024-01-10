import { Item } from "@/utils/localStorageHandler";
import { Form } from "react-router-dom";

export const ItemDisplay = ({
  params
}: { params: Item }) => {

  const { Quantity, Name, Amount, Total } = params
  return (
    <>
      <Form className="bg-slate-200 p-4 flex justify-between items-center gap-2 rounded-md">
        <input type="text" name="name" id="" value={Name} />
        
      </Form>
    </>
  );
};
