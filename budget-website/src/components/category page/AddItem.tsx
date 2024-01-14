import { FormEvent, useEffect, useState } from "react";
import { Form } from "react-router-dom";

const AddItem = ({ ItemAdded }: { ItemAdded: (e: FormEvent) => void }) => {


  const [Name, setName] = useState("");
  const [Amount, setAmount] = useState(1);
  const [Quantity, setQuantity] = useState(1);
  const [Total, setTotal] = useState(1);

  useEffect(() => {
    setTotal(Amount * Quantity);
  }, [Amount, Quantity]);

  const resetInputs = () => {
    setName("");
    setAmount(1);
    setQuantity(1);
  };

  return (
    <Form
      className="bg-slate-500 grid grid-flow-row sm:grid-flow-col items-center justify-center p-2 rounded-md gap-2 text-white"
      method="post"
      onSubmit={(e: FormEvent) => {
        ItemAdded(e);
        resetInputs();
      }}
    >
      <div className={"flex flex-col col-span-2"}>
        <label htmlFor="Name" className={"w-full text-left"}>
          Item Name:
        </label>
        <input
          type="text"
          name="Name"
          required={true}
          placeholder="Item"
          id="Name"
          className="p-2 text-md h-8 w-36 rounded-md col-span-2 text-black text-center"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={"flex flex-col items-center"}>
        <label htmlFor="Quantity" className={"text-center w-full"}>
          Quantity
        </label>
        <input
          type="number"
          required={true}
          min={1}
          className="p-2 text-md h-8 rounded-md text-black w-16 appearance-none text-center"
          id="Quantity"
          name="Quantity"
          value={Quantity}
          placeholder="1"
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
      </div>
      <div className={"flex flex-col items-center"}>
        <label htmlFor="Amount" className={"text-center w-full"}>
          Amount
        </label>
        <input
          type="number"
          required={true}
          min={1}
          className="p-2 text-md h-8 rounded-md text-black text-center w-16 appearance-none"
          id="Amount"
          name="Amount"
          value={Amount}
          placeholder="1"
          step={0.01}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
        />
      </div>
      <div
        className={
          "flex flex-col items-center col-span-2 w-full bg-slate-500 justify-normal"
        }
      >
        <label htmlFor="Total" className={""}>
          Total
        </label>
        <input
          type="number"
          required={true}
          min={1}
          className="p-2 text-md text-center h-8 rounded-md text-black w-24"
          id="Total"
          name="Total"
          value={Total}
          readOnly={true}
        />
      </div>
      <button
        type="submit"
        className="btn col-span-2 mx-10 sm:mx-2 appearance-none"
      >
        Enter
      </button>
    </Form>
  );
};

export default AddItem;
