import { backend } from '../axios';

const getBudgets = async () => {
    try {
        const budgets = await backend.get(`/Budget`);
        return budgets;
    } catch (e) {
        if(e.response?.status > 400)
            console.log(e.message);
        //const msg = e?.response?.error.message ?? e?.message ?? 'Unknown Error';
        //document.body.innerHTML = e.response.data;
        return false;
    }
};

const updateBudgets = async (budgets) => {
    try {
        const newbudgets = await backend.put(`/Budget`, budgets);
        return newbudgets;
    } catch (e) {
        if(e.response?.status > 400)
            console.log(e.message);
        //const msg = e?.response?.error.message ?? e?.message ?? 'Unknown Error';
        //document.body.innerHTML = e.response.data;
        return false;
    }
};

const updateBudgetItem = async (budget) => {
    try {
        const newbudget = await backend.put(`/Budget/Item`, budget);
        return newbudget;
    } catch (e) {
        if(e.response?.status > 400)
            console.log(e.message);
        //const msg = e?.response?.error.message ?? e?.message ?? 'Unknown Error';
        //document.body.innerHTML = e.response.data;
        return false;
    }
}

const deleteBudgetItem = async (budget) => {
    try {
        const deletedbudget = await backend.delete(`/Budget/Item/${budget.id}`);
        return deletedbudget;
    } catch (e) {
        if(e.response?.status > 400)
            console.log(e.message);
        //const msg = e?.response?.error.message ?? e?.message ?? 'Unknown Error';
        //document.body.innerHTML = e.response.data;
        return false;
    }
}

export{getBudgets, updateBudgets, updateBudgetItem, deleteBudgetItem};