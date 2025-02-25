import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ViewTodo = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/todos/${id}`)
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, [id]);

  return (
    <div>
      <h3>Single TODO View : {id}</h3>
      {todo && (
        <>
          <h4>Title: {todo.title}</h4>
          <h4>Description: {todo.description}</h4>
        </>
      )}
    </div>
  );
};

export default ViewTodo;
