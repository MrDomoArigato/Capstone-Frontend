import { backend } from '../axios';

const getAccounts = async () => {
    try {
        const accounts = await backend.get(`/Account/user`);
        return accounts;
    } catch (e) {
        console.log(e);
        //const msg = e?.response?.error.message ?? e?.message ?? 'Unknown Error';
        //document.body.innerHTML = e.response.data;
        return false;
    }
};

const deleteAccount = async (account) => {
    try {
        console.log(account);
        const response = await backend.delete(
            `/Account/${account.accountId}`);
        return response === account;
    } catch (e) {
        console.log(e);
        return false;
    }
};

const createAccount = async(account) => {
    try{
        console.log(account);
        const response = await backend.post('/Account/', account);
        return response;
    } catch(e){
       // const msg = e?.response?.error.message ?? e?.message ?? 'Unknown Error';
        //console.error(msg);
        console.log(e);
        return false;
    }
}

export { getAccounts, deleteAccount, createAccount};