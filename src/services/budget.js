import { backend } from '../axios';

const getBudgets = async () => {
    try {
        const budgets = await backend.get(`/Budget`);
        return budgets;
    } catch (e) {
        console.log(e);
        //const msg = e?.response?.error.message ?? e?.message ?? 'Unknown Error';
        //document.body.innerHTML = e.response.data;
        return false;
    }
};

export{getBudgets};