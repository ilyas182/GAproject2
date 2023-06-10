import { useParams } from "react-router-dom"

export default function UserDetails(){
    const params = useParams();
    const userID = params.userId;
    
    return (
    <>
    <div>
        <p>details about user {userID}</p>
    </div> 
    </>
    )
}