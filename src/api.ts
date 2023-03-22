const BASR_URL = `https://api.coinpaprika.com/v1`;

export function fetchCoins() {
  return fetch(`${BASR_URL}/coins`).then((res) => res.json());
}

export function fetchCoinInfo(coinId: string) {
  return fetch(`${BASR_URL}/coins/${coinId}`).then((res) => res.json());
}
export function fetchCoinPrice(coinId: string) {
  return fetch(`${BASR_URL}/tickers/${coinId}`).then((res) => res.json());
}

export function fetchChartHistory(coinId: string) {
  return fetch(
    `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`
  ).then((res) => res.json());
}
