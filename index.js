require('dotenv').config();
const axios = require('axios');
const { Telegraf } = require('telegraf');
const alertPrice = require('./services/alertPrice');
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

  const alertPriceText = alertPrice(currentPrice);
  const resultRSI = calcRSI(closes);

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
