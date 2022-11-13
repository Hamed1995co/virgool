import { useParams } from "react-router-dom";

const Author = () =>{

    const {id} = useParams();
    return(
        <div>
            <h1>Author : {id}</h1>
        </div>
    );
}

export default Author;