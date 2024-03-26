import express from "express";
import { BACKEND_URL } from '@repo/common/config'

const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "Hello from express node",
        url: BACKEND_URL
    })
})

app.listen(3005, () => {
    console.log("app is running on port 3005", BACKEND_URL)
})