import React from 'react';
import { useEffect, useState } from "react";
import Banner from '../components/Banner'
import games from '../games';

function BannerSection() {
    const [index, setIndex] = useState(0);
    // const [isActive, setActive] = useState(false);

    const mod = (n, m) => {
        let result = n % m;

        return result >= 0 ? result : result + m;
    };

    let className = "banner";

    // const toggleClass = () => {
    //     setActive(!isActive);
    // };

    useEffect(() => {
        setTimeout(() => {
            setIndex((index + 1) % games.length);
        }, 2500);
    }, [index]);        //inicial

    return (



        <div className='slider'>

            {games.map((item, i) => {
                const indexLeft = mod(index - 1, games.length);
                const indexRight = mod(index + 1, games.length);



                if (i === index) {
                    className = "banner banner--active";
                } else if (i === indexRight) {
                    className = "banner banner--right";
                } else if (i === indexLeft) {
                    className = "banner banner--left";
                } else className = "banner";



                return (

                    <Banner
                        key={item.id}
                        description={item.description}
                        title={item.title}
                        className={className}
                    // selector={toggleClass()}       //setItem
                    />

                );
            })}

        </div>

    )
}

export default BannerSection