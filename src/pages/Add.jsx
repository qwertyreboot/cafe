import Input from "../components/Input";
import Navbar from "../components/Navbar";

export default function Add() {
  return (
    <>
      <Navbar />
      <h1 className="text-3xl font-bold mt-16 text-center text-gray-600">
        Add Dish
      </h1>
      <form className="w-96 m-auto mt-10">
        <Input label="Name" name="name" placeholder="Enter dish name" />
        <Input
          label="Image"
          name="image"
          type="url"
          placeholder="Enter image url"
        />
        <Input
          label="Price"
          name="price"
          type="number"
          placeholder="Enter delevery time in ruppes"
        />
        <Input
          label="Time"
          name="time"
          type="number"
          placeholder="Enter delevery time in minutes"
        />
        <Input
          label="Rating"
          name="rating"
          type="number"
          step={0.1}
          max={5}
          placeholder="Enter a rating between 0 to 5"
        />
      </form>
    </>
  );
}
