// ES6 is not support for NodeJS
// import validator from 'validator'

// Use 'Require' to import libs
const validator = require('validator')
const { describe } = require('yargs')
const yargs = require('yargs')

// console.log('hello world!')
// const x = 10
// const method = () => {
//     console.log('hello')
// }

// const y = validator.isEmail('ddd')
// console.log(y)

// console.log(process.argv[2])

// if(process.argv[2] > 10) {
//     console.log('Pass')
// } else {
//     console.log('Failed')
// }

// console.log(process.argv)

yargs.command({
    command: 'add',
    describe: 'add',
    builder: {
        num1: {
            describe: "number 1",
            demandOption: true,
            type: 'number'
        }
    },
    handler: function (argv) {
        console.log(argv.num1)
        console.log(argv.num2)
    }
})

yargs.command({
    command: 'update',
    describe: 'update',
    handler: function () {
        console.log("I'm update command")
    }
})

// console.log(yargs.argv)
yargs.parse()