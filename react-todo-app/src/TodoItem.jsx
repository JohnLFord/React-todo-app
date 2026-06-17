import { useState } from 'react'

function TodoItem() {
  const initialTodos = [
    { id: 1, text: 'Eat', completed: false },
    { id: 2, text: 'Sleep', completed: false },
    { id: 3, text: 'Code', completed: false },
  ]

  const [todos, setTodos] = useState(initialTodos)

  const toggleTodo = (id) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const statusText = todos.every((todo) => todo.completed)
    ? 'Good job'
    : todos.every((todo) => !todo.completed)
    ? 'Try harder!'
    : null

  return (
    <>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <button type="button" onClick={() => toggleTodo(todo.id)}>
              {todo.completed ? '✅' : '⬜'} {todo.text}
            </button>
          </li>
        ))}
      </ul>
      {statusText && <div className="todo-status">{statusText}</div>}
    </>
  )
}

export default TodoItem;