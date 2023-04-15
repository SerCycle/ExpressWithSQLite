// const knex = require("knex");
const connectedKnex = require("./knex");

function createBook(book) {
    return connectedKnex("books").insert(book);
};

function getAllBooks() {
    return connectedKnex("books").select("*");
};

function deleteBook(id) {
    return connectedKnex("books").where("id", id).del();
};

function updateBook(id, book) {
    return connectedKnex("books").where("id", id).update(book);
};

module.exports = {
    createBook,
    getAllBooks,
    deleteBook,
    updateBook
};