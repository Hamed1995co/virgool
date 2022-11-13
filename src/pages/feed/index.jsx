import { useEffect, useState } from "react";
import { getAllPosts } from "../../data/Posts";
import Header from "./components/header";
import Navbar from "./components/navbar";

const Feed = () =>{
    const [lastPosts,setlastPosts]= useState([]);

    useEffect(()=>{
        const {posts,error} = getAllPosts();
    },[])
    return(
        <>
            <Header />
            <Navbar />
            <div>Posts</div>
        
        
        </>
    );
}

export default Feed;