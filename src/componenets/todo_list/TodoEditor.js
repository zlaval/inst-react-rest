import TextInput from "../ui/TextInput";
import TextArea from "../ui/TextArea";
import {ADD_TODO, DELETE_TODO, MODIFY_TODO} from "../../containers/actions";
import {Todo} from "../../containers/Todo";
import {useState} from "react";

const TodoEditor = ({dispatch, todo, closeOnEvent}) => {
    const [title, setTitle] = useState(todo ? todo.title : "")
    const [description, setDescription] = useState(todo ? todo.description : "")

    const onEventOption = () => {
        if (closeOnEvent) {
            closeOnEvent(false)
        }
    }

    const save = () => {
        const action = todo ? MODIFY_TODO : ADD_TODO
        const payload = todo ? new Todo(title, description, todo.id) : new Todo(title, description)
        dispatch({
            type: action,
            payload: payload

        })
        setTitle("")
        setDescription("")
        onEventOption()
    }

    const deleteTodo = () => {
        dispatch({
            type: DELETE_TODO,
            payload: todo
        })
        onEventOption()
    }

    const deleteButton = todo ? <button
        type="button"
        className="btn btn-danger m-1"
        onClick={e => deleteTodo()}
    >Delete</button> : <></>

    return (
        <div className={"container"}>
            <div className={"col-md-12"}>
                <TextInput id={"todo-title"}
                           label="Tile"
                           value={title}
                           onChange={setTitle}/>
            </div>
            <div className={"col-md-12"}>
                <TextArea id={"todo-description"}
                          label="Description"
                          value={description}
                          onChange={setDescription}
                />
            </div>

            <div className={"col-md-12 text-end"}>
                <button
                    type="button"
                    className="btn btn-primary m-1"
                    onClick={e => save()}
                >Save
                </button>
                {deleteButton}
            </div>

        </div>
    )
}

export default TodoEditor