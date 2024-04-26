import Accounts from './Accounts';
import './Dashboard.css';
import { ProfileView } from '../UserProfile/UserProfile';

export default function Dashboard({ state }){
    return(
    <>
    <Accounts state={ state }/>
    <ProfileView state = { state }/>

    {/* <RecentTransactions transactions={ testtransactions }/>  */}
    {/* <CurrentBalance/> */}
    </>
    );
}