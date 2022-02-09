import {useState} from "react";
import TodoEditor from "./TodoEditor";
import {MODIFY_TODO} from "../../containers/actions";
import {Todo} from "../../containers/Todo";

const TodoListRow = ({todo, dispatch}) => {

    const [editMode, setEditMode] = useState(false)

    const markDone = () => {
        dispatch({
            type: MODIFY_TODO,
            payload: new Todo(todo.title, todo.description, todo.id, true)
        })
    }

    const backgroundColor = todo.done ? {
        backgroundColor: `lightgrey`
    } : {}

    const editorButtonHtml = todo.done ?
        <></> :
        <div className={"text-center"}>
            <button
                className={"btn btn-primary mx-2 my-1"}
                onClick={e => setEditMode(true)}
            >
                Edit
            </button>
            <button
                className={"btn btn-danger mx-2"}
                onClick={e => markDone(true)}
            >Done
            </button>
        </div>


    let rowHtml = ""
    if (editMode) {
        rowHtml = <TodoEditor dispatch={dispatch}
                              todo={todo}
                              closeOnEvent={setEditMode}
        ></TodoEditor>
    } else {
        rowHtml =
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-10"}> {todo.title}</div>
                    <div className={"col-2 text-end"}>
                        {editorButtonHtml}
                    </div>
                </div>
            </div>
    }

    return (
        <li
            className={"list-group-item"}
            style={backgroundColor}
        >
            {rowHtml}
        </li>
    )
}

export default TodoListRow