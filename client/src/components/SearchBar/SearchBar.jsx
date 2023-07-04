import style from './SearchBar.module.css'
import { useState } from "react"


const SearchBar = ({onSearch}) => {

    const [ name, setName ] = useState('');

    const handleChange = (event) => {
        setName(event.target.value)
    };

    return (
        <div>
         <input type='search' value={name} onChange={handleChange} />
         <button onClick={() => onSearch(name)}>Search</button>
        </div>
    );
};

export default SearchBar;