import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, todoState } from "../../atoms";

interface IForm {
  todo: string;
}

export default function AddTodo() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const setTodoItem = useSetRecoilState(todoState);
  const category = useRecoilValue(categoryState);

  const handleValid = ({ todo }: IForm) => {
    setTodoItem((oldVal) => [
      ...oldVal,
      { item: todo, id: Date.now(), category },
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
