const express = require("express");
const app = express();
const port = 3030;

const cors = require("cors");
const morgan = require("morgan");

const data = require("./data")

// SETUP MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

/*
GET
*/

app.get("/",(req,res) => {
  res.send("welcome")
})

app.get("/users",(req,res) => {
  res.json({users:data.users})
})

app.get("/users/:id",(req,res) => {
  const user = data.users.find(user => user.id == req.params.id)
  console.log(user)
  res.json(user)
  //res.json({users:data.users})
})

app.get("/books",(req,res) => {
  let books = data.books
  let sortVal = req.query.orderBy
  console.log(sortVal)
  if (sortVal) {
    books.sort((a,b)=>{
    if (b[sortVal]<a[sortVal]) return 1
    if (b[sortVal]>a[sortVal]) return -1
    if (b[sortVal] === a[sortVal]) return 0
    })
  }
  res.json({books:books})
})

app.get("/books/:id",(req,res) => {
  const book = data.books.find(book=> book.id == req.params.id)
  res.json(book)
})

app.get("/films",(req,res) => {
  let films = data.films
  if (req.query.director) {
  films = films.filter(film => film.director === req.query.director)
  }
  if (req.query.from) {
    films = films.slice(req.query.from-1)
  }
  if (req.query.limit) {
    films = films.slice(0,req.query.limit)
  }
  res.json({films:films})
})

app.get("/films/:id",(req,res) => {
  const film = data.books.find(film => film.id == req.params.id)
  res.json(film)
})

app.post("/users", (req,res) => {
  console.log("in post USERS, body is:", req.body)

  const newUser = {
    id: data.users.length+1,
    email: req.body.email
  }

  data.users.push(newUser)
  res.json({user:newUser})
})

app.post("/books", (req,res) => {
  console.log("in post USERS, body is:", req.body)

  const newBook = {
    id: data.users.length+1,
    title: req.body.title,
    director: req.body.director
  }
  data.books.push(newBook)
  res.json({book:newBook})
})

app.post("/films", (req,res) => {
  const newFilm = {
    id: data.films.length+1,
    title: req.body.title,
    director: req.body.director
  }

  data.films.push(newFilm)
  res.json({film:newFilm})
})


/* START SERVER */
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});