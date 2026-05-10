async function sample(){
    const response = await fetch('https://localhost:5500/data');
    const data = await response.json();
    console.log(data);
}


const express = require('express');
const app =express();

app.get("/",(req,res) => {
    res.send('Hello World');
})
app.listen(3000,() => {
    console.log('Server is running on port 3000');
});

app.post("/datum",(req,res) => {
    console.log(req.body);
    res.send('Data received');
})

app.put("/datum/:id",(req,res) => {
    console.log(req.params.id);
    console.log(req.body);
    res.send('Data updated');
})

app.delete("/datum/:id",(req,res) => {
    console.log(req.params.id);
    res.send('My Name is Paul Muadib Atredies');
})