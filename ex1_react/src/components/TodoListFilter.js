import { useState } from "react";

function TodoListFilter({ onFilter, onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Pesquisar..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          onSearch(e.target.value);
        }}
      />
      <button onClick={() => onFilter("all")}>All</button>
      <button onClick={() => onFilter("active")}>Active</button>
      <button onClick={() => onFilter("completed")}>Completed</button>
    </div>
  );
}

export default TodoListFilter;
