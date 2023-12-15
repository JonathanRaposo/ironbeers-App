
const SearchBar = ({ handleSearch }) => {

    return (
        <div className='SearchBar'>
            <label htmlFor='search'>Search a beer</label>
            <input
                type="text"
                name="search"
                onChange={handleSearch}
            />

        </div>
    );
}

export default SearchBar;