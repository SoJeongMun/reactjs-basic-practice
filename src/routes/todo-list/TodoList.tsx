import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";

interface IForm {
  todo: string;
}
interface ITodo {
  item: string;
  category: "TODO" | "DOING" | "DONE";
}

const todoState = atom<ITodo[]>({
  key: "todo",
  default: [],
});

export default function TodoList() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const [todoItem, setTodoItem] = useRecoilState(todoState);

  const handleValid = ({ todo }: IForm) => {
    setTodoItem((oldVal) => [...oldVal, { item: todo, category: "TODO" }]);
    setValue("todo", "");
  };
  console.log(todoItem);
  return (
    <>
      <div>
        <h1>Todo-List</h1>
        <form onSubmit={handleSubmit(handleValid)}>
          📖
          <input
            type="text"
            placeholder="Write a Todo..."
            {...register("todo", {
              required: "Please write a Todo...",
            })}
          />
          <button>⭕</button>
          <button
            onClick={() => {
              setValue("todo", "");
            }}
          >
            ❌
          </button>
        </form>
        <ul></ul>
      </div>
    </>
  );
}
