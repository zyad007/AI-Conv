import { useParams } from "react-router-dom";
import { withRouter } from "../Hooks/withRouter";
import BotMenu from "./BotMenu";
import Profile from "./Profile";

const Sidebar = () => {

    return (
        <div className="w-[20%] h-full bg-slate-800 py-3 px-3 flex flex-col space-y-5">

            <BotMenu />

            <Profile />

        </div>
    );
}

export default withRouter(Sidebar);
