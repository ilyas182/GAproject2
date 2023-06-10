import { Link, Outlet } from "react-router-dom";

export default function User(){
    return(
        <>
        <div>
            <Link to="1"><p>User 1</p></Link>
            
            <p>User 2</p>
            <p>User 3</p>
            <Outlet/>
        </div>
        </>
    )
}