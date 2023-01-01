const fs = require('fs')

// wirte a file
// fs.writeFileSync('test.txt', 'xyz')

// // read a file
// const readFile = fs.readFileSync('test.txt')
// console.log(readFile.toString())

// // read a file
// fs.readFileSync('test.txt', {encoding: 'utf8'}, function(err, data) {
//     console.log(data)
// })
// fs.readFileSync('test.txt', 'utf8', function(err, data) {
//     console.log(data)
// })

const obj = {
    id:1,
    name:"Thamidu Athukorala",
    age:18
}

const strObj = JSON.stringify(obj)

// any file
// fs.writeFileSync('test.json', strObj)

const readJson = fs.readFileSync('test.json')
const value = readJson.toString()
const jsObjectArr = JSON.parse(value)
console.log(jsObjectArr)

const newTodo = {
    id: 3,
    title: 'todo 3',
    status: 'todo'
}

jsObjectArr.push(newTodo)
fs.writeFileSync('test.json', JSON.stringify(jsObjectArr))


//1. get all todos: get -> node todo.js get
//2. add new todo: add -> node todo.js add --id=4 --title="todo 4" --status=todo
//3. change todo status: status -> node todo.js status --id=4 --status=done






