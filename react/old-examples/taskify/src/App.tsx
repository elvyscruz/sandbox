import React, { FormEvent, useState } from 'react';
import './App.css';
import InputField from './components/Inputfield';
import { Todo } from './components/model';
import TodoList from './components/TodoList';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])
  
  const handleAddTodo = (e: FormEvent) => {
    e.preventDefault()
    if (todo) {
      setTodos(
        [...todos, {id: Date.now(), todo, isDone: false}]);     
    }
    setTodo("");
  };

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
