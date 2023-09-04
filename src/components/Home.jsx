import {useState} from 'react'
import TodoList from './TodoList';
const Form = () => {
	const storedTodosJSON = localStorage.getItem('todos');
	const storedTodos = JSON.parse(storedTodosJSON);
	const [todos , setTodos] = useState(storedTodos || []);
	const [newTodo , setNewTodo] = useState("");

	const handleSubmit = (e) => {
		if(newTodo === "")
		{
			alert("Empty todo!!!")
			return;
		}

		e.preventDefault(); // avoiding page reload

		const newTodoObject = {
			id: Date.now(),
			text: newTodo,
			isCompleted: false,
		};

		const newTodos = [...todos , newTodoObject];
		setTodos(newTodos);
		setNewTodo("");
		localStorage.setItem('todos' , JSON.stringify(newTodos))
		return;
	}



	// localStorage.clear()
	console.log(localStorage);
	return ( <div>
		<form onSubmit={handleSubmit}>
		<input
			type="text"
			placeholder="Enter the todo"
			value = {newTodo}
			onChange = {(e) =>  setNewTodo(e.target.value)}
		/>
		<button>Add New Todo Item</button>
		<p>{newTodo}</p>
		</form>

		<div>
			<TodoList todos = {todos} setTodos={setTodos}></TodoList>
		</div>
	</div> );
}
 
export default Form;