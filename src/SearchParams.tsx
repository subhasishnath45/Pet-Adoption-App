import React, { useState, useEffect, FunctionComponent } from "react";
import { useSelector, useDispatch } from "react-redux";
import Results from "./Results";
import useBreedList from "./useBreedList";

import changeLocation from './actionCreators/changeLocation';
import changeAnimal from './actionCreators/changeAnimal';
import changeBreed from './actionCreators/changeBreed';
import changeTheme from './actionCreators/changeTheme';

import { PetAPIResponse, Pet as IPet, Animal } from "./APIResponseTypes";
import store from "./store";

const ANIMALS: Animal[] = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams: FunctionComponent = () => {
  // const [location, setLocation] = useState("");
  // const [animal, setAnimal] = useState("" as Animal);
  // const [breed, setBreed] = useState("");

  /*
  useSelector()​ allows you to extract data from the Redux store state, using a selector function. 
  */ 
  const animal = useSelector((state) => state.animal);
  const location = useSelector((state) => state.location);
  const theme = useSelector((state) => state.theme);
  const breed = useSelector((state) => state.breed);

  /**
This hook returns a reference to the dispatch function from the Redux store. You may use it to dispatch actions as needed.
   */
  const dispatch = useDispatch();

  // pets will hold an array with all the pets comming from API.
  const [pets, setPets] = useState([] as IPet[]);
  // useBreedList is a custom hook.
  const [breeds] = useBreedList(animal as Animal);

  useEffect(() => {
    void requestPets();
  }, []);

  // async function to get data from API endpoint
  async function requestPets() {
    // response of the fetch request
    const response: Response = await fetch(
      `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    // takes a response and parsing the body text as JSON
    const json = (await response.json()) as PetAPIResponse;
    // console.log(json.pets);
    setPets(json.pets);
  }

  function handleAnimalChange(e){
    dispatch(changeBreed(""));
    dispatch(changeAnimal(e.target.value));
  }

  return (
    <div className="search-params my-0 mx-auto px-0 w-11/12">
      <form
        className="search-params p-10 mb-10 rounded-lg bg-gray-200 shadow-lg flex flex-col justify-center items-center divide-y divide-gray-900"
        onSubmit={(e) => {
          e.preventDefault();
          void requestPets();
        }}
      >
        <label htmlFor="location" className="search-label">
          Location
          <input
            className="search-control block"
            id="location"
            onChange={(e) => dispatch(changeLocation(e.target.value))}
            value={location}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal" className="search-label">
          Animal
          <select
            className="search-control block"
            id="animal"
            value={animal}
            onChange={handleAnimalChange}
            onBlur={handleAnimalChange}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed" className="search-label">
          breed
          <select
            className="search-control disabled:opacity-50 block"
            disabled={!breeds.length}
            id="breed"
            value={breed}
            onChange={(e) => dispatch(changeBreed(e.target.value))}
            onBlur={(e) => dispatch(changeBreed(e.target.value))}
          >
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="theme" className="search-label">
          Theme
          <select
            className="search-control block"
            value={theme}
            onChange={(e) => dispatch(changeTheme(e.target.value))}
            onBlur={(e) => dispatch(changeTheme(e.target.value))}
          >
            <option value="peru">Peru</option>
            <option value="darkblue">Dark Blue</option>
            <option value="chartreuse">Chartreuse</option>
            <option value="mediumorchid">Medium orchid</option>
          </select>
        </label>
        <button
          style={{ backgroundColor: theme }}
          className="search-control rounded px-6 py-2 text-white hover:opacity-50 border-none"
        >
          Submit
        </button>
      </form>
      <Results pets={pets} />
    </div>
  );
}

export default SearchParams;
