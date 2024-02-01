import { Views } from "../enums";

export default function Navigation({ setView }){
    return(
        <div className="border border-black text-center" style={{position:"relative", width: "100%"}}>
        <div className="border border-primary border-3 m-0 row align-items-center" style={{width: "100%", height: "18vh", margin:"0"}}>
            <div className="col-9 m-0 p-0 display-4">
                Navigation
            </div>
            <div className="col-3 m-0 p-0 display-4">
                UserProfile
            </div>
        </div>
        <div className="border border-primary border-3 m-0 row align-items-center" style={{width: "100%", height: "6vh"}}>
            <div className="col-1 m-0 p-0">
                <button type="button" className="btn btn-primary" onClick={() => setView(Views.Dashboard)}>Dashboard</button>
            </div>
            <div className="col-1 m-0 p-0">
                <button type="button" className="btn btn-primary" onClick={() => setView(Views.Account.Transactions)}>Account</button>
            </div>
        </div>
        </div>
    );
}