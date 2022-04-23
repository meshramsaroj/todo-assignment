import { faPenToSquare, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {deleteTodo} from "../../Redux/Action"

const Todolist = ({handleUpdate}) => {
  const taskList = useSelector((state)=> state.todos.data )
  const dispatch = useDispatch();
 
  return (
    <div className='p-3'>
        <p className='dashed-line d-flex flex-row'>Task List</p>
      <ul>
      {taskList.map(todo=> (
        <li key={todo.id} className="d-flex justify-content-between my-2 list-item p-2 border rounded border-2">
          <p className='mb-0'>{todo.task.taskName}</p>
          <div>
          <button className='btn py-0 btn-transperent' onClick={()=> handleUpdate(todo)}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
          <button className='btn py-0 btn-transperent' onClick={()=> dispatch(deleteTodo(todo.id))}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
          </div>
        </li>
      ))}
      </ul>
    </div>
  )
}

export default Todolist
