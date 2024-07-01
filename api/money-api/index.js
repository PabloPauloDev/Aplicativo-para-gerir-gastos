import express from 'express'
import cors from 'cors'
import routeMoney from './routes/route.money.js'

const app = express()
const PORT = 8000

app.use(express())
app.use(cors())
app.use(express.json())
app.use(routeMoney)

app.listen(PORT, () => {console.log('Servidor rodando na porta: ' + PORT)})