const express = require("express");
const app = express();
const port = 3000;

// Response to frontend
app.get("/notes",(req,res) => {
    res.send("Server is running");
})

//Publishing the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})