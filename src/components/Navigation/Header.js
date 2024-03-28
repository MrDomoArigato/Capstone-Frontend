import { Views } from '../../enums';

export default function Header({ state }){
    let title = "";
    if(state.View.current === Views.Dashboard){
        title = "Dashboard";
    } else if(Object.values(Views.Account).includes(state.View.current)){
        title = state.Account.current.accountName;
    } else if(state.View.current === Views.Budget){
        title = "Budget";
    }

    return (
        <div className="p-3">
            <h1 className="display-1">{ title }</h1>
        </div>
    )
}