import { AiTwotoneStar } from "react-icons/ai";

export default function DishCard({ dish }) {
  return (
    <div className="w-56 p-2 rounded bg-gray-50 shadow hover:shadow-xl cursor-pointer">
      <div>
        <img
          className="!w-[208px] !h-[139px] rounded shadow"
          src={dish.image}
          alt={dish.name}
        />
      </div>
      <div className="px-4 py-2">
        <div className="mt-2 flex justify-between items-center">
          <h3 className="font-semibold text-2xl text-gray-600">{dish.name}</h3>
          <div className="flex gap-1 p-0.5 px-2 text-sm rounded shadow-sm items-center text-white font-semibold bg-green-500">
            <span>{dish.rating}</span> <AiTwotoneStar size={10} />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">{dish.time} mins</div>
          <p className="text-2xl text-gray-800">{dish.price} $</p>
        </div>
      </div>
    </div>
  );
}
