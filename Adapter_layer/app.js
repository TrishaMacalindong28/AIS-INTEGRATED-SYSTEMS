import express from 'express'
import 'dotenv/config.js'

import authRoutes from '../Adapter_layer/routes/authRoute.js'


const app = express()


app.use(express.json())


app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

try {
  app.listen(process.env.PORT || 4003, () => {
    console.log(`Listening to port ${process.env.PORT || 4003}...`)
  })
} catch (error) {
  console.log(error)
}


app.use('/auth', authRoutes)