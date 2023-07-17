import { useEffect, useState } from "react";

import DishCard from "../components/DishCard";
import Input from "../components/Input";
import Modal from "../components/Modal";
import MultiRangeSlider from "multi-range-slider-react";
import Navbar from "../components/Navbar";

export default function Home() {
  const [dishes, setDishes] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  const [filters, setFilters] = useState({
    rating_min: 0,
    rating_max: 5,
  });

  useEffect(() => {
    const localDishes = JSON.parse(localStorage.getItem("dishes") ?? "[]");
    setDishes(localDishes);
  }, []);

  useEffect(() => {
    const localDishes = JSON.parse(localStorage.getItem("dishes") ?? "[]");
    setDishes(
      localDishes.filter(
        (dish) =>
          dish.rating >= filters.rating_min && dish.rating <= filters.rating_max
      )
    );
  }, [filters]);

  return (
    <>
      <Navbar />
      <div className="w-[70%] m-auto mt-16">
        <div className="flex items-center justify-evenly gap-4">
          <Input
            onChange={(e) => {
              const searchTerm = e.target.value.trim().toLowerCase();
              const localDishes = JSON.parse(
                localStorage.getItem("dishes") ?? "[]"
              );
              setDishes(
                localDishes.filter((dish) =>
                  dish.name.trim().toLowerCase().includes(searchTerm)
                )
              );
            }}
            className="flex-1 w-full"
            placeholder="Start typing to search by name"
          />

          <button
            type="button"
            onClick={() => setShowFilters(true)}
            className="flex-initial w-48 rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            Open Filters
          </button>
        </div>
        <Modal
          show={showFilters}
          onClose={() => setShowFilters(false)}
          title="Filters"
        >
          <MultiRangeSlider
            min={1}
            max={5}
            step={0.5}
            minValue={filters.rating_min}
            maxValue={filters.rating_max}
            onInput={(e) => {
              setFilters({
                ...filters,
                rating_max: e.maxValue,
                rating_min: e.minValue,
              });
            }}
          />
        </Modal>
        <div className="flex flex-wrap gap-4 mt-8 items-center justify-center">
          {dishes.map((dish) => (
            <DishCard key={dish.name} dish={dish} />
          ))}
        </div>
      </div>
    </>
  );
}
