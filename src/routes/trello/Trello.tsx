import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { trelloTodos } from "../../atoms";
import Board from "../../components/trello/Board";

const Wrapped = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.theme.bg};
  padding: 5vw;
  box-sizing: border-box;
`;
const Boards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
`;

export default function Trello() {
  const [todoList, setTodoList] = useRecoilState(trelloTodos);
  const handleDrag = (info: DropResult) => {
    const { draggableId, destination, source } = info;
    if (destination?.droppableId === source?.droppableId) {
      setTodoList((boards) => {
        const tmpBoard = [...boards[destination?.droppableId]];
        tmpBoard.splice(source.index, 1);
        tmpBoard.splice(destination?.index, 0, draggableId);
        return {
          ...boards,
          [destination?.droppableId]: tmpBoard,
        };
      });
    }
  };

  return (
    <DragDropContext onDragEnd={handleDrag}>
      <Wrapped>
        <Boards>
          {Object.keys(todoList).map((boardId) => (
            <Board
              key={boardId}
              todoList={todoList[boardId]}
              boardId={boardId}
            />
          ))}
        </Boards>
      </Wrapped>
    </DragDropContext>
  );
}
