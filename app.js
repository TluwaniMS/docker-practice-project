import express from 'express'
import morgan from 'morgan'

export const app = express()

app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))