const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return "Your notes..."
}

const loadNotes = () => {
    try
    {
        const databuffer = fs.readFileSync('My-notes.json')
        const dataJSON = databuffer.toString()
        const mynotes = JSON.parse(dataJSON)
        return mynotes
    } catch (e) {
        return []
    }
}

const saveNotes = (notes) => {
    const notesJSON = JSON.stringify(notes)
    fs.writeFileSync('My-notes.json', notesJSON)
}

const addNote = (title, body) => {
    const mynotes = loadNotes()
    const duplicate = mynotes.find((note) => note.title === title)

    if(!duplicate){
        mynotes.push({
            title: title,
            body: body
        })
        saveNotes(mynotes)
        console.log(chalk.bgGreen("New note has been added!"))
    } else {
        console.log(chalk.bgRed("Note title has already been taken!"))
    }
}

const deleteNote = (title) => {
    const mynotes = loadNotes()
    const revisednotes = mynotes.filter((note) => note.title !== title)

    if(revisednotes.length === mynotes.length){
        console.log(chalk.bgRed("No such note-title found!"))
    } else {
        saveNotes(revisednotes)
        console.log(chalk.bgGreen("Note has been deleted successfully"))
    }
}

const listNodes = () => {
    const mynotes = loadNotes()
    console.log(chalk.blue(getNotes()))
    mynotes.forEach((note) => console.log(chalk.green(note.title)))
}

const readNode = (title) => {
    const mynotes = loadNotes()
    const displaynote = mynotes.find((note) => note.title === title)
    
    if(displaynote) {
        console.log(chalk.green(displaynote.title))
        console.log(displaynote.body)
    } else {
        console.log(chalk.bgRed("No such note found!"))
    }
}


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    deleteNote: deleteNote,
    listNodes: listNodes,
    readNode: readNode
}