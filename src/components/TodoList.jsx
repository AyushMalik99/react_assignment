import TodoItem from "./TodoItem";

const TodoList = ({todos , setTodos}) => {

	return (
		<div className="todo-list-container">
			<h1>{"All Todos"}</h1>
				<ul className="todo-list">
					{todos.map((todo) =>
						<TodoItem todos = {todos} setTodos={setTodos} todo = {todo} key = {todo.id}/>
					)}
				</ul>
		</div>
	);
}

export default TodoList;