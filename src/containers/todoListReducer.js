import {ADD_TODO, DELETE_TODO, MODIFY_TODO} from "./actions";

function todoListReducer(state = initialState, action) {
    const payload = action.payload
    console.log(state)
    switch (action.type) {
        case ADD_TODO:
            state.push(payload)
            break
        case DELETE_TODO:
            return state.filter(it => it.id !== payload.id)
        case MODIFY_TODO:
            const index = state.findIndex(it => it.id === payload.id)
            state[index] = payload
            break
        default:
            break
    }
}

export const initialState = []

export default todoListReducer