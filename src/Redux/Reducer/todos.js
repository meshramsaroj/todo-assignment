const initialSate = {
    data: []
}

const todos = (state=initialSate, action) => {
    switch(action.type) {
        case "ADD_TODO":
            return {
                ...state,
                data: [...state.data, action.payload]
        }
        case "DELETE_TODO": return {
            ...state,
            data: [...state.data.filter(todo=> todo.id !== action.id)]
        }
        case "UPDATE_TODO": return {
            ...state,
            data: [
                ...state.data.filter(todo=> todo.id !== action.id),
                {task: action.payload, id: action.id}
            ],
        }
        default:
            return state
    }
}

export default todos