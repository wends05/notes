import { Categories } from "@/utils/localStorageHandler";
import { useLoaderData } from "react-router-dom";
import { CategoryBreakdown } from "./CategoryBreakdown";

const Tracker = () => {
  const Items = useLoaderData() as Categories;
  const { total, totalBudget } = getTotals(Items);

  return (
    <main className="main">
      <h1>Tracker</h1>
      <div className="flex flex-row items-end gap-2 align-middle justify-center">
        <h2>Budget:</h2>
        <p>{totalBudget}</p>
      </div>
      <div className="flex flex-row items-end gap-2 align-middle justify-center">
        <h2>Total:</h2>
        <p>{total}</p>
      </div>
      <p className="pt-4 pb-2">Here is a breakdown of your totals and budgets:</p>
      <div className="px-2 bg-slate-500 overflow-x-scroll">
      <CategoryBreakdown />

      </div>
      <p className="mx-10 pt-2">
        The higher the Difference percentage shown, the less likely are you to spend your money.
      </p>
    </main>
  );
};

export default Tracker;

const getTotals = (Items: Categories) => {
  let total = 0;
  let totalBudget = 0;

  for (const categories in Items) {
    total += Items[categories].Total;
    totalBudget += Items[categories].Budget;
  }

  return { total, totalBudget };
};
