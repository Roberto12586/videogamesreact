import React from 'react';
import Card from '../components/Card';
import games from '../games';
import BannerSection from '../components/BannerSection';

function BoardPage() {

    return (
        
        <div className='app'>
            <BannerSection />
            <h1>BESTSELLERS</h1>
            
            <div className='board'>

                {games.map((card) => {              
                    return (
                        <div className="board-row">
                            <Card
                                id={card.id}
                                title={card.title}
                                image={card.image}
                                price={card.price}
                            />
                        </div>
                    );
                })}
            </div>
        </div>

    )
}

export default BoardPage;