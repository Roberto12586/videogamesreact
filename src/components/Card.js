import React from 'react';
import {
    Link
} from 'react-router-dom';

const Card = (props) => {
    return (
        <>
            <div className="image-item">
                <img src={props.image} alt={props.title} />
            </div>
            <div className="info">
                <p className="games-titles">
                    {props.title}
                </p>
                <br />
                <span className="USD">
                    {props.price}
                </span>
                <button className="Rectangle" >
                    <Link to={`/game/details/${props.id}`}>BUY NOW</Link>
                </button>
            </div>

        </>
    );
};


export default Card;