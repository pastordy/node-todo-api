const {ObjectID} = require('mongodb');

const {mongoose} =require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '5b2499dce8db3d516a02f723'}).then((todo) => {

// });

Todo.findByIdAndRemove('5b2499dce8db3d516a02f723').then((todo) => {
  console.log(todo);
});