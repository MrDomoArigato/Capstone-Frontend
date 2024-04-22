import { Views } from '../../enums';

export default function Header({ state }){
    let title = "";
    if(state.View.current === Views.Dashboard){
        var userName = state.Account.accountOwner;
        title =  "Welcome, " + userName + "!";
    } else if(Object.values(Views.Account).includes(state.View.current)){
        title = state.Account.current.accountName;
    } else if(state.View.current === Views.Budget){
        title = "Budget";
    }

    return (
        <div className="p-3">
            <h1 className="display-1 custom-title">{ title }</h1>
        </div>
    )
}