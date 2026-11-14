const express = require('express');
const mineflayer = require('mineflayer');

const app = express();
app.get('/', (req, res) => res.send('Online'));
app.listen(process.env.PORT || 3000);

function iniciar() {
  const bot = mineflayer.createBot({
    host: 'Diarreia-Exploziva2.aternos.me',
    port: 37721,
    username: 'Bot_24h',
    version: false
  });

  bot.on('spawn', () => {
    console.log('Bot entrou no servidor!');
    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 500);
    }, 30000);
  });

  bot.on('end', () => setTimeout(iniciar, 10000));
  bot.on('error', (err) => {
    console.log('Tentando de novo em 10s...', err.message);
    setTimeout(iniciar, 10000);
  });
}

iniciar();
