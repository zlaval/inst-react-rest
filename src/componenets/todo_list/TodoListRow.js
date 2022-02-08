import {useState} from "react";
import TodoEditor from "./TodoEditor";

const TodoListRow = (props) => {
    const todo = props.todo

    const [editMode, setEditMode] = useState(false)

    let rowHtml = ""
    if (editMode) {
        rowHtml = <TodoEditor dispatch={props.dispatch}
                              todo={todo}
                              closeOnEvent={setEditMode}
        ></TodoEditor>
    } else {
        rowHtml =
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-10"}> {todo.title}</div>
                    <div className={"col-2 text-end"}>
                        <button
                            className={"btn btn-primary mx-2"}
                            onClick={e => setEditMode(true)}
                        >
                            Edit
                        </button>
                    </div>
                </div>
            </div>
    }

    return (
        <li
            className={"list-group-item"}
        >
            {rowHtml}
        </li>
    )
}

export default TodoListRow