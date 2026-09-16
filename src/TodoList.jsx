import { useState } from "react";
import { v4 as uuidv4 } from "uuid";


function TodoList() {

    let [todos, settodos] = useState([{ task: "sample task", id: uuidv4(), isDone: false }]);
    let [newTodo, setNewTodo] = useState("");


    let addNewTask = () => {

        // console.log("We need to add a new todo in the tasks.");

        settodos((previousTodos) => {
            return [...previousTodos, { task: newTodo, id: uuidv4(), isDone: false }]
        });
        setNewTodo("")

    }


    let updateTodoValue = (event) => {
        // console.log(event.target.value);
        setNewTodo(event.target.value);
    }


    let deleteTodo = (id) => {
        settodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    }

    let UpperCaseAll = () => {

        // console.log("Uppercase is activated");

        settodos((prevTodos) => {
            return prevTodos.map((todo) => { return { ...todo, task: todo.task.toUpperCase() } })
        })

        // let newArr = prevTodos.map((todo) => { return { ...todo, task: todo.task.toUpperCase() } })

        // console.log(todos);
        // console.log(newArr);
    }



    let LowerCaseAll = () => {
        // console.log("LowerCase is Activated");

        settodos((prevTodos) => {

            return prevTodos.map((todo) => { return { ...todo, task: todo.task.toLowerCase() } })

        })
    }


    let UpperCaseOne = (id) => {

        settodos((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id == id) {
                    return { ...todo, task: todo.task.toUpperCase() }
                } else {
                    return todo;
                }
            })
        }
        )


    }





    let MarkasDoneAll = () => {


        settodos((prevTodos) => {

            return prevTodos.map((todo) => { return { ...todo, isDone: true } })

        })
    }



    let MarkasDone = (id) => {

        settodos((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id == id) {
                    return { ...todo, isDone: true }
                } else {
                    return todo;
                }
            })
        }
        )
    }






    return (
        <div>
            <input type="text" placeholder="Enter Tasks here" value={newTodo} onChange={updateTodoValue} />
            <br />
            <button onClick={addNewTask} disabled={!newTodo.trim()}>Add Task</button>

            <br /> <br /> <br /> <br />


            <h3>Tasks Todo:</h3>
            <ul style={{ listStylePosition: "inside", padding: 0 }}>
                {todos.map((todo) =>
                (<li key={todo.id}>
                    <span style={todo.isDone ? { textDecorationLine: "line-through" } : {}}>{todo.task}</span>
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={() => deleteTodo(todo.id)} >Delete</button>
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={() => UpperCaseOne(todo.id)} >UpperCase One</button>
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={() => MarkasDone(todo.id)} >Mark as Done</button>
                </li>
                )
                )}
            </ul>

            <button onClick={UpperCaseAll} disabled={todos.length == 0}>UpperCase All</button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={LowerCaseAll} disabled={todos.length == 0}>LowerCase All</button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={MarkasDoneAll} disabled={todos.length == 0}>Mark as Done All</button>

        </div>
    )
}


export default TodoList;
