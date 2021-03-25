const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db/leaderboard.json')

async function add(data) {
    const db = low(adapter)
    // console.log('data', data, !data.user.trim(), !data.score);
    if (!data.user.trim() || !data.score) return
    db.get('leaders').push(data).write()
}

async function getAll() {
    const db = low(adapter)

    db.defaults({leaders: []}).write()

    return db.get('leaders').value()
}

export {add, getAll};
