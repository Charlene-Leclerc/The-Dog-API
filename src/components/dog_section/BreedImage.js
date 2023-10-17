import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY } from '../../utils/API';
import { useNavigate } from "react-router-dom";
import { BreedDataContext } from '../BreedDataContext';



const BreedImage = ({ breedID, breedName }) => {
    const [image, setImage] = useState([]);
    const { setBreedData } = useContext(BreedDataContext);

    const navigate = useNavigate();
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

    const handleClick = async (breed) => {
        try {
            const response = await axios.get(
                `https://api.thedogapi.com/v1/breeds/search?q=${breed}`,
                {
                    headers: {
                        "x-api-key": "YOUR_API_KEY",
                    },
                }
            );
            setBreedData(response.data[0]); // Assuming the response is an array with a single breed object
            console.log(response.data[0])
            navigate("/description"); // Navigate to the breed-details page
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="dog-img">
            <img src={image} alt="Dog" onClick={() => handleClick(breedName)} />
        </div>
    );
};

export default BreedImage;
