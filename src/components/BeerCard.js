import { Link } from 'react-router-dom';

const BeerCard = ({ beer }) => {

    return (
        <div className='BeerCard'>
            <Link to={`/beers/${beer._id}`}>
                <img src={beer.image_url} alt="beer" />
                <div>
                    <h3>{beer.name}</h3>
                    <p>{beer.tagline}</p>
                    <p><span>Created By: </span>{beer.contributed_by}</p>
                </div>
            </Link>
        </div>
    );
}

export default BeerCard;