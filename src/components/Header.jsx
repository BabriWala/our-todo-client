import { Link } from "react-router";

const Header = () => {
  return (
    <div className="border-b shadow-b bg-orange-200 py-5">
      <Link to={"/"} className=" bg-white border mr-5 p-1 rounded font-bold text-2xl">
        Home
      </Link>
      <Link to={"/add-todo"} className=" bg-white border mr-5 p-1 rounded font-bold text-2xl">
        Add ToDo
      </Link>
    </div>
  );
};

export default Header;
