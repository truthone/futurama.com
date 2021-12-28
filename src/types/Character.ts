export interface character{
    name: {
        first: string,
        middle: string,
        last: string
    },
    images: {
        main: string
    },
    gender: string,
    species: string,
    homePlanet: string,
    occupation: string,
    sayings: string[],
    id: number,
    age: string
}