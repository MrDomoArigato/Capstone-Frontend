import Axios from "axios";

export const backend = Axios.create({
    baseURL: "http://localhost:5160"
});

export const oauth = Axios.create({
    baseURL: "http://localhost:3500"
});