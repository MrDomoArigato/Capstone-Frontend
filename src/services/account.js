import { backend } from '../axios';

const getAccounts = async () => {
    try {
        const accounts = await backend.get(`/Account/test`);
        return accounts;
    } catch (e) {
        console.log(e);
        //const msg = e?.response?.error.message ?? e?.message ?? 'Unknown Error';
        //document.body.innerHTML = e.response.data;
        return false;
    }
};

export { getAccounts };