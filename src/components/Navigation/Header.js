import { Views } from '../../enums';

export default function Header({ state }){
    let title = "";
    if(state.View.current === Views.Dashboard){
        var userName = state.Account.AccountOwner;
        title =  "Welcome, " + userName + "!";
    } else if(Object.values(Views.Account).includes(state.View.current)){
        title = state.Account.current.accountName;
    } else if(state.View.current === Views.Budget){
        title = "Budget";
    } else if (state.View.current === Views.ProfileView){
        title = "Profile Settings";
    }else if(state.View.current === Views.Overview){
        title = "Overview";
    }

    return (
        <div className="p-3 header">
            <h1 className="display-1 custom-title">{ title }</h1>
        </div>
    )
}