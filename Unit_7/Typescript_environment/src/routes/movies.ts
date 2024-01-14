import express from "express";

const movieRoutes = express.Router();

let movies = [
    {
        id: 1,
        title: "Barbie",
        director: "Greta Gerwig",
        year: 2023,
        genre: "feminism"
    }
]

movieRoutes.get('/',(req, res) => {
    const year = parseInt(req.query.year as string)
    let movieList = [...movies]
    res.json(movies)
})

movieRoutes.post('/', (req, res) => {
    const body = req.body
    const movie = body 
    movies.push(movie)
    res.status(201).json(movie)
})


export default movieRoutes