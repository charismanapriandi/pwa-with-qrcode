import Input from "./Input";
import './AddTodoForm.css';
import { ChangeEvent, useState } from "react";
import useDatabase from "../hook/useDatabase";

export default function AddTodoForm() {
  const [value, setValue] = useState<string>('')
  const { addTodo } = useDatabase();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const value = (e as any).target.elements['todo'].value

    if (!value) return 

    addTodo(value)
    setValue('')
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  
  return (
    <form className="AddTodoForm-root" onSubmit={handleSubmit}>
      <Input name="todo" value={value} onChange={handleChange} />
      <button 
        type="submit"
        className='AddTodoForm-SubmitButton' 
      >
        Save
      </button>
    </form>
  )
}