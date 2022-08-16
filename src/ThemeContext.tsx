import React, { createContext } from "react";
// creating a new context for our theme in our app.
// createContext is a function that returns an object with two React components in it: a Provider and a Consumer.
// we're actually passing a value and a function like  what useState returns.
const ThemeContext = createContext<[string, React.Dispatch<React.SetStateAction<string>>]>(["green", () => {}]);

export default ThemeContext;
