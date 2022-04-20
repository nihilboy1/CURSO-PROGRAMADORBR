const express = require('express')

const path = require('path')
require('dotenv').config()

app = express()
app.use(express.json())





const videos = [
  '9CpjDU-IP4w&t=11s&ab_channel=PortadosFundos',
  '03riiu2ENC0&ab_channel=PortadosFundos',
  'rHyDH6f1kLo&ab_channel=PortadosFundos',
  '6t-vkbyV7rA&ab_channel=PortadosFundos'
]

app.get('/api/videos', (req, res) => {
  res.send(videos)
})

if (process.env.NODE_ENV != 'dev') {
  app.use(express.static(path.join(__dirname, 'client/build')))
  app.get('*', (req, res) => {
    res.sendFile(
      path.join(__dirname, 'client/build/index.html', error => {
        if (error) {
          res.status(500).send(error)
        }
      })
    )
  })
}

app.listen(4000, () => {
  console.log('Rodando na 4000')
})
