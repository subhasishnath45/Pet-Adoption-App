// named export of type Animal.
export type Animal = "dog" | "cat" | "bird" | "reptile" | "rabbit";

export type TParams = { id?: string };

// Interfaces are the names which are given to object types.
export interface Pet {
	id: number;
	name: string;
	animal: Animal;
	description: string;
	breed: string;
	images: string[];
	city: string;
	state: string;
}

export interface PetAPIResponse {
	numberOfResults: number;
	startIndex: number;
	endIndex: number;
	hasNext: boolean;
	pets: Pet[];
}

export interface BreedListAPIResponse {
	"animal": Animal;
	"breeds": string[];
}