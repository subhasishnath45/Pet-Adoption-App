import React, { useState, useEffect } from "react";
import { Animal, BreedListAPIResponse } from "./APIResponseTypes";
// to store breed locally.
const localCache:{
  [index: string]: string[];
} = {};

type Status = "unloaded" | "loading" | "loaded";

// passing down animal props to our custom hook
// our custom hook will use other built-in hooks
function useBreedList(animal: Animal): [string[], Status] {
  const [breedList, setBreedList] = useState([] as string[]);
  const [status, setStatus] = useState("unloaded" as Status);
  useEffect(() => {
    if (!animal) {
      // when there is no animal
      setBreedList([]); // empty breedlist
    } else if (localCache[animal]) {
      // if animal is in cache
      // load from there.
      setBreedList(localCache[animal]);
    } else {
      // making a quest to an API to fetch fresh breedlist.
      void requestBreedList();
    }
    // async function to fetch data from API
    async function requestBreedList() {
      setBreedList([]); // emptying breedList
      setStatus("loading" as Status); // status is loading.
      const res: Response = await fetch(
        `https://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await res.json() as BreedListAPIResponse;
      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);
      setStatus("loaded" as Status);
    }
  }, [animal]); // animal is a prop, based on which the effect will run.
  // custom hook will return the following array
  return [breedList, status];
}

export default useBreedList;
