import { atom, selector } from "recoil";

export const isDarkAtom = atom({
  key: "isDark",
  default: true,
});

export enum Group {
  "TODO" = "TODO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}
export interface ITodo {
  item: string;
  id: number;
  category: Group;
}

export const todoState = atom<ITodo[]>({
  key: "todo",
  default: [],
  effects: [
    ({ setSelf, onSet }) => {
      const saved = localStorage.getItem("todo-list");
      if (saved) setSelf(JSON.parse(saved));
      onSet((newVal, _, isReset) => {
        isReset
          ? localStorage.removeItem("todo-list")
          : localStorage.setItem("todo-list", JSON.stringify(newVal));
      });
    },
  ],
});
export const categoryState = atom<Group>({
  key: "categoryState",
  default: Group.TODO,
});

export const todoSelector = selector({
  key: "todoSelector",
  get: ({ get }) => {
    const todoItems = get(todoState);
    const group = get(categoryState);
    return todoItems.filter(({ category }) => category === group);
  },
});

export interface ITrelloTodos {
  [key: string]: string[];
}
export const trelloTodos = atom<ITrelloTodos>({
  key: "trello",
  default: {
    todo: ["a", "b"],
    doing: ["c", "d", "e"],
    done: ["f"],
  },
});
