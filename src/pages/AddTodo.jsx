import { useState } from "react";
import { useNavigate } from "react-router";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(title, description)
    const newTodo = {
      title: title,
      description: description,
    };
    const convertedToJSONStringify = JSON.stringify(newTodo);
    console.log(convertedToJSONStringify);

    fetch("https://our-todo-server.vercel.app/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: convertedToJSONStringify,
    });
    navigate("/");
  };

  return (
    <div>
      <h3> Add New Todo </h3>
      <form onSubmit={handleSubmit}>
        <input
          className="border p-2 block mb-2 mx-10"
          type="text"
          placeholder="todo title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="border p-2 block mb-2 mx-10"
          type="text"
          placeholder="todo description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          type="submit"
          className="border cursor-pointer p-2 block mb-2 mx-10 border bg-black text-white rounded-2xl px-5"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
