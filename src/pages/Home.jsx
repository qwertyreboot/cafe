import DishCard from "../components/DishCard";
import Navbar from "../components/Navbar";

export default function Home() {
  const dishes = [
    {
      name: "Pizza",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQocrHavgFrfLPtHnenHhX5rhZHL4wOLcNA5MeflQRn9wQx2Y8nlptO9Gs6ss8J9oa5yPA&usqp=CAU",
      price: 150,
      time: 30,
      rating: 4.2,
    },
    {
      name: "Burger",
      image:
        "https://cdn.pixabay.com/photo/2016/03/14/10/32/food-in-trains-1255283_1280.jpg",
      price: 150,
      time: 30,
      rating: 4.2,
    },
    {
      name: "Burger2",
      image:
        "https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20230313180446431450_482x264jpg",
      price: 150,
      time: 30,
      rating: 4.2,
    },
    {
      name: "Briyani",
      image:
        "https://media.istockphoto.com/id/1492813806/photo/briyani-rice.jpg?b=1&s=170667a&w=0&k=20&c=GGf-z4S_ZxFcv21Ddh9aLK7J6HHEtxouN9OfKcG04h4=",
      price: 90,
      time: 10,
      rating: 4.5,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap w-[70%] m-auto mt-16 gap-4 items-center justify-center">
        {dishes.map((dish) => (
          <DishCard key={dish.name} dish={dish} />
        ))}
      </div>
    </>
  );
}
