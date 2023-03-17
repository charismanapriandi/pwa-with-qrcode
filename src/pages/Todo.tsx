import AddTodoForm from "../components/AddTodoForm";
import TodoList from "../components/TodoList";

export default function Todo() {
  return (
    <div className="container">
      <AddTodoForm />
      <TodoList />
    </div>
  )
}