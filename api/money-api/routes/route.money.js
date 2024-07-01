import { Router } from "express"
import controllerMoney from "../controllers/controller.money.js"

const routeMoney = Router()

routeMoney.get('/money/listar', controllerMoney.Listar)
routeMoney.post('/money/inserir', controllerMoney.Inserir)
routeMoney.put('/money/editar', controllerMoney.Editar)
routeMoney.delete('/money/deletar', controllerMoney.Deletar)

export default routeMoney