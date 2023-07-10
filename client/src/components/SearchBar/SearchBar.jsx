import style from './SearchBar.module.css'
import { useState } from "react";
import { Link } from 'react-router-dom'; // añado esto mientras no tengamos la funcion onSearch


const SearchBar = () => {
        const [ name, setName ] = useState('');
        const handleChange = (event) => {
            setName(event.target.value)
        };
        return (
            <div className={style.container}>
             <input type='search' value={name} onChange={handleChange} />
             <Link to='/busqueda'>
             <button>Search</button>
             </Link>
            </div>
        );
    };
    export default SearchBar;