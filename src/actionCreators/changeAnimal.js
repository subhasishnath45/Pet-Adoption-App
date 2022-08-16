/**
 action creators are functions, that take a parameter and returns correct shape of action object with proper data.
*/
export default function changeAnimal(animal) {
  return { type: "CHANGE_ANIMAL", payload: animal };
}
