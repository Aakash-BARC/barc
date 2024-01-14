import express from "express";
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/posts.js"
import postRoutes from "./routes/posts.js"

const app = express()

app.use(express.json())

app.use("/app/auth", authRoutes)
app.use("/app/user", userRoutes)
app.use("/app/posts", postRoutes)

app.listen(8800, () => {
    console.log('Connected'); 
});