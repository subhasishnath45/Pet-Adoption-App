/**
 action creators are functions, that take a parameter and returns correct shape of action object with proper data.
 */
export default function changeLocation(location) {
  return { type: "CHANGE_LOCATION", payload: location };
}
