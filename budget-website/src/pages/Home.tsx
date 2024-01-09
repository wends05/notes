import HomeCard from "../components/HomeCard";
import { createStorage } from "@/utils/localStorageHandler";
import { categories } from "./categories/Outline";

const Home = () => {
  

  createStorage();

  const Name = JSON.parse(localStorage.getItem("Name") as string);

  
  return (
    <div className="main gap-10 p-2 relative text-center">
      <h1>Hello{Name ? (`, ${Name}`): ""}!</h1>
      <p>Welcome to your Budget tracker. Pick a category for your expenses.</p>
      <div
        className="
            grid grid-cols-1 gap-2 bg-gray-400 w-3/4 p-4 rounded-lg sm:grid-cols-2"
      >
        {categories.map((item, index) => (
          <HomeCard
            key={index}
            image={item.imageLink}
            title={item.category}
            to={item.to}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
