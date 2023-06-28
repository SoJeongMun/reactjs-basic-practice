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
