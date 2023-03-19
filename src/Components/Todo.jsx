import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
function Todo() {
  const [todos, setTodos] = useState([]);
  const handleAdd = (text) => {
    setTodos([
      ...todos,
      {
        id: todos.length + Date.now(),
        title: text,
        status: false
      }
    ]);
  };
  const handleToggle = (id) => {
    //to be done later
    const updatedData = todos.map((item) =>
      item.id === id
        ? {
            ...item,
            status: !item.status
          }
        : item
    );
    setTodos(updatedData);
  };

  const handleDelete = (id) => {
    const updatedData = todos.filter((item) => item.id !== id);
    setTodos(updatedData);
  };

  return (
    <div>
      <AddTodo handleAdd={handleAdd} />
      <div>
        <TodoList
          data={todos.filter((item) => !item.status)}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />
      </div>
      <div>
        <h1>Completed</h1>
        <TodoList
          data={todos.filter((item) => item.status)}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}
export default Todo;
