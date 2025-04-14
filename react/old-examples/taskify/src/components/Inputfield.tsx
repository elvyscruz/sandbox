import { FormEvent, useRef } from "react";
import "./style.css"

interface TodoProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: (e: FormEvent) => void;
}


const InputField = ({todo, setTodo, handleAddTodo}: TodoProps ) => {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <form className="input" onSubmit={(e)=> {
        handleAddTodo(e);
        inputRef.current?.blur()
      }
      }>
      <input 
        type="input"
        ref={inputRef} 
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a Task" className="input__box"/>
      <button className="input__submit" type="submit">Go</button>
    </form>
  )
}

export default InputField