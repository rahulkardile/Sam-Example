const express = require("express")
const serverless = require("serverless-http");

const app = express();

app.get("/", (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "Server is up and running!!"
    })
})

app.listen(3300, ()=>{
    console.log("server is running . . .");
})

module.exports.handler = serverless(app);