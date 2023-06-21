import { ITodo } from "../../atoms";

export default function TodoItem({ id, item, category }: ITodo) {
  return (
    <li key={id}>
      <p>{item}</p>
      <button>Done</button>
      <button>Doing</button>
      <button>To Do</button>
    </li>
  );
}
