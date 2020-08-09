const chalk = require('chalk')
const validator = require('validator')
const yargs = require('yargs')
const notes = require('./notes')

yargs.command({
    command: 'add',
    describe: 'Adding a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'String'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'String'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'delete',
    describe: 'Deleting a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'String'
        }
    },
    handler(argv) {
        notes.deleteNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List all the notes',
    handler() {
        notes.listNodes()
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNode(argv.title)
    }
})

yargs.parse()