import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../../api";
import { useSetRecoilState } from "recoil";
import { isDarkAtom } from "../../atoms";

const Container = styled.div`
  padding: 40px;
  max-width: 480px;
  margin: 0 auto;
`;
const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;
const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: ${(props) => props.theme.accentColor};
`;
const Coin = styled.li`
  background-color: ${(props) => props.theme.liColor};
  color: ${(props) => props.theme.accentColor};
  border: ${(props) => props.theme.border};
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 15px;
  font-weight: bold;
  border-radius: 15px;
  transition: all 400ms ease-in;
  a {
    display: flex;
    align-items: center;
  }
  &:hover {
    background-color: ${(props) => props.theme.accentColor};
    border: 1px solid ${(props) => props.theme.accentColor};
    a {
      color: ${(props) => props.theme.textColor};
    }
  }
`;
const Loader = styled.p`
  text-align: center;
  font-size: 20px;
  padding-top: 20px;
`;
const CoinImg = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

export default function Coins() {
  const { isLoading, data } = useQuery<ICoin[]>("coins", fetchCoins);
  const setDarkTheme = useSetRecoilState(isDarkAtom);
  const toggleTheme = () => {
    setDarkTheme((prev) => !prev);
  };

  return (
    <Container>
      <Header>
        <Title>
          Coins
          <span onClick={toggleTheme}>⭐</span>
        </Title>
      </Header>
      {isLoading ? (
        <Loader>Now Loading...</Loader>
      ) : (
        <>
          {data?.slice(0, 100).map((el) => (
            <Coin key={el.id}>
              <Link
                to={{
                  pathname: `/coin-tracker/${el.id}`,
                  state: { name: el.name },
                }}
              >
                <CoinImg
                  src={`https://cryptocurrencyliveprices.com/img/${el.id}.png`}
                  alt="coinImg"
                />
                {el.name} &rarr;
              </Link>
            </Coin>
          ))}
        </>
      )}
    </Container>
  );
}
