import parser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import  axios  from 'axios';
import styled from 'styled-components';


const Detail = () => {
    
    const { id } = useParams()
    const [ gameDetail, setGameDetail ] = useState({})
    

    useEffect(() => {
        const getAxios = async () => {
        const detail = await axios(`http://localhost:3001/videogames/${id}`)
        setGameDetail(detail.data)
        }
        getAxios()
    },[id])
    if(gameDetail.description){ 
        return (
        <StyledDetail>

            <div>
            <h1>{gameDetail.name}</h1>
            <img src={gameDetail.background_image} width='600px' height='auto' alt="Loading..." />
            <h2>Genres: {gameDetail.genres.map(genre => genre.name).join(', ')}</h2>
            <h2>Rating: {gameDetail.rating}</h2>
            <h2>Platforms: {gameDetail.platforms}</h2>
            <h2>Released: {gameDetail.released}</h2>
            <article>{parser(gameDetail.description)}</article>
            </div>

        </StyledDetail>
    )}else{
        return (
            <p>Loading...</p>
        )
    }
};



export default Detail;