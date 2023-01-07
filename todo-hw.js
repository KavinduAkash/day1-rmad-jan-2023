const fs = require('fs')
const yargs = require('yargs')

const getTodos = () => {
    return JSON.parse(fs.readFileSync('test.json').toString())
}

const writeFile = (todoArray) => {
    fs.writeFileSync('test.json', JSON.stringify(todoArray))
}

//1. get all todos: get -> node todo-hw.js get
yargs.command({
    command: 'get',
    describe: 'get all todos',
    handler: function() {
        console.log(getTodos())
    }
})

//2. add new todo: add -> node todo-hw.js add --id=4 --title="todo 4" --status=todo
yargs.command({
    command: 'add',
    describe: 'add new todo',
    builder: {
        title: {
            describe: 'title',
            demandOption: true,
            type: 'string'
        },
        title: {
            describe: 'status',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        const todoArray = getTodos()
        
        const newTodo = {
            id: todoArray.length + 1,
            title: argv.title,
            status: argv.status
        }

        todoArray.push(newTodo)
        writeFile(todoArray)
    }
})

//3. change todo status: status -> node todo-hw.js status --id=4 --status=done
yargs.command({
    command: 'status',
    describe: 'change todo status',
    builder: {
        id: {
            describe: 'id',
            demandOption: true,
            type: 'number'
        },
        status: {
            describe: 'status',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        const todoArray = getTodos()
        
        const index = todoArray.findIndex((obj => obj.id === argv.id))

        if (index < 0) {
            console.log(`Unable to find a todo with id ${argv.id}`)
        } else {
            todoArray[index].status = argv.status
            writeFile(todoArray)
        }
    }
})


yargs.parse()