const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const db = require("./db/books");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Post Book
app.post("/books", async (req, res) => {
    const results = await db.createBook(req.body);
    res.status(201).json({ id: results[0] });
});

// Get Book
app.get("/books", async (req, res) => {
    const books = await db.getAllBooks();
    res.status(200).json({ books });
});

// Patch Book
app.patch("/books/:id", async (req, res) => {
    const id = await db.updateBook(req.params.id, req.body);
    res.status(200).json({ id });
});

// Delete Book
app.delete("/books/:id", async (req, res) => {
    await db.deleteBook(req.params.id);
    res.status(200).json({ succes: true });
});

// Test Server
app.get("/test", (req, res) =>  {
    res.status(200).json({succes: true});
});

app.listen(1337, () => console.log("server is running on port 1337"));