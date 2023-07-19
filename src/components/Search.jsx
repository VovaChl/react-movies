import React from "react"

class Search extends React.Component {

    state = {
        search: '',
        type: ''
    }

    handleKey = (e) => {
        if (e.key === 'Enter') {
            this.props.searchMovies(this.state);
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render () {
        const {type} = this.state;

        return <div className="row">
        <div className="col s12">
          <div className="input-field">
            <input 
                id="search" 
                type="search" 
                className="validate" 
                placeholder="Search"
                value={this.state.search}
                onChange={(e => this.setState({search: e.target.value}))}
                onKeyDown={this.handleKey}
            />
            <div className="radio-btns">
            <label>
                <input className="with-gap" type="radio" name="type" value="" onChange={this.handleChange} checked={type === ''}/>
                <span >All</span>
            </label>
            <label>
                <input className="with-gap" type="radio" name="type" value="movie" onChange={this.handleChange} checked={type === 'movie'}/>
                <span>Movies only</span>
            </label>
            <label>
                <input className="with-gap" type="radio" name="type" value="series" onChange={this.handleChange} checked={type === 'series'}/>
                <span>Series only</span>
            </label>
            </div>  
            <button className="btn search-btn" onClick={() => this.props.searchMovies(this.state)}>Search</button>
          </div>
        </div>
      </div>
    }
}

export {Search}