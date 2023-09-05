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



	return ( <div>
			<h1>Todo List</h1>
			<div className='form-container'>
				<form className="form" onSubmit={handleSubmit}>
				<input
					className='input-field'
					type="text"
					placeholder="Enter the todo"
					value = {newTodo}
					onChange = {(e) =>  setNewTodo(e.target.value)}
				/>
				<button className='add-button'>Add New Todo Item</button>
				</form>
			</div>

			<TodoList todos = {todos} setTodos={setTodos}></TodoList>
	</div> );
}

export default Form;