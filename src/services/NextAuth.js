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

const oauthRedirect = async (OAUTH) => {
    var params = new URLSearchParams(document.location.search);

    if (!params.has("code")) {
        OAUTH['verifier'] = newVerifier(48);
        console.log("verifier " + OAUTH.verifier);
        OAUTH['challenge'] = await newChallenge(OAUTH['verifier']);
        var url = "https://sso.ynlueke.com/application/o/authorize/?" +
            "client_id=" + OAUTH.client_id +
            "&response_type=" + OAUTH.response_type +
            "&response_mode=" + OAUTH.response_mode +
            "&code_challenge=" + OAUTH.challenge +
            "&code_challenge_method=" + OAUTH.challenge_method +
            "&redirect_uri=" + OAUTH.redirect_uri;
        console.log(url);
        console.log(OAUTH)
        window.location.href = url;
    } else {
        console.log(OAUTH);
        getToken("authorization_code", OAUTH.client_id, OAUTH.verifier, params.get("code"), OAUTH.redirect_uri).then((res) => {
            console.log(res);
        });
    }
};

export { oauthRedirect, getToken };

