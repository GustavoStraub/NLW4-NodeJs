import express from 'express'

const app = express()

app.listen(4000, () => console.log('server running!'))

app.get('/', (req, res) => {
  return res.json({ message: "hello nlw" })
})

app.post('/', (req, res) => {
  return res.json({ message: 'dados salvo' })
})