import { DummyHotelA } from "./hotel.js";

const hotelA = new DummyHotelA("monte crystal", 30, 10, "123 str bayelsa");
const hotelB = new DummyHotelA("ebitari", 20, 5, "345 str bayelsa");
const hotelC = new DummyHotelA("jasmine", 25, 14, "567 str bayelsa");
const hotelD = new DummyHotelA("teps", 20, 16, "678 str bayelsa");
export const hotels = [hotelA, hotelB, hotelC, hotelD];
