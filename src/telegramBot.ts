import dotenv from 'dotenv'
const TelegramBot = require('node-telegram-bot-api')
dotenv.config()
import { headers, body } from './eventsRequest'

const PORT = process.env.PORT,
  token = process.env.TELEGRAM_BOT_TOKEN

const bot = new TelegramBot(token, { polling: true })

bot.onText(/\/events/, (msg, match) => {
  const chatId = msg.chat.id
  const resp = match[1] // the captured "whatever"

  fetch('https://api.meetup.com/gql', {
    method: 'POST',
    headers,
    body,
  })
    .then((response) => {
      return response.json()
    })
    .then((events) => {
      bot.sendMessage(chatId, JSON.stringify(events).substring(0, 90))
    })
    .catch((err) => {
      bot.sendMessage(chatId, 'Something went wrong')
    })
})

// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;
//   bot.sendMessage(chatId, 'Received your message');
// });
