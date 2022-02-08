import {TodoListContext} from "./TodoListContext";
import {useContext} from "react";
import TodoListRow from "./TodoListRow";

const TodoList = ({dispatch}) => {
    const todos = useContext(TodoListContext)

    const list = todos.map(todo => {
            return <TodoListRow
                todo={todo}
                dispatch={dispatch}
                key={todo.id}
            />
        }
    )

    return (
        <div className={"text-center"}>
            <ul className={"list-group"}>
                {list}
            </ul>
        </div>
    )
}


export default TodoList