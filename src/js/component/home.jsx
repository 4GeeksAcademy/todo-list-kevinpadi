import React, { useState } from "react";
import ListItem from "./listItem";

const Home = () => {
	const [ todo, setTodo ] = useState('')
	const [ todos, setTodos ] = useState([])

	const handleSubmit = (e) => {
		e.preventDefault()
		if(todo !== '') {
			setTodos([...todos, todo]) 
			setTodo('') 
		}
	}

	const handleDelete = (index) => {
		let newTodos = [...todos]
		newTodos.splice(index, 1)
		setTodos(newTodos)
	}

	return (
		<div className="container-fluid w-100 vh-100 bg-dark d-flex flex-column align-items-center pt-3">
			<h1 className="text-secondary fw-light fs-1">todos</h1>
			<div className="w-75 rounded bg-black shadow-lg p-3">
				<form onSubmit={handleSubmit} className='d-flex w-100 pb-1'>
					<input name="input" id="input" value={todo} onChange={(e) => {setTodo(e.target.value)}} type="text" className="form-control bg-black text-light border border-start-0 border-top-0 border-end-0 border-secondary rounded-0 p-2" aria-describedby="emailHelp" placeholder="What needs to be done?" />
				</form>
				<ul className="list-group">
					{todos.length !== 0 ? todos.map((todo, index) =>
						<ListItem todo={todo} index={index} handleDelete={handleDelete} />
					) : <label for="input" className="text-center py-3 fs-1">No hay tareas, añadir tareas</label>}
				</ul>
				<div>
					<span style={{fontSize: '14px'}}>{todos.length} todos left</span>
				</div>
			</div>
		</div>
	);
};

export default Home;
