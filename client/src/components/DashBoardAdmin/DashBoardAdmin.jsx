import React, { useState, useEffect } from 'react';
import style from '../DashBoardAdmin/DashBoardAdmin.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAnuncios } from '../../Redux/actions';
import RestrictedAccess from "../RestrictedAccess/RestrictedAccess"

const DashBoardAdmin = () => {
    const email = localStorage.getItem('currentUser');
    
    console.log("this ", email);
    const dispatch = useDispatch();
    const anuncios = useSelector((state) => state.allAnuncios);
    const [filterOption, setFilterOption] = useState("all"); // Default: Show all anuncios
    const filterOptions = {
        all: "All",
        primaria: "Primaria",
        universidad: "Universidad"
    };
    
    useEffect(() => {
        dispatch(getAllAnuncios());
    }, [dispatch]);
    
    if (email !== "aprendeconmigohenry@gmail.com"){
        return <RestrictedAccess />;
    }

    // Function to filter anuncios based on the selected filterOption
    const filteredAnuncios = () => {
        if (filterOption === "all") {
            return anuncios.data;
        } else {
            return anuncios.data.filter(anuncio => anuncio.grade === filterOption);
        }
    };

    return (
        <div>
            <h1>DashBoardAdmin</h1>
            {/* Buttons to choose the filter option */}
            {Object.keys(filterOptions).map(option => (
                <button
                    key={option}
                    onClick={() => setFilterOption(option)}
                >
                    {filterOptions[option]}
                </button>
            ))}
            <h4>anuncios generales</h4>
            <hr />
            {filteredAnuncios().map((anuncio) => {
                return (
                    <div key={anuncio.id}>
                        <h3>anuncio: {anuncio.title}</h3>
                        <h3>Nivel: {anuncio.grade}</h3>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}

export default DashBoardAdmin;



/*
dispatch 
useEfect cuando se monta el compo
importo la ruta   , [si tiene algun cambio se ejecuta]
useSelector (para ver lo que llega)
*/

