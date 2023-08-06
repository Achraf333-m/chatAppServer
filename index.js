const express = require('express')
const cors = require('cors')
const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1646676",
  key: "87a76a425043e081eb2a",
  secret: "2d7ffb8c291b6cea9a81",
  cluster: "us2",
  useTLS: true
});

const app = express()

app.use(cors({
    origin: ['http://localhost:4200']
}))

app.use(express.json())

app.post('/api/messages', async (req, res) => {
    await pusher.trigger("chatapp", "message", {
        username: req.body.username,
        message: req.body.message
      });

      res.json([])
})
 
console.log('listening to port 8000')

app.listen(8000)