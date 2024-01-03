import CategoryNav from "@/components/category page nav/CategoryNav";
import { Outlet } from "react-router-dom";
import { images } from "@/assets/images";

const Outline = () => {
  return (
    <main className="items-start pt-20">
      <CategoryNav />
      <Outlet />
    </main>
  );
};

export const categories: {
  category: string;
  imageLink: string;
  to: string;
}[] =
[
  {
    category: "Bills",
    imageLink: images.bills,
    to: "/bills",
  },
  {
    category: "Food / Drinks",
    imageLink: images.food,
    to: "/food_and_drinks",
  },
  {
    category: "Lifestyle",
    imageLink: images.lifestyle,
    to: "/lifestyle",
  },
  {
    category: "Transportation",
    imageLink: images.transportation,
    to: "/transportation",
  },
];

export default Outline;
