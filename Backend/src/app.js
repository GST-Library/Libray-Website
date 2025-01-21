import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin:"*",
    credentials: true
}))

app.use(express.json({limit: "50mb"}))
app.use(express.urlencoded({extended: true, limit: "50mb"}))
app.use(express.static("public"))
app.use(cookieParser())

import userRouter from './routes/user.routes.js'
import pyqRouter from './routes/pyqs.route.js';
import syllabusRouter from './routes/syllabus.route.js';

app.use("/api/v1/syllabus",syllabusRouter)
app.use("/api/v1/pyqs",pyqRouter)

app.use("/api/v1/users",userRouter)


export { app }