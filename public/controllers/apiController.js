var Todos = require('../../models/todoModel');
var bodyParser = require('body-parser');

module.exports = function(app) {
app.get('/contactlist', function (req, res) {
  console.log('I received a GET request');
  Todos.find(function (err, docs) {
    console.log(docs);
    if (err) throw err;
    res.send(docs);
  });
});


app.post('/contactlist', function (req, res) {
  if (req.body.id){
    Todos.findById(req.body.id, { name: req.body.name, email: req.body.email, number: req.body.number }, function(err, doc) {
                if (err) throw err;
                
                res.send(doc);
            });
        }
        
        else {
           
           var newTodo = Todos({
               name: req.body.name,
               email: req.body.email, 
               number: req.body.number 
           });
           newTodo.save(function(err, doc) {
               if (err) throw err;
               res.send(doc);
           });
            
        }
        
    });

//==DONE!==
app.delete('/contactlist/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  Todos.findByIdAndRemove(id, function(err, doc) {
    if (err) throw err;
    res.send(doc);
  });
});
//==DONE!==
app.get('/contactlist/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  Todos.findById(id, function (err, doc) {
    if (err) throw err;
    res.send(doc);
  });
});

app.put('/contactlist/:id', function (req, res) {
  var id = req.params.id;
  Todos.findByIdAndUpdate(id, { name: req.body.name, email: req.body.email, number: req.body.number },function(err, doc) {
    if (err) throw err;
    res.send(doc);
  });
});
             
app.get('/contactlist/:name', function (req, res) {
  
  Todos.find({ name: req.params.name }, function (err, doc) {
    if (err) throw err;
    res.send(doc);
    console.log(todos)
 });
});

}