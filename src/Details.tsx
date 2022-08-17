import React, { Component, lazy } from "react";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import { PetAPIResponse, Animal,TParams } from "./APIResponseTypes";
// import Modal from "./Modal";

// dynamically importing modal using lazy
const Modal = lazy(() => import("./Modal"));

class Details extends Component<{ params: TParams}> {
  // constructor method
  // constructor() {
  //   super();
  // our state object
  state = { 
    loading: true, 
    showModal: false, 
    animal: "" as Animal, 
    breed: "", 
    city: "", 
    state: "", 
    description:"", 
    name: "", 
    images: [] as string[] 
  };
  // }

  async componentDidMount() {
    const res = await fetch(
      `https://pets-v2.dev-apis.com/pets?id=${(this.props.params.id)!.toString()}`
    );
    const json = (await res.json()) as PetAPIResponse;
    // setting new state values
    // json.pets[0] will hold an object with all keys and values.
    this.setState(
      Object.assign(
        {
          loading: false,
        },
        json.pets[0]
      )
    );
  }
  // following method will reverse the showModal state value
  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };
  // following method is pointing to the external URL.
  adopt = () => (window.location.href = "https://bit.ly/pet-adopt");

  render() {
    if (this.state.loading) {
      return <h2>loading … </h2>;
    }
    const { animal, breed, city, state, description, name, images, showModal } =
      this.state;
    return (
      <div className="details">
        <Carousel images={images} name={name} />
        <div className="text-center px-9">
          <h1 className="text-6xl">{name}</h1>
          <h2 className="text-3xl">{`${animal} - ${breed} - ${city}, ${state}`}</h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                onClick={this.toggleModal}
                className="btn w-1/6 p-5 rounded-md my-4 text-white hover:text-zinc-300"
                style={{ backgroundColor: theme }}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          <p className="w-1/2 mx-auto text-justify mb-10">{description}</p>
          {showModal ? (
            <Modal>
              <div className="bg-white px-[200px] py-[100px] rounded-lg drop-shadow-2xl">
                <h1 className="text-2xl mb-5">
                  Would you like to adopt {name} ?
                </h1>
                <div className="buttons flex ">
                  <button
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 mr-2"
                    onClick={this.adopt}
                  >
                    Yes
                  </button>
                  <button
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10 ml-2"
                    onClick={this.toggleModal}
                  >
                    No
                  </button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}
// higher order component and returning Details component.
const WrappedDetails = () => {
  // using useparams hook
  const params = useParams<TParams>();
  // adding params prop
  // params is the value
  return (
    <ErrorBoundary>
      <Details params={params} />
    </ErrorBoundary>
  );
};

export default WrappedDetails;
