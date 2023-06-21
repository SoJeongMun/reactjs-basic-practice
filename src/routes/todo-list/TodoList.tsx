import { useRecoilValue } from "recoil";
import { todoState } from "../../atoms";
import AddTodo from "../../components/todo-list/AddTodo";
import TodoItem from "../../components/todo-list/TodoItem";

export default function TodoList() {
  const todoItem = useRecoilValue(todoState);

  return (
    <>
      <h1>Todo-List</h1>
      <AddTodo />
      <ul>
        {todoItem.map((el) => (
          <TodoItem {...el} />
        ))}
      </ul>
    </>
  );
}
