import { Item } from "@/utils/localStorageHandler";
import { Check, Pencil, Trash2, X } from "lucide-react";
import React, { FormEvent, useEffect, useState } from "react";
import { Form } from "react-router-dom";

interface ItemDisplay {
  params: Item;
  edit: (data: Item) => void;
  dlt: (data: Item) => void;
}


export const ItemDisplay: React.FC<ItemDisplay> = (
  { params, edit, dlt }
) => {
  const [editable, setEditable] = useState(false);

  const updateItems = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEditable((editable) => !editable);

    const newData: Item = {
      Name: Name,
      Quantity: Quantity,
      Amount: Amount,
      Total: Total,
      id: params.id,
    };
    edit(newData);
  };

  const cancelChanges = () => {
    setEditable(false);
    setName(params.Name);
    setQuantity(params.Quantity);
    setAmount(params.Amount);
    setTotal(params.Total);
  }

  const [Name, setName] = useState<string>(params.Name);
  const [Quantity, setQuantity] = useState<number>(params.Quantity);
  const [Amount, setAmount] = useState<number>(params.Amount);
  const [Total, setTotal] = useState<number>(params.Total);

  useEffect(() => {
    setTotal(Quantity * Amount);
  }, [Quantity, Amount])

  return (
    <>
      <Form
        className="bg-slate-200 p-2 outline-neutral-500 outline flex flex-col justify-between items-center gap-2 rounded-md text-center"
        method="post"
        onSubmit={updateItems}
      >
        <div className="grid grid-flow-col grid-rows-2 gap-x-2 justify-center items-center snap-center">
          <label htmlFor="name" className="text-center">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="text-center rounded-md"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            disabled={!editable}
          />
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            name="quantity"
            id="quantity"
            className="w-12 text-center  rounded-md"
            value={Quantity}
            min={1}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            disabled={!editable}
          />
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            className="w-12 text-center rounded-md"
            value={Amount}
            min={1}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            disabled={!editable}
          />
          <label htmlFor="total">Total</label>
          <input
            type="number"
            id="total"
            name="total"
            className="w-12 text-center rounded-md"
            value={Total? Total : 0}
            min={1}
            readOnly={true}
          />
        </div>
        <span className="flex flex-row-reverse pr-2 w-full">
          <div className="gap-x-2 flex flex-row-reverse bg-slate-400 p-1 rounded-md gap-2">
            <button
              type="button"
              onClick={()=> dlt(params)}
            >
              <Trash2 />
            </button>
            <button
              type="button"
              hidden={editable}
              onClick={() => setEditable(!editable)}
            >
              <Pencil />
            </button>
            <button
              type="submit"
              hidden={!editable}
            >
              <Check />
            </button>
            <button
              type="reset"
              hidden={!editable}
              onClick={cancelChanges}
            >
              <X />
            </button>
            

          </div>
        </span>
      </Form>
    </>
  );
};
