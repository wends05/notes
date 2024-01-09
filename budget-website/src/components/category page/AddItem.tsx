import { FormEvent, useState } from "react";
import { Form } from "react-router-dom";

const AddItem = ({submitItem } : { submitItem : (e: FormEvent) => void }) => {
  const [Name, setName] = useState("");
  const [Amount, setAmount] = useState(0);
  const [Quantity, setQuantity] = useState(0);

  return (
    <Form
      className="bg-slate-500 grid grid-flow-row items-center justify-center p-2 rounded-md gap-2 text-white"
      onSubmit={submitItem}
    >
      <div className={"flex flex-col col-span-2"}>
        <label htmlFor="item" className={"w-full text-left"}>
          Item Name:
        </label>
        <input
        type="text"
        className="p-2 text-md h-8 rounded-md col-span-2 text-black"
        value={Name}
        onChange={(e)=>setName(e.target.value)}  
      />
      </div>
      <div className={"flex flex-col items-center"}>
        <label htmlFor="quantity" className={"text-left w-full"}>
          Quantity
        </label>
        <input
          type="number"
          required={true}
          min={0}
          className="p-2 text-md h-8 rounded-md text-black"
          id="quantity"
          name="quantity"
          placeholder="0"
          value={1}
          onChange={(e) => setQuantity(parseFloat(e.target.value))}
        />
      </div>
      <div className={"flex flex-col items-center"}>
        <label htmlFor="quantity" className={"text-left w-full"}>
          Amount
        </label>
        <input
          type="number"
          required={true}
          min={0}
          className="p-2 text-md h-8 rounded-md text-black"
          id="amount"
          name="amount"
          placeholder="0"
          onChange={(e) => setAmount(parseFloat(e.target.value))}
        />
      </div>
      <button
        type="submit"
        className="btn col-span-2 mx-10"
        value="Add"
      >
        Enter
      </button>
    </Form>
  );
};

export default AddItem;
