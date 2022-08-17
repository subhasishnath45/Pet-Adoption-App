import React, { Component, MouseEvent, ReactNode } from "react";

interface IProps{
  images: string[];
  name: string;
}

export default class Carousel extends Component<IProps> {
  state = {
    active: 0,
  };
  // The defaultProps is a React component property that allows you to set default values for the props argument
  static defaultProps = {
    images: ["https://pets-images.dev-apis.com/pets/none.jpg"],
    name: "animal",
  };
  // arrow function must be used otherwise this will be undefined.
  // In case of arrow function this refers to the surrounding scope
  // As the class is surrounding this method, therefore this will refer
  // to this class.
  handleIndexClick = (event: MouseEvent<HTMLElement>): void => {
    // console.log(+event.target.dataset.index);

    if(!(event.target instanceof HTMLImageElement)){
      return;
    }
    if(event.target.dataset.index){
      this.setState({
        // event.target.dataset.index will target the data-index value of the image, that was clicked.
        // The data attribute comes back as a string. We want it to be a number, hence the +
        active: +event.target.dataset.index,
      });
    }

  };

  render(): ReactNode {
    // destructuring our state.
    const { active } = this.state;
    // destructuring our props that's comming from the parent component.
    // we will be passing down images prop
    // from Details to Carousels component.
    const { images, name } = this.props;
    console.log(this.props);
    return (
      <div className="carousel grid grid-cols-1 gap-4 px-9">
        <img
          data-testid="hero"
          src={images[active]}
          alt={name}
          className="w-2/3 h-[400px] object-cover object-center mx-auto rounded border-2 border-black"
        />
        <div className="w-2/3 mx-auto carousel-smaller flex flex-wrap justify-center items-center">
          {images.map((photo, index) => (
            <img
              data-testid={`thumbnail${index}`}
              src={photo}
              key={photo}
              role="presentation"
              data-index={index}
              onClick={this.handleIndexClick}
              className={
                index === active
                  ? "active w-1/5 rounded-full p-2 border-2 border-black"
                  : "w-1/5 rounded-full p-2 border-2 border-white"
              }
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}
