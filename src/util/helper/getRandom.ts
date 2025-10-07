import { MAX_POKEMON_ID } from "../../constants/calc/Calc";

const getRandomId = () => Math.floor(Math.random() * MAX_POKEMON_ID) + 1;
export default getRandomId;