const axios = require('axios');
const PAIR = 'BTCBUSD';
const PRICE_HIGH = 36291;
const PRICE_LOW = 35764;

async function main() {
  const response = await axios.get(
    `https://api.binance.com/api/v3/klines?symbol=${PAIR}&interval=1m`
  );
  const length = response.data.length;
  const lastCandle = response.data[length - 1]; // last candle
  const currentPrice = parseFloat(lastCandle[4]);

  if (currentPrice >= PRICE_HIGH) {
    console.log(`*** SELL *** \n Price: ${currentPrice}`);
  } else if (currentPrice <= PRICE_LOW) {
    console.log(`*** BUY *** \n Price: ${currentPrice}`);
  } else {
    console.log(`*** HOLD *** \n Price: ${currentPrice}`);
  }
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
