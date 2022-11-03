import { useContext } from "react";
import { UserContext } from "../App";
export default function LogOut() {

 const { user,SetUser} = useContext (UserContext)
    return(
        <>
{user
?<button onClick ={() => SetUser()}>Logout</button>
: null

}
</>
    )
}