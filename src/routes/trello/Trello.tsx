import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { trelloTodos } from "../../atoms";

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
  ul {
    background-color: ${(props) => props.theme.board};
    max-width: 480px;
    min-height: 50vh;
    border-radius: 6px;
    padding: 40px 20px;
    box-sizing: border-box;
  }
`;
const Card = styled.div`
  background-color: ${(props) => props.theme.card};
  border-radius: 6px;
  padding: 20px 10px;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export default function Trello() {
  const [todoList, setTodoList] = useRecoilState(trelloTodos);
  const handleDrag = ({ destination, source }: DropResult) => {
    // console.log(args);
  };

  return (
    <DragDropContext onDragEnd={handleDrag}>
      <Wrapped>
        <Boards>
          <Droppable droppableId="one">
            {(provided) => (
              <ul ref={provided.innerRef} {...provided.droppableProps}>
                {todoList.map((todo, i) => (
                  <Draggable key={i} draggableId={todo} index={i}>
                    {(provided) => (
                      <Card
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                      >
                        {todo}
                      </Card>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </Boards>
      </Wrapped>
    </DragDropContext>
  );
}
