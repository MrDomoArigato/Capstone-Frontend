import Axios from "axios";

export const backend = Axios.create({
    baseURL: "https://capstone.ynlueke.com/api"
});

backend.interceptors.request.use(config => {
    let auth = JSON.parse(localStorage.getItem("authentication"));
    config.headers.Authorization = `Bearer ${auth.access_token}`;

    return config;
});

export const oauth = Axios.create({
    baseURL: "https://sso.ynlueke.com"
});

oauth.interceptors.request.use(config => {
    if(config.url == "/application/o/userinfo/"){
        let auth = JSON.parse(localStorage.getItem("authentication"));
        config.headers.Authorization = `Bearer ${auth.access_token}`;
    }

    config.headers['X-Dev-Id'] = "N6k4mqzCaUUy";

    return config;
});