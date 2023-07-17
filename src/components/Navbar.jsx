import { Link } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Add dish",
      path: "/add",
    },
  ];

  return (
    <nav className="flex h-16 items-center justify-between text-gray-500 list-none px-28 shadow-md bg-gray-50">
      <div>
        <p className="text-2xl font-bold capitalize">HELLO</p>
      </div>
      <div className="flex items-center justify-evenly gap-10 cursor-pointer">
        {navItems.map((item, i) => (
          <Link className="font-semibold" key={i} to={item.path}>
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
