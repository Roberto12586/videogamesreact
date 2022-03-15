const Banner = (props) => {
    return (

        <div className={props.className}>

            <div className="awards">AWARDED AND RECOMMENDED</div>
            <h4>{props.title}</h4>
            
            <div className="awards-info">
                {/* <div className="selector" onClick={() => props.selector}>&#8594;</div> */}
                <p>{props.description}</p>
                {/* <div className="selector" onClick={() => props.selector}>&#8594;</div> */}
            </div>
            <button className="install" >INSTALL GAME</button>
            <button className="favorites" >ADD TO FAVORITES</button>

        </div>
    )
}

export default Banner;