import SingleTodo from "./SingleTodo";
import { Todo } from "./model";
import "./style.css"

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({todos,setTodos}: Props) => {
  return (
    <div className="todos">
      {todos.map((i)=>(
        <SingleTodo todo={i} key={i.id} todos={todos} setTodos={setTodos}/>
      ))}
    </div>
  )
}

export default TodoList