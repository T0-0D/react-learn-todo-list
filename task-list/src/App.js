import Todo from './components/Todo'

function App (props) {
  //　tasks配列を文字列に変換
  const taskList = props.tasks.map(task => (
    <Todo id={task.id} name={task.name} completed={task.completed} />
  ));

  return (
    <div>
      
      <h1 className="title-page">Task List</h1>
        <form>
          <label>
            <h2>Type your task here!</h2>
          </label>
          <input type="text" autoComplete="off" />
          <button type="submit">
            Add
          </button>
        </form>

        <div>
          <button type="button">
            <span>All Tasks</span>
          </button>
          <button type="button">
            <span>Undone Tasks</span>
          </button>
          <button type="button">
            <span>Completed Tasks</span>
          </button>
        </div>

        <h2 id="list-heading">3 Tasks Remaining</h2>
        <Todo name="Eat" />
        <Todo name="Sleep" />
        <Todo name="Repeat" />
    </div>
  );
}
export default App;
