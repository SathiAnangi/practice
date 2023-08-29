import { createStore } from "redux";

const initialstate = {
    todos: [],
    nextId: 1
};

// {id:3,title:"test"}

const todoReducer = (state = initialstate, action) => {
    switch (action.type
        ) {
        case "ADD_TODO":
            const newTodo = {id: state.nextId,title: action.payload.title}
            return {}

        case "EDIT_TODO":
            return {}
        case "DELETE_TODO":
            return {}
            default:
                return state
    }

}

const store  = createStore(todoReducer)

export default store;