import { BrowserRouter, Route, Switch } from "react-router-dom";
import Coins from "./routes/coin-tracker/Coins";
import Coin from "./routes/coin-tracker/Coin";
import TodoList from "./routes/todo-list/TodoList";
import Trello from "./routes/trello/Trello";
import Home from "./routes/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/coin-tracker/:coinId">
          <Coin />
        </Route>
        <Route path="/coin-tracker">
          <Coins />
        </Route>
        <Route path="/todo-list">
          <TodoList />
        </Route>
        <Route path="/trello">
          <Trello />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
