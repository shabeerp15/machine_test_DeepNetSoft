import express from 'express'
const app = express()
import cors from 'cors'
import mongoose from 'mongoose'
import userRoute from './src/routes/userRoutes.js'
import productRoute from './src/routes/productRoute.js'

app.use(cors())
app.use(express.json())

const MONGO_URL =
    'mongodb+srv://shabeerp15:12345@shabeerp15.xztkr.mongodb.net/DeepNetSoft?retryWrites=true&w=majority'
mongoose
    .connect(MONGO_URL)
    .then(() => console.log('DB connection successful'))
    .catch((err) => console.log(err))

app.get('/', (req, res) => {
    res.send('hello world')
})

app.use('/user', userRoute)
app.use('/product', productRoute)

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
