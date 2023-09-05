import { useState } from "react";

const TodoItem = ({todos , setTodos , todo}) => {
	const [completed , setCompleted] = useState(todo.isCompleted)
	const handleDelete = (e) => {
		const updatedTodos = todos.filter((todo) => todo.id !== parseInt(e.target.parentElement.id));
		setTodos(updatedTodos);
		localStorage.setItem('todos' , JSON.stringify(updatedTodos));
		return;
	};

	const handleToggle = (e) => {
		let updatedTodos = [...todos];
		for(let i = 0 ; i < updatedTodos.length ; ++i)
			if(updatedTodos[i].id === parseInt(e.target.parentElement.id))
			{
				updatedTodos[i].isCompleted = !updatedTodos[i].isCompleted;
				setTodos(updatedTodos);
				localStorage.setItem('todos' , JSON.stringify(updatedTodos))
			}
		setCompleted(!completed)
		return;
	};

	return (
		<li className={`todo-item ${completed ? "completed" : "pending"}`} id = {todo.id}>
			<input
			type="checkbox"
			checked={completed}
			onChange={(e) => handleToggle(e)}
			/>
			<div className={completed === true ? "Done" : "Pending"}>{todo.text}</div>
			<button className = 'delete-button' onClick={handleDelete}>Delete Me</button>
		</li>
	 );
}
 
export default TodoItem;