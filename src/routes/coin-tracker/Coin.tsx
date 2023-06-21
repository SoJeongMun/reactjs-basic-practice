import {
  Link,
  Route,
  Switch,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import styled from "styled-components";
import Price from "../../components/coin-tracker/Price";
import Chart from "../../components/coin-tracker/Chart";
import { useQuery } from "react-query";
import { fetchCoinInfo, fetchCoinPrice } from "../../api";

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
const Loader = styled.p`
  text-align: center;
  font-size: 20px;
  padding-top: 20px;
`;
const Tab = styled.span<{ isActive: boolean }>`
  display: inline-block;
  padding: 30px 30px 0 0;
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
`;

interface RouterId {
  coinId: string;
}
interface StateInfo {
  state: {
    name: string;
  };
}
interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  logo: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}
interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

export default function Coin() {
  const { coinId } = useParams<RouterId>();
  const { state } = useLocation() as StateInfo;
  const chartMatch = useRouteMatch(`/${coinId}/chart`);
  const priceMatch = useRouteMatch(`/${coinId}/price`);

  const { isLoading: infoLoading, data: infoData } = useQuery<InfoData>(
    ["info", coinId],
    () => fetchCoinInfo(coinId),
    {
      refetchInterval: 2000,
    }
  );
  const { isLoading: priceLoading, data: priceData } = useQuery<PriceData>(
    ["tickers", coinId],
    () => fetchCoinPrice(coinId)
  );

  const loading = infoLoading || priceLoading;

  const back = useHistory();

  return (
    <Container>
      <Header>
        <Title
          onClick={() => {
            back.goBack();
          }}
        >
          {state?.name
            ? state.name
            : loading
            ? "Now Loading..."
            : infoData?.name}
        </Title>
      </Header>
      {loading ? (
        <Loader>Now Loading...</Loader>
      ) : (
        <>
          <h2>Price: $ {priceData?.quotes.USD.price.toFixed(3)}</h2>

          <Tab isActive={chartMatch !== null}>
            <Link to={`/coin-tracker/${coinId}/chart`}>Chart</Link>
          </Tab>
          <Tab isActive={priceMatch !== null}>
            <Link to={`/coin-tracker/${coinId}/price`}>Price</Link>
          </Tab>

          <Switch>
            <Route path={`/coin-tracker/${coinId}/price`}>
              <Price />
            </Route>
            <Route path={`/coin-tracker/${coinId}/chart`}>
              <Chart coinId={coinId} />
            </Route>
          </Switch>
        </>
      )}
    </Container>
  );
}
