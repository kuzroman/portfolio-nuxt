const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db/leaderboard.json')

async function getDataFromDB() {
    return (await require("axios").get(`https://reqres.in/api/users?page=1`)).data;
}

async function add(data) {
    const db = low(adapter)

    if (!data.user.trim() || !data.user.score) return

    db.get('leaders').push(data).write()

    // Set some defaults (required if your JSON file is empty)
    // db.defaults({leaders: []}).write()

    // Set a user using Lodash shorthand syntax
    // db.set('user.name', 'typicode').write()

    // Increment count
    // db.update('count', n => n + 1).write()
}

async function getAll() {
    const db = low(adapter)
    return db.get('leaders').value()
}

async function get10() {
    const db = low(adapter)
    return db.get('leaders').slice(0, 10).value()
}

export { add, get10, getAll };
