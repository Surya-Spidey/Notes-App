const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let notes = [];

// GET
app.get("/notes", (req, res) => {
    res.json(notes);
});

// POST
app.post("/notes", (req, res) => {
    notes.push(req.body.note);
    res.json({ message: "Note added" });
});

// DELETE
app.delete("/notes/:index", (req, res) => {
    const index = req.params.index;
    notes.splice(index, 1);
    res.json({ message: "Deleted" });
});

// UPDATE
app.put("/notes/:index", (req, res) => {
    const index = req.params.index;
    notes[index] = req.body.note;
    res.json({ message: "Updated" });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});