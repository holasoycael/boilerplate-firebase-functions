import express, { Router } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import 'express-async-errors'

import { HelloController } from '@controllers/HelloController'
import middaleware from '@middlewares/Default/handler'

const app = express()
const router = Router()

const helloController = new HelloController()

app.use(cors({ origin: true }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(router)
app.use(middaleware)

router.get('/', helloController.handle)

export default app
