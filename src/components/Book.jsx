import { useNavigate } from "react-router-dom"

export default function Book(){
    const navigate = useNavigate();
    
    return (
    <>
    <button onClick={() => navigate(-1)}>Back</button>
    Book description
    </>
    )
}