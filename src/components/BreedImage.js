import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY } from '../utils/API';

const BreedImage = ({ breedID }) => {
    const [image, setImage] = useState([]);

    useEffect(() => {
        const fetchDogImage = async () => {

            try {
                await axios.get(`${BASE_URL}v1/images/search?breed_ids=${breedID}`, {
                    headers: {
                        'x-api-key': `${API_KEY}`
                    }
                }).then(response => {
                    setImage(response.data[0].url);
                })
            } catch (error) {
                console.error(error);
            }


        };



        fetchDogImage();



    }, [breedID]);

    return (
        <div className="dog-img">
            <img src={image} alt="Dog" />
        </div>
    );
};

export default BreedImage;