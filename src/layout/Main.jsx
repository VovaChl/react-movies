import React, {useState, useEffect} from 'react'
import {Movies} from '../components/Movies'
import {Search} from '../components/Search'
import { Preloader } from '../components/Preloader'

const API_KEY = process.env.REACT_APP_API_KEY;

function Main () {
    const [movies, setMovies] = useState([]);
    const [loading, setLoadind] = useState(true);

    const searchMovies = (search, type) => {
        setLoadind(true);
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=` + search + (type !== 'all' ? "&type=" + type: ''))
            .then(response => response.json())
            .then(result => {
                setMovies(result.Search);
                setLoadind(false);
                })
            .catch((err) => {
                console.error(err);
                setLoadind(false);
            })
    };

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=shrek`)
            .then(response => response.json())
            .then(result => {
                setMovies(result.Search);
                setLoadind(false);
            })
            .catch((err) => {
                console.error(err);
                setLoadind(false);
        });
    }, []);

    return (
        <main className="container content">
        <Search searchMovies={searchMovies}/>
        { loading ? <Preloader /> : <Movies movies={movies} /> }
        </main>
    );
}

export {Main}