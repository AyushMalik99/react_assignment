const TodoList = ({todos , setTodos}) => {
	const handleDelete = (e) => {
		alert(e.target.id);
		const updatedTodos = todos.filter((todo) => todo.id !== parseInt(e.target.id));
		console.log(todos , updatedTodos);
		setTodos(updatedTodos);
		localStorage.setItem('todos' , JSON.stringify(updatedTodos));
		return;
	};
	return (
		<div>
			<h1>{"All Todos"}</h1>
			{
					todos.map((todo) =>
						<div>
							<h4>{todo.text}</h4>
							<h4>{todo.id}</h4>
							<h4>{todo.isCompleted === true ? "Done" : "Pending"}</h4>
							<button id = {todo.id} onClick={handleDelete}>Delete Me</button>
						</div>
				)
			}
		</div>
	);
}

export default TodoList;