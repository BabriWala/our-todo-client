import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const EditTodo = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  let navigate = useNavigate();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    fetch(`https://our-todo-server.vercel.app/todos/${id}`)
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(title, description)
    const updateTodo = {
      title: title,
      description: description,
    };
    const convertedToJSONStringify = JSON.stringify(updateTodo);
    // console.log(convertedToJSONStringify);

    fetch(`https://our-todo-server.vercel.app/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: convertedToJSONStringify,
    });
    navigate("/");
  };

  return (
    <div>
      <h3> Edit Todo: {id} </h3>
      <form onSubmit={handleSubmit}>
        <input
          className="border p-2 block mb-2 mx-10"
          type="text"
          placeholder="todo title"
          defaultValue={todo?.title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="border p-2 block mb-2 mx-10"
          type="text"
          defaultValue={todo?.description}
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

export default EditTodo;
