import express from 'express'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const PORT: string | number = process.env.PORT || 3000