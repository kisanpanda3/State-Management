import { useState } from "react";

function AddTodo({ handleAdd }) {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        placeholder="Add Something"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => handleAdd(text)}>Add</button>
    </div>
  );
}
export default AddTodo;
