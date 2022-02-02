const recommendation = require('../recommendation');

describe('Recommendation Function', () => {
  // PRICE_HIGH = 36291;
  // PRICE_LOW = 35764;

  test('Should return string Buy recommendation', () => {
    const CURRENT_PRICE = 35763;
    const recommendationText = recommendation(CURRENT_PRICE);
    expect(recommendationText).toBe('*** BUY *** \n Price: 35763');
  });

  test('Should return string Sell recommendation', () => {
    const CURRENT_PRICE = 36295;
    const recommendationText = recommendation(CURRENT_PRICE);
    expect(recommendationText).toBe('*** SELL *** \n Price: 36295');
  });

  test('Should return string HOLD recommendation', () => {
    const CURRENT_PRICE = 36100;
    const recommendationText = recommendation(CURRENT_PRICE);
    expect(recommendationText).toBe('*** HOLD *** \n Price: 36100');
  });
});
