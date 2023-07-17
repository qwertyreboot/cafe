import Input from "../components/Input";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useReducer } from "react";

const initialState = {
  name: "",
  image: "",
  price: 0,
  rating: 0,
  time: 0,
};

function reducer(state, { action, data }) {
  switch (action) {
    case "set_name": {
      return { ...state, name: data };
    }
    case "set_price": {
      return { ...state, price: Number(data) };
    }
    case "set_image": {
      return { ...state, image: data };
    }
    case "set_rating": {
      return { ...state, rating: Number(data) };
    }
    case "set_time": {
      return { ...state, time: Number(data) };
    }
    case "reset": {
      return { ...initialState };
    }
    default:
      return state;
  }
}

export default function Add() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const addDish = (dish) => {
    const localDishes = JSON.parse(localStorage.getItem("dishes") ?? "[]");
    localStorage.setItem("dishes", JSON.stringify([dish, ...localDishes]));
  };

  return (
    <>
      <Navbar />
      <h1 className="text-3xl font-bold mt-16 text-center text-gray-600">
        Add Dish
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addDish({ id: new Date(), ...state });
          dispatch({ action: "reset" });
          navigate("/");
        }}
        className="w-96 m-auto mt-10"
      >
        <Input
          value={state.name}
          onChange={(e) =>
            dispatch({ action: "set_name", data: e.target.value })
          }
          label="Name"
          name="name"
          placeholder="Enter dish name"
        />
        <Input
          value={state.image}
          onChange={(e) =>
            dispatch({ action: "set_image", data: e.target.value })
          }
          label="Image"
          name="image"
          type="url"
          placeholder="Enter image url"
        />
        <Input
          value={state.price}
          onChange={(e) =>
            dispatch({ action: "set_price", data: e.target.value })
          }
          label="Price"
          name="price"
          type="number"
          placeholder="Enter delevery time in ruppes"
        />
        <Input
          value={state.time}
          onChange={(e) =>
            dispatch({ action: "set_time", data: e.target.value })
          }
          label="Time"
          name="time"
          type="number"
          placeholder="Enter delevery time in minutes"
        />
        <Input
          value={state.rating}
          onChange={(e) =>
            dispatch({ action: "set_rating", data: e.target.value })
          }
          label="Rating"
          name="rating"
          type="number"
          step={0.1}
          max={5}
          placeholder="Enter a rating between 0 to 5"
        />

        <div className="mt-10 flex justify-end">
          <button className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-700 shadow">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
