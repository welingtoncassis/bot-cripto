const PRICE_HIGH = 36291;
const PRICE_LOW = 35764;

function alertPrice(currentPrice) {
  if (currentPrice >= PRICE_HIGH) {
    return `*** SELL *** \n Price: ${currentPrice}`;
  } else if (currentPrice <= PRICE_LOW) {
    return `*** BUY *** \n Price: ${currentPrice}`;
  } else {
    return undefined;
  }
}

module.exports = alertPrice;
