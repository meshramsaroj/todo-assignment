import React, { useRef, useState } from 'react'
import { FormControl, Form} from 'react-bootstrap'
import "react-datetime-picker/dist/DateTimePicker.css"
import "react-calendar/dist/Calendar.css"
import "react-clock/dist/Clock.css"
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from "../../Redux/Action"
import cuid from 'cuid';

const Todo = ({isUpdate, handleUpdate, todo}) => {
		const [task, setTask] = useState("")
		const [time, setTime] = useState();
		const dispatch = useDispatch();
		const taskRef = useRef();
		const dateRef = useRef();

	function handleChange(e) {
		setTime(e.target.value)
	}

	const createTask = (e) => {
		e.preventDefault();
		const data = {
				"taskName": task,
				"time": time
		}
		dispatch(addTodo({task: data, id: cuid() }))  
		setTask("");
		setTime(new Date())
	}

	const updateTask =()=> {
			console.log("called update===", taskRef.current.value, dateRef.current.value, todo.id);
			const updatedTask = {
					"taskName": taskRef.current.value,
					"time": dateRef.current.value
			}
			dispatch(updateTodo({payload: updatedTask, id: todo.id}))
			handleUpdate();
	}

		return (
		<div className='p-3'>
				{!isUpdate ? 
				<Form onSubmit={(e)=>createTask(e)}>
						<div>
								<label>Task Name:</label>
								<FormControl
										type='text'
										value={task}
										onChange={(e)=> setTask(e.target.value)}
										placeholder="Type task name"
										className='mb-3'
										required
								/>
						</div>
						<div>
								<label>Time</label>
								<FormControl 
								type="datetime-local" 
								className="" 
								placeholder="Add Time" 
								aria-label="Time" 
								defaultValue={time}
								onChange={(e)=>handleChange(e)}
								required
								/>
								<button className='btn btn-dark mt-4' type="submit">Create</button>
						</div>
				 </Form>
					: 
					<div>
						<label>Task Name:</label>
						<FormControl
								type='text'
								ref={taskRef}
								defaultValue={todo.task.taskName}
								placeholder="Type task name"
								className='mb-3'
						/>
						<label>Time: </label>
						<FormControl 
						type="datetime-local" 
						className="" 
						placeholder="Add Time" 
						aria-label="Time" 
						defaultValue={todo.task.time}
						ref={dateRef}
						/>
						<button onClick={updateTask} className="btn btn-dark mt-3">Update</button> 
				 </div>
				 }

		</div>
	)
}

export default Todo
