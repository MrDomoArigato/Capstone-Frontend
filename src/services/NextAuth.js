import { oauth } from '../axios'
import { newChallenge, newVerifier } from '../utilities';

const getToken = async (grant_type, client_id, verifier, code, redirect_uri) => {
    try {
        const token = await oauth.post('/application/o/token/', {
            grant_type: grant_type,
            client_id: client_id,
            code_verifier: verifier,
            code: code,
            redirect_uri: redirect_uri
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        return token;
    } catch (e) {
        console.log(e);
        //const msg = e?.response?.error.message ?? e?.message ?? 'Unknown Error';
        //document.body.innerHTML = e.response.data;
        //https://sso.ynlueke.com/if/flow/default-provider-authorization-implicit-consent/?client_id=Fxyh2NIyR4jq10acBSTCjooQUDrcriqLpR5K4Yra&response_type=code&response_mode=query&code_challenge=8QWs57zFiKelObDlnCgYKcSdrlURQ5Nv_FORX9dOBdw&code_challenge_method=S256&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback
        return false;
    }
};

const isExpired = (token) => {
    const jwtPayload = JSON.parse(window.atob(token.split('.')[1]))
    return Date.now() >= jwtPayload.exp * 1000;
};

// const refreshToken = async (token) => {
//     if(isExpired(token)){
//         getToken("authorization_code", OAUTH.client_id, challenge.verifier, params.get("code"), OAUTH.redirect_uri).then((res) => {
//             if(res.status == 200)
//                 localStorage.setItem("authentication", res.data);
//         });
//     }
// };

const isAuthenticated = () => {
    /* var authentication = localStorage.getItem("authentication");
    if(authentication != null)
        return true; */
    return true;
}

const redirect = async (OAUTH) => {
    //new challenge
    var verifier = newVerifier(48);
    var challenge = await newChallenge(verifier);
    sessionStorage.setItem("challenge", JSON.stringify({verifier: verifier, challenge: challenge}));
    //redirect
    var url = "https://sso.ynlueke.com/application/o/authorize/?" +
        "client_id=" + OAUTH.client_id +
        "&response_type=" + OAUTH.response_type +
        "&code_challenge=" + challenge +
        "&code_challenge_method=" + OAUTH.challenge_method +
        "&redirect_uri=" + OAUTH.redirect_uri;
    console.log("Redirecting: " + url);
    window.location.href = url;
}

const oauthLogin = async (OAUTH) => {
    var path = document.location.pathname;
    var params = new URLSearchParams(document.location.search);
    
    if (params.has("code") && path === "/callback") { //callback path + code query param
        var challenge = JSON.parse(sessionStorage.getItem("challenge"));
        //Get new access token
        getToken("authorization_code", OAUTH.client_id, challenge.verifier, params.get("code"), OAUTH.redirect_uri).then((res) => {
            if(res.status === 200)
                localStorage.setItem("authentication", res.data);
            console.log(res);
            window.location.href = "/"
        });
    } else {  //redirect to login
        redirect(OAUTH);
    }
};

export { oauthLogin, getToken, redirect, isAuthenticated };

