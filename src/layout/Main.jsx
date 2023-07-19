import React from 'react'
import {Movies} from '../components/Movies'
import {Search} from '../components/Search'
import { Preloader } from '../components/Preloader'

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
        url: `https://www.omdbapi.com/?apikey=${API_KEY}&s=`
    }

    componentDidMount () {
        fetch(this.state.url + 'shrek')
            .then(response => response.json())
            .then(result => this.setState({movies: result.Search, loading: false}))
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false });
            })
    }

    searchMovies = (state) => {
        this.setState({ loading: true })
        fetch(this.state.url + state.search + (state.type ? "&type=" + state.type: ''))
            .then(response => response.json())
            .then(result => this.setState({movies: result.Search, loading: false}))
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false });
            })
    }
    
    render() {
        const {movies, loading} = this.state;

        return <main className="container content">
            <Search searchMovies={this.searchMovies}/>
            {
                !loading ? (
                    <Movies movies={movies}/> 
                    ) : <Preloader />
            }
                </main>
        }
}

export {Main}