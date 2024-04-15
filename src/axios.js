import Axios from "axios";

export const backend = Axios.create({
    baseURL: "http://localhost:5160"
});

export const oauth = Axios.create({
    baseURL: "https://sso.ynlueke.com",
    headers: {
        "X-Dev-Id": "N6k4mqzCaUUy"
    }
});

oauth.interceptors.request.use(config => {
    console.log(config);
    if(config.method == "post")
        config.headers['X-Dev-Id'] = "N6k4mqzCaUUy";
    return config;
});