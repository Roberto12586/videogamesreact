import { Link
} from 'react-router-dom';

const Details = (props) => {
    return (
        <div className="details">

            <div className="back">
            <Link to={`/`} style={{ textDecoration: 'none', color: "white" }}>&#8678;</Link></div>

            <div className="titles">
                <div className="oval">&#9737;
                    <h1>NEW RELEASE</h1>
                </div>
                {props.title}
            </div>

            <div className="Mask">
                <div className="price">{props.price}</div>
                <button className="install" >INSTALL GAME</button>
            </div>

            <div className="description">
                <img className="imgdesc" src={props.imageDescription} alt={props.title} />
                <p>{props.description}</p>
            </div>

        </div>
    )
}

export default Details;