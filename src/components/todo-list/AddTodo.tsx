import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { todoState } from "../../atoms";

interface IForm {
  todo: string;
}

export default function AddTodo() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const setTodoItem = useSetRecoilState(todoState);

  const handleValid = ({ todo }: IForm) => {
    setTodoItem((oldVal) => [
      ...oldVal,
      { item: todo, id: Date.now(), category: "TODO" },
    ]);
    setValue("todo", "");
  };

  return (
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
  );
}
