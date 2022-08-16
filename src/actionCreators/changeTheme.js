/**
 action creators are functions, that take a parameter and returns correct shape of action object with proper data.
 */
export default function changeTheme(theme) {
  return { type: "CHANGE_THEME", payload: theme };
}
