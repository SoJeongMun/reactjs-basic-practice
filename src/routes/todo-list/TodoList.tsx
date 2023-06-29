import { useRecoilState, useRecoilValue } from "recoil";
import { Group, categoryState, todoSelector } from "../../atoms";
import AddTodo from "../../components/todo-list/AddTodo";
import TodoItem from "../../components/todo-list/TodoItem";

export default function TodoList() {
  const [group, setGroup] = useRecoilState(categoryState);
  const todoList = useRecoilValue(todoSelector);

  const handleInput = (e: React.FormEvent<HTMLSelectElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setGroup(value as Group);
  };

  return (
    <>
      <h1>Todo-List</h1>
      <AddTodo />
      <select onInput={handleInput}>
        <option value={Group.TODO}>TODO</option>
        <option value={Group.DOING}>DOING</option>
        <option value={Group.DONE}>DONE</option>
      </select>
      <ul>
        {todoList.map((el) => (
          <TodoItem key={el.id} {...el} />
        ))}
      </ul>
    </>
  );
}
