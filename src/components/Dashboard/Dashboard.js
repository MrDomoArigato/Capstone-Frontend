import Accounts from './Accounts';
import './Dashboard.css';
import RecentTransactions from './RecentTransactions';
import { testtransactions, TransactionList, Transactions, LoadTransaction } from '../Transaction/Transactions';
import ProfilePage from '../UserProfile';

export default function Dashboard({ state }){
    return(
    <>
    <Accounts state={ state }/>
    {/* <RecentTransactions transactions={ testtransactions }/>  */}
    {/* <CurrentBalance/> */}
    </>
    );
}