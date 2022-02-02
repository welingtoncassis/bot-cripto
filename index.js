//BTCBUSD
// alta: 36291
// baixa: 35764
const axios = require('axios');

async function main() {
  const response = await axios.get(
    'https://api.binance.com/api/v3/klines?symbol=BTCBUSD&interval=1m'
  );
  console.log(response.data);
}

main();
