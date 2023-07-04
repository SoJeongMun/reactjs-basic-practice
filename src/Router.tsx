import { BrowserRouter, Route, Switch } from "react-router-dom";
import Coins from "./routes/coin-tracker/Coins";
import Coin from "./routes/coin-tracker/Coin";
import TodoList from "./routes/todo-list/TodoList";
import Trello from "./routes/trello/Trello";
import Home from "./routes/Home";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, trelloTheme } from "./Theme";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atoms";

export default function Router() {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/coin-tracker/:coinId">
          <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <Coin />
          </ThemeProvider>
        </Route>
        <Route path="/coin-tracker">
          <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <Coins />
          </ThemeProvider>
        </Route>
        <Route path="/todo-list">
          <TodoList />
        </Route>
        <Route path="/trello">
          <ThemeProvider theme={trelloTheme}>
            <Trello />
          </ThemeProvider>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
