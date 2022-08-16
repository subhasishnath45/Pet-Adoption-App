import React, { FunctionComponent } from "react";
import Pet from "./Pet";
import {Pet as IPet} from './APIResponseTypes';

const Results: FunctionComponent<{pets: IPet[]}> = ({pets})=>{
  // destructuring props to extract a key
  //   console.log(pets);
  return (
    <div className="search grid gap-4 grid-cols-1 lg:grid-cols-3 sm:grid-cols-2">
      {!pets.length ? (
        <h2>No pets found</h2>
      ) : (
        pets.map((pet) => (
          <Pet
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            key={pet.id}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            description={pet.description}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
}

export default Results;
