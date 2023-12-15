import Header from '../components/Header'
import { useState } from 'react';



const API_URL = 'https://ih-beers-api2.herokuapp.com/beers';

const NewBeerPage = () => {
    const [name, setName] = useState('');
    const [tagline, setTagline] = useState('');
    const [description, setDescription] = useState('');
    const [firstBrew, setFirstBrew] = useState('');
    const [brewersTip, setBrewersTip] = useState('');
    const [attenuationLevel, setAttenuationLevel] = useState(0);
    const [contributedBy, setContributedBy] = useState('');
    const [message, setMessage] = useState(null)



    const handleSubmit = (e) => {
        e.preventDefault();

        const newBeer = {
            name,
            tagline,
            description,
            first_brewed: firstBrew,
            brewers_tips: brewersTip,
            attenuation_level: attenuationLevel,
            contributed_by: contributedBy
        }
        fetch(`${API_URL}/new`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBeer)
        })
            .then((response) => response.json())
            .then((data) => {
                setMessage(data.message)
                setName('');
                setTagline('');
                setDescription('');
                setFirstBrew('');
                setBrewersTip('');
                setAttenuationLevel(0);
                setContributedBy('');

            })
            .catch((err) => console.log('Error while adding new beer: ', err))


    }
    return (
        <div className="NewBeerPage">
            <Header />

            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor='tagline'>Tagline</label>
                <input
                    type="text"
                    name="tagline"
                    id="tagline"
                    value={tagline}
                    onChange={(e) => setTagline(e.target.value)}
                />
                <label htmlFor='firstBrewed'>First Brewed</label>
                <input
                    type="text"
                    name="firstBrewed"
                    id="firstBrewed"
                    value={firstBrew}
                    onChange={(e) => setFirstBrew(e.target.value)}
                />

                <label htmlFor='description'>Description</label>
                <textarea
                    cols='5'
                    rows='10'
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}>

                </textarea>
                <label htmlFor='brewersTip'>Brewers Tips</label>
                <input
                    type="text"
                    name="brewersTip"
                    id="brewersTip"
                    value={brewersTip}
                    onChange={(e) => setBrewersTip(e.target.value)}
                />
                <label htmlFor='attenuationLevel'>Attenuation Level</label>
                <input
                    type="number"
                    name="attenuationLevel"
                    id="attenuationLevel"
                    value={attenuationLevel}
                    onChange={(e) => setAttenuationLevel(e.target.value)}
                />
                <label htmlFor='contributedBy'>Contributed By</label>
                <input
                    type="text"
                    name="contributedBy"
                    id="contributedBy"
                    value={contributedBy}
                    onChange={(e) => setContributedBy(e.target.value)}
                />
                <button type="submit">ADD NEW</button>
                {message && <p className='message-para'>{message}</p>}
            </form>
        </div>
    );
}

export default NewBeerPage;