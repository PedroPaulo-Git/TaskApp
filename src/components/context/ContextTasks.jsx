
import React, { createContext, useState, useContext } from 'react';


const TaskContext = createContext();

// Provedor do contexto
export const TaskProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const loadTodos = async () => {
    // Carregar tarefas (simulação)
    const response = await fetch('http://localhost:5000/todos');
    const data = await response.json();
    setTodos(data);
  };

  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const editTodo = (updatedTodo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <TaskContext.Provider value={{ todos, loadTodos, addTodo, editTodo, deleteTodo }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
