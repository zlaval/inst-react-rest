import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {useImmerReducer} from "use-immer";
import todoListReducer, {initialState} from "./containers/todoListReducer";
import TodoList from "./componenets/todo_list/TodoList";
import TodoEditor from "./componenets/todo_list/TodoEditor";
import {TodoListContext} from "./componenets/todo_list/TodoListContext";
import {animated, useSpring} from "react-spring";

const App = () => {
    const [todos, dispatch] = useImmerReducer(todoListReducer, initialState)
    const animation = useSpring({
        from: {opacity: 0},
        to: {opacity: 1},
        delay: 500
    })

    return (

        <TodoListContext.Provider value={todos}>
            <div className={"container"}>
                <div className={"text-center app-title"}>
                    <animated.h1 style={animation}> Zalan's TODO list</animated.h1>
                </div>
                <div className={"col-md-12"}>
                    <TodoEditor dispatch={dispatch}></TodoEditor>
                </div>

                <div className={"col-md-12 my-5"}>
                    <TodoList dispatch={dispatch}></TodoList>
                </div>
            </div>
        </TodoListContext.Provider>
    );
}

export default App;