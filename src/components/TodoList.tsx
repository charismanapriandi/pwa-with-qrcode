import { useEffect, useState } from "react"
import useDatabase, { ITodoStore } from "../hook/useDatabase"
import TodoItem from "./TodoItem"
import './TodoList.css'

export default function TodoList() {
  const [list, setList] = useState<ITodoStore[]>([])
  const { getAllTodo } = useDatabase()
  
  useEffect(() => {
    (async function() {
      const todo = await getAllTodo()

      if (todo) setList(todo)
    })()
  }, [getAllTodo])
  
  return (
    <div className="TodoList-root">
      {list.map(i => (
        <TodoItem key={i.id} text={i.text} id={i.id} />
      ))}
    </div>
  )
}