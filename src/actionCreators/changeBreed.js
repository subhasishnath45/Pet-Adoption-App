/**
 action creators are functions, that take a parameter and returns correct shape of action object with proper data.
 */
export default function changeBreed(breed) {
  return { type: "CHANGE_BREED", payload: breed };
}
