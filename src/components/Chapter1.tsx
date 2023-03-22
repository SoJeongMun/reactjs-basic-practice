import styled, { keyframes } from "styled-components";

const Rotation = keyframes`
  0%{
    transform: rotate(0deg);
  }
  25%{
    transform: rotate(60deg);
    border-radius: 0%;
  }
  50%{
    transform: rotate(300deg);
  }
  75%{
    transform: rotate(380deg);
    border-radius: 100%;
  }
  100%{
    transform: rotate(360deg);
    border-radius: 0%;
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  color: ${(props) => props.theme.textColor || "#121212"}
  background-color: ${(props) => props.theme.bgColor || "white"};
`;

const FlexRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

// 템플릿 리터럴 + props 사용
const Box = styled.div<StyleProps>`
  width: 100px;
  height: 100px;
  background: ${(props) => props.bg};
`;

// 컴포넌트 재사용
const Circle = styled(Box)`
  border-radius: 50%;
`;

// 같은 속성을 가진 element들에 모두 적용함
const Input = styled.input.attrs({ required: true })`
  background: tomato;
  border: none;
  color: white;
  margin-right: 5px;
`;

const MoveBox = styled(Box)`
  animation: ${Rotation} 2s ease-in-out infinite;
`;

// 스타일 컴포넌트 안에서 다른 스타일 컴포넌트 타겟팅하기
// const Box = styled.p`
//  ${Txt}{...}
// `     ===> 템플릿 리터럴로 타겟팅하면 됨!

interface StyleProps {
  bg: string;
}

export default function Chapter1() {
  return (
    <>
      <Container>
        <FlexRow>
          <Box bg="teal" />
          {/* as 속성만 추가하면 element만 원하는 걸로 바꿀 수 있음..! */}
          <Circle as="span" bg="tomato" />
        </FlexRow>
        <br />
        <FlexRow>
          <Input required />
          <Input required />
          <Input required />
        </FlexRow>
        <FlexRow>
          <MoveBox bg="royalblue" />
        </FlexRow>
      </Container>
    </>
  );
}
