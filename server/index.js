import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import postRoutes from './routes/posts'

// http://localhost:5000/posts

const app = express()

app.use('/posts', postRoutes)

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

const CONNECTION_URL =
	'mongodb+srv://2224:Santna00@cluster0.izgkv.mongodb.net/?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`listening on ${PORT}`))
