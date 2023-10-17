
import React, { useContext } from 'react';
import { BreedDataContext } from '../components/BreedDataContext';
import BreedImage from '../components/dog_section/BreedImage';
import BackNav from '../components/BackNav';


const BreedDescription = () => {
    const { breedData } = useContext(BreedDataContext);
    console.log(breedData)
    return (
        <>
            <header>
                <BackNav />
            </header>
            <section className='description'>

                <h1>{breedData.name}</h1>
                <div className="content">
                    <BreedImage breedID={breedData.id} breedName={breedData.name} />
                    <div className="data">
                        <p><span>Hauteur:</span> {breedData.height.metric}cm</p>
                        <p><span>Poid:</span> {breedData.weight.metric}kg</p>
                        <p><span>Origin:</span> {breedData.origin}</p>
                        <p><span>Temperament:</span> {breedData.temperament}</p>
                        <p><span>Durée de vie:</span> {breedData.life_span}</p>

                    </div>

                </div>

            </section>
        </>
    );
};

export default BreedDescription;