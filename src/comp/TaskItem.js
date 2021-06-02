import React from 'react'
import { useDispatch } from 'react-redux'
import { complet, deleteTask} from '../js/action/taskAction'
import EditTask from './EditTask'

const TaskItem = ({todo}) => {
    const dispatch = useDispatch()
    return (
        <div className="task">
            <div className={todo.isDone ? "Done" : null}>{todo.task}</div>
            <div>
            <button onClick={ () => dispatch(complet(todo.id))}>{todo.isDone? "undo" : "Complete"} </button>
            <EditTask todo={todo}/>
            <button onClick={ () => dispatch(deleteTask(todo.id))}>Delete </button>


            </div>
        </div>
    )
}

export default TaskItem
