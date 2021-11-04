import "./styles.css";

const ToDoList = ({ todos, handleTodo }) => {
  function handleClick(handler) {
    handleTodo(handler);
  }

  return (
    <>
      <ul>
        {todos.map((name, index) => {
          return (
            <div className="Tarefas">
              <li key={index}> {name}</li>{" "}
              <button className="Conc" onClick={() => handleClick(name)}>
                Concluir tarefa
              </button>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default ToDoList;
