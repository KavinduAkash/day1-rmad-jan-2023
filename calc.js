/*
    sum, sub, mul, divi
*/

const yargs = require("yargs")

// Sum command
yargs.command({
    command: 'sum',
    describe: 'sum process',
    builder: {
        num1: {
            describe: "number 1",
            demandOption: true,
            type: 'number'
        },
        num2: {
            describe: "number 2",
            demandOption: true,
            type: 'number'
        }
    },
    handler: function (argv) {
        console.log(`${argv.num1} + ${argv.num2} = ${argv.num1 + argv.num2}`)
    
    }
})

// Sub command
yargs.command({
    command: 'sub',
    describe: 'sub',
    builder: {
        num1: {
            describe: "number 1",
            demandOption: true,
            type: 'number'
        },
        num2: {
            describe: "number 2",
            demandOption: true,
            type: 'number'
        }
    },
    handler: function (argv) {
        console.log(`${argv.num1} - ${argv.num2} = ${argv.num1 - argv.num2}`)
    
    }
})

// Mul command
yargs.command({
    command: 'mul',
    describe: 'mul',
    builder: {
        builder: {
            num1: {
                describe: "number 1",
                demandOption: true,
                type: 'number'
            },
            num2: {
                describe: "number 2",
                demandOption: true,
                type: 'number'
            }
        },
    },
    handler: function (argv) {
        console.log(`${argv.num1} * ${argv.num2} = ${argv.num1 * argv.num2}`)
    }
})

// Divi command
yargs.command({
    command: 'divi',
    describe: 'divi',
    builder: {
        num1: {
            describe: "number 1",
            demandOption: true,
            type: 'number'
        },
        num2: {
            describe: "number 2",
            demandOption: true,
            type: 'number'
        }
    },
    handler: function (argv) {
        console.log(`${argv.num1} / ${argv.num2} = ${argv.num1 / argv.num2}`)
    }
})

yargs.parse()