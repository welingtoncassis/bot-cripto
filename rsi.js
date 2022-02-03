/**
 * receives closing of the candles
 * in interval of 1 minute what is de value closing of the last candle
 */
function calcRSI(closes) {
  let high = 0;
  let low = 0;

  for (let index = closes.length - 15; index < closes.length - 1; index++) {
    const diff = closes[index] - closes[index - 1];
    if (diff >= 0) {
      high += diff;
    } else {
      low -= diff;
    }
  }

  const relativeStrength = high / low;
  const rsi = 100 - 100 / (1 + relativeStrength);
  console.log(`@calcRSI: RSI= ${rsi}`);

  if (rsi >= 70) {
    return `*** OVERBOUGHT *** \n RSI: ${rsi}`;
  } else if (rsi <= 30) {
    return `*** OVERSOLD *** \n RSI: ${rsi}`;
  } else {
    return undefined;
  }
}

module.exports = calcRSI;
