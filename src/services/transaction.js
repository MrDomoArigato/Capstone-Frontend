import axios from '../axios';

const getTransactions = async (accountId) => {
    try {
        const transactions = await axios.get(`/Transaction/${accountId}`);
        return transactions;
    } catch (e) {
        const msg = e?.response?.error.message ?? e?.message ?? 'Unknown Error';
        console.error(msg);
        return false;
    }
};

const createTransaction = async (transaction) => {
    try {
        const response = await axios.post(`/Transaction/`, {params: transaction});
        return response;
    } catch (e) {
        const msg = e?.response?.error.message ?? e?.message ?? 'Unknown Error';
        console.error(msg);
        return false;
    }
};

const deleteTransaction = async (transaction) => {
    try {
        const response = await axios.post(
            `/Transaction/${transaction.accountId}:${transaction.transactionId}`);
        return response === transaction;
    } catch (e) {
        const msg = e?.response?.error.message ?? e?.message ?? 'Unknown Error';
        console.error(msg);
        return false;
    }
};

export { getTransactions, deleteTransaction };