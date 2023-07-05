import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import React from "react";

const Card = styled.div`
  background-color: ${(props) => props.theme.card};
  border-radius: 6px;
  padding: 20px;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;

interface ICardProps {
  todo: string;
  i: number;
}

function DraggableCard({ todo, i }: ICardProps) {
  return (
    <Draggable draggableId={todo} index={i}>
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
  );
}

export default React.memo(DraggableCard);
