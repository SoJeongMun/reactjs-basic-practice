import { useSetRecoilState } from "recoil";
import { ITodo, todoState } from "../../atoms";

export default function TodoItem({ item, category }: ITodo) {
  const setTodos = useSetRecoilState(todoState);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = e;
    console.log(name);
  };
  return (
    <li>
      <p>{item}</p>
      {category !== "TODO" && (
        <button name="TODO" onClick={handleClick}>
          To Do
        </button>
      )}
      {category !== "DOING" && (
        <button name="DOING" onClick={handleClick}>
          Doing
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={handleClick}>
          Done
        </button>
      )}
    </li>
  );
}
