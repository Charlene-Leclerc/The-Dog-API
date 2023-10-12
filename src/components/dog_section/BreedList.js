import React, { useState, useEffect } from 'react';
import { BASE_URL, API_KEY } from '../../utils/API';
import axios from 'axios';
import BreedImage from './BreedImage';
import Pagination from '../Pagination'

const BreedList = () => {
    const [breeds, setBreeds] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    const [searchResults, setSearchResults] = useState('');

    const itemsPerPage = 10;


    const handlePageChange = ({ selected: selectedPage }) => {
        setCurrentPage(selectedPage);
    };

    const handleSearch = (event) => {
        const searchTerm = event.target.value.toLowerCase();

        if (searchTerm === '') {
            setSearchResults(breeds);
        } else {



            setTimeout(() => {
                const filteredBreeds = breeds.filter(breed => breed.name.toLowerCase().includes(searchTerm));
                setSearchResults(filteredBreeds);
            }, 1000)



        }
    };

    const offset = currentPage * itemsPerPage;
    const paginatedBreeds = breeds.slice(offset, offset + itemsPerPage);

    useEffect(() => {

        const fetchAllBreeds = async () => {

            try {
                await axios.get(`${BASE_URL}v1/breeds`, {
                    headers: {
                        'x-api-key': `${API_KEY}`,
                    }
                }).then(response => {

                    setBreeds(response.data);
                })
            } catch (error) {
                console.error(error);
            }
        }
        fetchAllBreeds();
    }, [])

    return (
        <div>
            <h1><span>Chiens</span></h1>
            <div className="search-pag">

                <Pagination length={breeds.length} itemsPerPage={itemsPerPage} handlePageChange={handlePageChange} />
                <input type="text" onChange={handleSearch} placeholder="Rechercher une race de chien" />
            </div>
            <div className="container">
                {searchResults.length == 0 ? (
                    paginatedBreeds.map((breed) => (
                        <div className="dog-box" id="dog-box" key={breed.id}>

                            <h2 ><span>{breed.name}</span></h2>
                            <BreedImage breedID={breed.id} />
                        </div>
                    ))
                ) : (
                    searchResults.map(breed => (
                        <div className="dog-box" id="dog-box" key={breed.id}>
                            <h2 ><span>{breed.name}</span></h2>
                            <BreedImage breedID={breed.id} />
                        </div>
                    ))
                )}

            </div>

        </div>
    );
};

export default BreedList;