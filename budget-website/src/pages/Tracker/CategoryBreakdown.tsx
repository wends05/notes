import { Categories } from "@/utils/localStorageHandler";
import { Link, useLoaderData } from "react-router-dom";
import Progress from "./Progress";

export const CategoryBreakdown = () => {
  const Items = useLoaderData() as Categories;

  return (
    <main className="">
      <table className="border-separate border border-slate-500 border-spacing-2 text-center ">
        <thead className="text-center">
          <tr>
            <th>Category</th>
            <th>Items</th>
            <th>Budget</th>
            <th>Total</th>
            <th>Difference</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(Items).map((category, index) => (
            <tr key={index} className="bg-zinc-100 text-center">
              <td className="py-2"><Link className="bg-slate-300 px-2 mx-1 py-1 rounded-xl hover:bg-slate-400" to={`../category/${category}`}>
                {category}
              </Link></td>
              <td>
                {Items[category].Items.length}
              </td>
              <td>{Items[category as string].Budget}</td>
              <td>{Items[category as string].Total}</td>
              <td>
                <Progress
                  budget={Items[category].Budget as number}
                  total={Items[category].Total as number}
                />
              </td>
            </tr>
          ))}
        </tbody>
        
      </table>
    </main>
  );
};


