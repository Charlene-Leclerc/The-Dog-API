import React from 'react';
import BreedImage from './BreedImage';

const DogsImage = (props) => {
    return (


        <div className="dog-box" id="dog-box">

            <h2 ><span>{props.name}</span></h2>
            <BreedImage breedID={props.id} breedName={props.name} />
        </div>


    );
};

export default DogsImage;