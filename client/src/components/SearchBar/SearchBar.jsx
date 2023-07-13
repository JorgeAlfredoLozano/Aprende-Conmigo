import style from './SearchBar.module.css'
import { useState } from "react";
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { materias } from "../BaseDeDatosHarco/baseDeDatos";
=======
import { Link } from 'react-router-dom'; // añado esto mientras no tengamos la funcion onSearch
>>>>>>> 8a602ecb0563915129144d4343c089bef2b988f4


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