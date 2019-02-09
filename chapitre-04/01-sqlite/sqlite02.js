const sqlite3 = require('sqlite3')
const db = new sqlite3.Database('sqlite02.db')

db.serialize(() => {
  db.run('create table if not exists log (date)')
  db.all('select date from log', (err, rows) => {
    if (rows.length == 0) {
      console.log('Première exécution !')
    } else {
      for (let i = 0; i < rows.length; i++) {
        console.log(rows[i].date)
      }
    }
  })

  const date = new Date().toLocaleString()
  const stmt = db.prepare('insert into log values (?)')
  stmt.run(date)
})
