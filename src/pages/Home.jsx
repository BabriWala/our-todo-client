import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Home = () => {
  let navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState("");

  const getTodos = () => {
    fetch("https://our-todo-server.vercel.app/todos")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTodos(data);
      });
  };
  useEffect(() => {
    getTodos();
  }, []);

  const handleViewTodo = (id) => {
    console.log(id);
    navigate(`/view-todo/${id}`);
  };

  const handleEditTodo = (id) => {
    navigate(`/edit-todo/${id}`);
  };

  const handleDeleteTodo = (id) => {
    // console.log(id)
    fetch(`http://localhost:5000/todos/${id}`, { method: "DELETE" });
    // setMessage("Data has been deleted please refresh the page");
    getTodos();
  };
  return (
    <div>
      <h3>Home Page for To dos</h3>
      <h1> Todos Length = {todos.length}</h1>
      {message && message}
      <div className="m-5 grid grid-cols-3 gap-10">
        {todos &&
          todos.length > 0 &&
          todos.map((it) => {
            return (
              <div key={it?._id} className="border p-5 rounded shadow-lg">
                <h3>{it.title}</h3>
                <h3>{it.description}</h3>
                <button
                  onClick={() => handleViewTodo(it?._id)}
                  className="px-5 py-2 cursor-pointer bg-blue-400 text-black"
                >
                  View Details
                </button>
                <button
                  onClick={() => handleEditTodo(it?._id)}
                  className="px-5 py-2 cursor-pointer bg-lime-400 text-black"
                >
                  EDIT Todo
                </button>
                <button
                  onClick={() => handleDeleteTodo(it?._id)}
                  className="px-5 py-2 cursor-pointer bg-red-400 text-black"
                >
                  Delete Todo
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
