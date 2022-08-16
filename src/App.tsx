import { render } from "react-dom";
import { StrictMode, useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import ThemeContext from "./ThemeContext";
import { Provider } from "react-redux";
import store from "./store";
const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

const App = () => {
  // const theme = useState("darkblue");
  const getCurrentYear = (): number => {
    const d = new Date();
    const year: number = d.getFullYear();
    return year;
  }
  return (

    <StrictMode>
      {/* rendering a <Provider> component around our entire <App>, and passing the Redux store as a prop to <Provider></Provider> */}
       <Provider store={store}>
        <Suspense
          fallback={
            <h1 className="modal-wrapper fixed h-screen w-screen flex justify-center items-center bg-gradient-to-tr from-purple-500 to-pink-500 overflow-hidden text-white">
              Loading…
            </h1>
          }
        >
          <BrowserRouter>
            <header className="bg-gray-900 text-white py-[20px] text-center text-[26px] mb-10">
              <Link to="/">Adopt Me!</Link>
            </header>
            <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
            </Routes>
            <footer className="bg-slate-800 text-white py-[20px] text-center text-[26px] mt-10">
              <Link to="/">Copyright {getCurrentYear()}</Link>
            </footer>
          </BrowserRouter>
        </Suspense>
       </Provider>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
