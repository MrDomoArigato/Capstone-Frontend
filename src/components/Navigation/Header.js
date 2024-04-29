import { Views } from '../../enums';
import './Navigation.css';

export default function Header({ state }){
    let title = "";
    if(state.View.current === Views.Dashboard){
        var userName = "friend";
        //var userName = state.User.current.nickname ? state.User.current.nickname: "friend";
        title =  "Welcome, " + userName + "!";
    } else if(Object.values(Views.Account).includes(state.View.current)){
        title = state.Account.current.accountName;
    } else if(state.View.current === Views.Budget){
        title = "Budget";
    } else if (state.View.current === Views.ProfileView){
        title = "Profile Settings";
        
    }

    return (
        <>
        <div className="p-3 header">
            <h1 className="display-1 custom-title">
                <img src={process.env.PUBLIC_URL + '/twitter_header_photo_1.png'} width={200} height={"auto"} alt="Capstone"/>
               <span> { title } </span> 
            </h1>
        </div>
        </>
    )
}