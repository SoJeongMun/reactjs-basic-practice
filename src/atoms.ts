import { atom } from "recoil";

export const isDarkAtom = atom({
  key: "isDark",
  default: true,
});

export interface ITodo {
  item: string;
  id: number;
  category: "TODO" | "DOING" | "DONE";
}
export const todoState = atom<ITodo[]>({
  key: "todo",
  default: [],
});
