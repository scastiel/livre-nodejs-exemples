const sqlite3 = require('sqlite3')

const db = new sqlite3.Database(':memory:')

db.serialize(() => {
  db.run('create table users (login, name)')

  const stmt = db.prepare('insert into users values (?, ?)')

  const users = [
    { login: 'pierre', name: 'Pierre' },
    { login: 'paul', name: 'Paul' },
    { login: 'jacques', name: 'Jacques' }
  ]

  for (let i = 0; i < users.length; i++) {
    stmt.run(users[i].login, users[i].name)
  }

  db.each('select login, name from users', (err, row) => {
    console.log(row.login + ': ' + row.name)
  })
})
