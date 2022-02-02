const axios = require('axios');
const recommendation = require('./recommendation');

const PAIR = 'BTCBUSD';

async function main() {
  const response = await axios.get(
    `https://api.binance.com/api/v3/klines?symbol=${PAIR}&interval=1m`
  );
  const length = response.data.length;
  const lastCandle = response.data[length - 1]; // last candle
  const currentPrice = parseFloat(lastCandle[4]);

  const recommendationText = recommendation(currentPrice);
  console.log(recommendationText);
}

setInterval(main, 1000);

main();

// structure candle
// [
//   '1599273600000', // timestamp
//   '0.03905000', // open
//   '0.03905000', // high
//   '0.03905000', // low
//   '0.03905000', // close
//   '0.03905000', // volume
// ];
