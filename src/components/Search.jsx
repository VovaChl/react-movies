import React, {useState} from "react"

const Search = (props) =>  {
    const {
        searchMovies  = Function.prototype,
    } = props;

    const [search, setSearch] = useState ('');
    const [type, setType] = useState ('all')

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            searchMovies(search, type);
        }
    }

    const handleFilter = (e) => {
        setType(e.target.dataset.type);
        searchMovies(search, e.target.dataset.type);
    }

    return (
    <div className="row">
        <div className="col s12">
          <div className="input-field">
            <input 
                type="search" 
                className="validate" 
                placeholder="Search"
                value={search}
                onChange={(e => setSearch(e.target.value))}
                onKeyDown={handleKey}
            />
            <div className="radio-btns">
            <label>
                <input className="with-gap" type="radio" name="type" value="all" data-type="all" onChange={handleFilter} checked={type === 'all'}/>
                <span >All</span>
            </label>
            <label>
                <input className="with-gap" type="radio" name="type" value="movie" data-type="movie" onChange={handleFilter} checked={type === 'movie'}/>
                <span>Movies only</span>
            </label>
            <label>
                <input className="with-gap" type="radio" name="type" value="series" data-type="series" onChange={handleFilter} checked={type === 'series'}/>
                <span>Series only</span>
            </label>
            </div>  
            <button className="btn search-btn" onClick={() => searchMovies(search, type)}>Search</button>
          </div>
        </div>
      </div>
    )
}

export {Search}