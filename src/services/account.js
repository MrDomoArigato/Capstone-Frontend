import axios from '../axios';

const getAccounts = async () => {
    try {
        const accounts = await axios.get(`/Account/test`);
        return accounts;
    } catch (e) {
        const msg = e?.response?.error.message ?? e?.message ?? 'Unknown Error';
        console.error(msg);
        return false;
    }
};

export { getAccounts };