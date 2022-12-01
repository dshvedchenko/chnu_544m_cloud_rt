const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/rest.sqlite', (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message)
    throw err
  }else{
      console.log('Connected to the SQLite database.')
      db.run(`CREATE TABLE IF NOT EXISTS users (
              ID INTEGER PRIMARY KEY AUTOINCREMENT,
              name VARCHAR(30),
              email VARCHAR(30)
              );`,
      (err) => {
          if (err) {
              // Table already created
          }else{
            db.run('DELETE FROM users;', err => {if (err) { return console.log(err) } });
            db.run(`INSERT INTO users (name, email) 
                        VALUES ('Jerry', 'jerry@example.com'), 
                        ('George', 'george@example.com');`,
                    err => {if (err) { return console.log(err) } }
                )
          }
      });  
  }
})








const getUsers = (request, response) => {
  db.all('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results)
  })
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  db.all('SELECT * FROM users WHERE id = ?', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results)
  })
}

const createUser = (request, response) => {
  const { name, email } = request.body

  db.run('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (error, results) => {
    if (error) {
      throw error
    }
    console.log(this)
    response.status(201).send(`User added with ID: ${this.lastID}`)
  })
}

const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, email } = request.body

  db.run(
    'UPDATE users SET name = ?, email = ? WHERE id = ?',
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  db.run('DELETE FROM users WHERE id = ?', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}