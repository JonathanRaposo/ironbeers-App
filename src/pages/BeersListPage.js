import { useState, useEffect } from 'react';
import Header from '../components/Header';
import BeerCard from '../components/BeerCard';
import SearchBar from '../components/SearchBar';

const API_URL = 'https://ih-beers-api2.herokuapp.com/beers';

const BeersListPage = () => {
    const [beers, setBeers] = useState([]);
    const [query, setQuery] = useState('');
    const [message, setMessage] = useState(false)



    useEffect(() => {
        fetch(API_URL)
            .then((response) => response.json())
            .then((data) => setBeers(data))
            .catch((err) => console.log('Error while fetching beers: ', err))
    }, [])

    const findBeer = (e) => {
        setQuery(e.target.value)

        fetch(`${API_URL}/search?q=${query}`)
            .then((response) => response.json())
            .then((data) => {
                if (!data.length) {
                    setMessage(!message)
                }
                else {
                    setBeers(data)
                    setMessage(false)
                }

            })
            .catch((err) => console.log('Error while searching beer: ', err))
    }

    return (
        <div className="BeersListPage">
            <Header />
            <SearchBar handleSearch={findBeer} />
            {message && <p id="no-result">No resulsts for "{query}"</p>}
            {beers.map((beer) => <BeerCard key={beer._id} beer={beer} />)}
        </div>
    );
}

export default BeersListPage;