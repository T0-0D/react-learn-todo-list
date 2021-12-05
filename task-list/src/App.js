import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

function App (props) {
  function addTask (name) {
    alert(name);
  }

  //　tasks配列をTodoコンポーネントに代入
  const taskList = props.tasks.map(task => (
    <Todo 
      id={task.id} 
      name={task.name}
      completed={task.completed}
    />
  ));

  return (
    <div>
      <h1 className="title-page">Task List</h1>
      <Form addTask={addTask} />
      <FilterButton />
      <FilterButton />
      <FilterButton />
      
      <h2 id="list-heading">3 Tasks Remaining</h2>
      {taskList}
      </div>
  );
}
export default App;
