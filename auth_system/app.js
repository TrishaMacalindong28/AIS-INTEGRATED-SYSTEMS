  import express from 'express'
  import 'dotenv/config.js'
  import userRoutes from './routes/UserRoutes.js'
  import cors from 'cors'

  const app = express()

  let corsOptions = {
    origin: process.env.ORIGIN
  }

  app.use(express.json())
  app.use(cors(corsOptions))

  app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
  })

  try {
    app.use('/user', userRoutes)

app.listen(process.env.PORT || 4005, () => {
  console.log(`Listening to port ${process.env.PORT || 4005}...`)
})
  } catch (error) {
    console.log(error)
  }


  app.use('/user', userRoutes)