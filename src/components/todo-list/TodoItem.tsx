import { useSetRecoilState } from "recoil";
import { Group, ITodo, todoState } from "../../atoms";

export default function TodoItem({ item, id, category }: ITodo) {
  const setTodos = useSetRecoilState(todoState);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = e;
    setTodos((oldVal) => {
      const targetIdx = oldVal.findIndex((el) => el.id === id);
      const newTodo = { item, id, category: name as Group };
      const front = oldVal.slice(0, targetIdx);
      const back = oldVal.slice(targetIdx + 1, oldVal.length);
      return [...front, newTodo, ...back];
    });
  };
  return (
    <li>
      <p>{item}</p>
      {category !== Group.TODO && (
        <button name={Group.TODO} onClick={handleClick}>
          To Do
        </button>
      )}
      {category !== Group.DOING && (
        <button name={Group.DOING} onClick={handleClick}>
          Doing
        </button>
      )}
      {category !== Group.DONE && (
        <button name={Group.DONE} onClick={handleClick}>
          Done
        </button>
      )}
    </li>
  );
}
