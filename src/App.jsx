import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import AddTodo from "./pages/AddTodo";
import ViewTodo from "./pages/ViewTodo";
import EditTodo from "./pages/EditTodo";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout></MainLayout>}>
          <Route path="/" element={<Home></Home>} />
          <Route path="/add-todo" element={<AddTodo></AddTodo>} />
          <Route path="/view-todo/:id" element={<ViewTodo></ViewTodo>} />
          <Route path="/edit-todo/:id" element={<EditTodo></EditTodo>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
