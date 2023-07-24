import { Droppable } from "react-beautiful-dnd";
import DraggableCard from "./DraggableCard";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.board};
  max-width: 480px;
  min-height: 65vh;
  border-radius: 6px;
  padding: 30px 20px;
  box-sizing: border-box;
  h1 {
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    text-decoration: underline;
    margin-bottom: 30px;
  }
`;

interface IBoardProps {
  todoList: string[];
  boardId: string;
}

export default function Board({ todoList, boardId }: IBoardProps) {
  return (
    <Droppable droppableId={boardId}>
      {(provided) => (
        <Wrapper ref={provided.innerRef} {...provided.droppableProps}>
          {/* <h1>{boardId.toUpperCase()}</h1> */}
          {todoList.map((todo, i) => (
            <DraggableCard key={todo} todo={todo} i={i} />
          ))}
          {provided.placeholder}
        </Wrapper>
      )}
    </Droppable>
  );
}
