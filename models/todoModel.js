var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var todoSchema = new Schema({
    name: String,
    email: String,
    number: String
});

var Todos = mongoose.model('Todos', todoSchema);

module.exports = Todos;