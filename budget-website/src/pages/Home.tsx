import HomeCard from "../components/HomeCard";
import { images } from "../assets/images";

const Home = () => {
  const categories: {
    category: string;
    imageLink: string;
    to: string;
  }[] = [
    {
      category: "Bills",
      imageLink: images.bills,
      to: "/bills",
    },
    {
      category: "Food and Drinks",
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

  const Name = JSON.parse(localStorage.getItem("Name") || "user");
  return (
    <div className="main gap-10 relative">
      <h1>Hello, {(Name && Name) || "user"}!</h1>
      <p>Welcome to your Budget tracker. Pick a category for your expenses.</p>
      <div
        className="
            grid grid-cols-1 gap-2 bg-gray-400 w-3/4 p-4 rounded-lg
            sm:grid-cols-2"
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
