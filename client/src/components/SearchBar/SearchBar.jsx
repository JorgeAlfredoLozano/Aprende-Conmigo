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
<<<<<<< HEAD
             <input type='search' value={name} onChange={handleChange} />
             <Link to='/busqueda'>
             <button>Search</button>
=======
             <input className={style.input} type='search' value={name} onChange={handleChange} />
             <Link to='/busqueda'>
             <button className={style.boton}>Buscar</button>
>>>>>>> 58375bbc69c5c49eb9cb295d70c1c324e2f2d397
             </Link>
            </div>
        );
    };
    export default SearchBar;