import React from 'react';
import { useParams } from 'react-router-dom';
import Details from '../components/Details'
import games from '../games';

function DetailsPage() {
    const { id } = useParams();              //id es path de app
    const thisGame = games.find(info => info.id === parseInt(id,10));          //pasamos a int el string id de path
    
    return (

        <Details

            title={thisGame.title}
            description={thisGame.description}
            imageDescription={thisGame.imageDescription}
            price={thisGame.price}
        />

    )
}

export default DetailsPage;