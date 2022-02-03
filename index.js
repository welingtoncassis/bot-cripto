require('dotenv').config();
const axios = require('axios');
const { Telegraf } = require('telegraf');
const alertPrice = require('./alertPrice');
const calcRSI = require('./rsi');

const PAIR = 'BTCBUSD';

async function main() {
  const bot = new Telegraf(process.env.BOT_TOKEN_TELEGRAM);
  const response = await axios.get(
    `https://api.binance.com/api/v3/klines?symbol=${PAIR}&interval=1m`
  );
  const length = response.data.length;
  const lastCandle = response.data[length - 1]; // last candle
  const currentPrice = parseInt(lastCandle[4]);

  const closes = response.data.map((candle) => parseFloat(candle[4]));

  const resultRSI = calcRSI(closes);
  const alertPriceText = alertPrice(currentPrice);

  if (alertPriceText) {
    bot.telegram.sendMessage(process.env.CHAT_ID_TELEGRAM, alertPriceText);
  }

  if (resultRSI) {
    let messageRSI = resultRSI + `\n Price: ${currentPrice}`;
    bot.telegram.sendMessage(process.env.CHAT_ID_TELEGRAM, messageRSI);
  }
}

setInterval(main, 60000);

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
