import { BrowserRouter, Route, Switch } from "react-router-dom";
import Coins from "./routes/coin-tracker/Coins";
import Coin from "./routes/coin-tracker/Coin";
import Home from "./routes/Home";
import TodoList from "./routes/todo-list/TodoList";

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
        {/* <Route path="/trello">
          <TodoList />
        </Route> */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
