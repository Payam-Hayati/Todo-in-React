import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    //console.log(event.target.value);
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    setTodoList([...todoList, task]);
  };

  const makeRandom = () => {
    let maxNumber = 500;
    let randomNumber = Math.floor(Math.random() * maxNumber + 1);
    return randomNumber;
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  return (
    <Container>
      <MyForm>
        <input onChange={handleChange} />
        <button onClick={addTask}> Add Task</button>
      </MyForm>
      <List>
        {todoList.map((task) => {
          return (
            <div key={task.id}>
              <h1>{task.taskName}</h1>

              <button onClick={() => deleteTask(task.id)}>X</button>
            </div>
          );
        })}
      </List>
    </Container>
  );
};

export default App;

const Container = styled.div`
  color: white;
  margin: 2em auto;
  text-align: center;
`;

const MyForm = styled.div`
  input {
    padding: 5px;
    border-radius: 5px;
    border: none;
  }

  button {
    background: #212529;
    border: solid 1px #c5c5c5;
    color: white;
    padding: 10px;
    margin-left: 3px;

    &:hover {
      color: #c5c5c5;
    }
  }
`;

const List = styled.div``;
