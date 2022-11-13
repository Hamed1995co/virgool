import { useParams } from "react-router-dom";

const Tag = () =>{

    // const Params = useParams();
    // const TagName = Params.tagname

    const {tagname} =useParams();
    return(
        <>
            <div>Tag:{tagname}</div>
        
        
        </>
    );
}

export default Tag;