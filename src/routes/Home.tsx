import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <ul>
        <li>
          <Link to={"/coin-tracker"}>💰Coin-Tracker</Link>
        </li>
        <li>
          <Link to={"/todo-list"}>📔Todo-List</Link>
        </li>
        <li>
          <Link to={"/trello"}>🎄Trello</Link>
        </li>
      </ul>
    </>
  );
}
