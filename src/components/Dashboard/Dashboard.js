import Accounts from './Accounts';
import './Dashboard.css';

export default function Dashboard({ state }){
    return(
    <>
    <Accounts state={ state }/>

    {/* <RecentTransactions transactions={ testtransactions }/>  */}
    {/* <CurrentBalance/> */}
    </>
    );
}