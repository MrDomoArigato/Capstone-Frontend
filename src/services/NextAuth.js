import { oauth } from '../axios'
import { createChallenge, createVerifier } from '../utilities';

class NextAuth {
    constructor(OAUTH){
        this.OAUTH = OAUTH;
        this.client_id = OAUTH.client_id;
        this.response_type = OAUTH.response_type;
        this.challenge_method = OAUTH.challenge_method;
        this.getChallenge();
        this.redirect_uri = OAUTH.redirect_uri;
    }

    getChallenge(){
        let strchallenge = sessionStorage.getItem("challenge");
        if(strchallenge != null){
            let challenge = JSON.parse(strchallenge);
            this.challenge = challenge.challenge;
            this.verifier = challenge.verifier;
        }
    }

    async newChallenge(){
        var verifier = createVerifier(48);
        this.verifier = verifier;
        var challenge = await createChallenge(verifier);
        this.challenge = challenge;

        sessionStorage.setItem("challenge", JSON.stringify({verifier: verifier, challenge: challenge}));

        return [verifier, challenge]
    }

    async getToken(code){
        try {
            await oauth.post('/application/o/token/', {
                grant_type: "authorization_code",
                client_id: this.client_id,
                code_verifier: this.verifier,
                code: code,
                redirect_uri: this.redirect_uri
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then((res) => {
                localStorage.setItem("authentication", JSON.stringify(res.data));
                return res.data
            });
        } catch (e) {
            console.log(e);
            //const msg = e?.response?.error.message ?? e?.message ?? 'Unknown Error';
            //document.body.innerHTML = e.response.data;
            return false;
        }
    }

    isExpired(token){
        const jwtPayload = JSON.parse(window.atob(token.split('.')[1]))
        return Date.now() >= jwtPayload.exp * 1000;
    }

    async refreshToken(refresh_token){
        try {
            await oauth.post('/application/o/token/', {
                grant_type: "refresh_token",
                client_id: this.client_id,
                refresh_token: refresh_token
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then((res) => {
                console.log("New Token");
                localStorage.setItem("authentication", JSON.stringify(res.data));
                if(res.status === 200)
                    return true;
                else
                    return false;
            });
        } catch (e) {
            console.log(e);
            //const msg = e?.response?.error.message ?? e?.message ?? 'Unknown Error';
            //document.body.innerHTML = e.response.data;
            return false;
        }
    }

    isAuthenticated(){
        var authentication = JSON.parse(localStorage.getItem("authentication"));
        if(authentication != null)
            if(this.isExpired(authentication.access_token)){
                console.log(`Expired ${this.isExpired(authentication.access_token)}`);
                return this.refreshToken(authentication.refresh_token);;
            } else
                return true;
        return false;
    }

    async redirect(){
        const [verifier, challenge] = await this.newChallenge();

        //redirect
        var url = "https://sso.ynlueke.com/application/o/authorize/?" +
            "client_id=" + this.client_id +
            "&response_type=" + this.response_type +
            "&code_challenge=" + challenge +
            "&code_challenge_method=" + this.challenge_method +
            "&redirect_uri=" + this.redirect_uri;
        console.log("Redirecting: " + url);
        window.location.href = url;
    }

    async oauthLogin() {
        var path = document.location.pathname;
        var params = new URLSearchParams(document.location.search);

        if (params.has("code") && path === "/callback") { //callback path + code query param
            //Get new access token
            this.getToken(params.get("code")).then(() => {
                window.location.href = "/"
            });
        } else {  //redirect to login
            this.redirect();
        }
    }
}

export { NextAuth };

