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

/*
Exercise for js+React:
Create a simple to-do list! UI shall contain a list of to-do items and controls to modify the list:

+You can add an item with title + description to the to-do list
-You can remove an item
-You can edit the description and title
-You can mark it done, when done its not editable

 */