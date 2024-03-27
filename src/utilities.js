function base64urlencode(a) {
    var str = "";
    var bytes = new Uint8Array(a);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      str += String.fromCharCode(bytes[i]);
    }
    return btoa(str)
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");
  }

function sha256(plain) {
    // returns promise ArrayBuffer
    const encoder = new TextEncoder();
    const data = encoder.encode(plain);
    return window.crypto.subtle.digest("SHA-256", data);
  }

function dec2hex(dec) {
    return (dec + Math.pow(16, 6)).toString(16).substr(-6);
}

export function newVerifier(length){
    //return base64URLEncode(crypto.randomBytes(length));
    var array = new Uint32Array(56 / 2);
    array = window.crypto.getRandomValues(array);
    //return Array.from(array, dec2hex).join("");
    return "NR553xDC4Z67dbsYVPhDnicQE8QQi2Ff8rSXKYQnU0o";
}

export async function newChallenge(verifier){
    //return base64urlencode(await sha256(verifier));
    return "mgJm7qtKghc7gsTSrl-0Uk9TX8Hjr_DiNpZxGJl8Ml4";
} 