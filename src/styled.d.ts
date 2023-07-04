import "styled-components";

declare module "styled-components" {
  export interface ConverterTheme {
    textColor: string;
    bgColor: string;
    accentColor: string;
    liColor: string;
    border: string;
  }
  export interface TrelloTheme {
    bg: string;
    board: string;
    card: string;
  }
}
