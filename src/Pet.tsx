import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface IProps {
	id: number;
	name: string;
	animal: "dog" | "cat" | "bird" | "reptile" | "rabbit";
	description: string;
	breed: string;
	images: string[];
  location: string;
}
// passing props for this component.
const Pet: FunctionComponent<IProps> = (props: IProps) => {
  const { name, animal, breed, images, location, id } = props;
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images && images.length) {
    hero = images[0];
  }
  return (
    <Link to={`/details/${id}`} className="pet relative block">
      <div className="image-container">
        <img data-testid="thumbnail" src={hero} alt={name} />
      </div>
      <div className="info absolute w-full bottom-0 left-0 bg-gradient-to-tr from-white to-transparent px-2 py-2">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
