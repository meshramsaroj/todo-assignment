import  {ADD_TODO, DELETE_TODO, UPDATE_TODO} from "./types"

export const addTodo = (payload) => {
    return ({
        type: ADD_TODO,
        payload
    })
}

export const deleteTodo = (id) => {
    return ({
        type: DELETE_TODO,
        id
    })
}

export const updateTodo = ({payload,id}) => {
    return ({
        type: UPDATE_TODO,
        payload,
        id
    })
}