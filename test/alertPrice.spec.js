const alertPrice = require('../alertPrice');

describe('AlertPrice Function', () => {
  // PRICE_HIGH = 36291;
  // PRICE_LOW = 35764;

  test('Should return string Buy alertPrice', () => {
    const CURRENT_PRICE = 35763;
    const alertPriceText = alertPrice(CURRENT_PRICE);
    expect(alertPriceText).toBe('*** BUY *** \n Price: 35763');
  });

  test('Should return string Sell alertPrice', () => {
    const CURRENT_PRICE = 36295;
    const alertPriceText = alertPrice(CURRENT_PRICE);
    expect(alertPriceText).toBe('*** SELL *** \n Price: 36295');
  });
});
