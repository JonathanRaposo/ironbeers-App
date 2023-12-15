import { Link } from 'react-router-dom';
import beers from '../assets/beers.png'
import randomBeer from '../assets/random-beer.png';
import newBeer from '../assets/new-beer.png';

const HomePage = () => {

    return (
        <div className="HomePage">
            <div className="allBeers">
                <Link to="/beers">
                    <img src={beers} alt="beers" />
                    <h2>All Beers</h2>
                    <p>Lorenipsum dolor sit amet, consecteir adipiscing elit.Viviami
                        pharetra egastras lectus. sit amet elefend ex tincidunt in . Nam dictum arcu ut disgisnin varius</p>
                </Link>
            </div>

            <div className="randomBeer">
                <Link to="/random-beer">
                    <img src={randomBeer} alt="beers" />
                    <h2>Random Beer</h2>
                    <p>Lorenipsum dolor sit amet, consecteir adipiscing elit.Viviami
                        pharetra egastras lectus. sit amet elefend ex tincidunt in . Nam dictum arcu ut disgisnin varius</p>
                </Link>
            </div>
            <div className="newBeer">
                <Link to="/new-beer">
                    <img src={newBeer} alt="beers" />
                    <h2>New Beer</h2>
                    <p>Lorenipsum dolor sit amet, consecteir adipiscing elit.Viviami
                        pharetra egastras lectus. sit amet elefend ex tincidunt in . Nam dictum arcu ut disgisnin varius</p>
                </Link>

            </div>


        </div>
    );
}

export default HomePage;