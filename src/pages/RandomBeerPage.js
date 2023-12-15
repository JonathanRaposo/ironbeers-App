
import { useState, useEffect } from 'react';
import Header from '../components/Header';



const API_URL = 'https://ih-beers-api2.herokuapp.com/beers/random';

const RamdonBeerPage = () => {
    const [beer, setBeer] = useState({});

    useEffect(() => {
        fetch(API_URL)
            .then((response) => response.json())
            .then((data) => { setBeer(data) })
    }, [])


    return (
        <div className="RandomBeerPage">
            <Header />

            <div className='heading-container'>
                <img src={beer.image_url} alt="beer" />

                <h2>{beer.name}</h2>
                <p>{beer.tagline}</p>
                <p id="attenuation">{beer.attenuation_level}</p>
                <p>{beer.first_brewed}</p>
                <p>{beer.description}</p>
                <p id="createdBy">{beer.contributed_by}</p>

            </div>
        </div>
    );
}

export default RamdonBeerPage;