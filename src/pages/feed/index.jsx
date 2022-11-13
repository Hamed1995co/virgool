import { useEffect, useState } from "react";
import { getAllPosts } from "../../data/Posts";
import Header from "./components/header";
import LastPostCard from "./components/LastPost";
import Navbar from "./components/navbar";
import Styles from "./Styles.module.css";

const Feed = () =>{
    const [lastPosts,setlastPosts]= useState([]);

    useEffect(()=>{
        
        // const getAllPosts = async () => {
        //     let { data, error } = await supabase.from('posts').select('*');
        //     return{data ,error};
        // }
       fetch('https://rkgrnxyxargcvoklwlon.supabase.co/rest/v1/posts?select=*',{
        method:"POST",
        headers:{
            apikey: process.env.REACT_APP_SUPABASE_ANON_KEYL,
            Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_ANON_KEY}`,
        }
       })
       .then((res)=>res.json())
       .then((res)=>{
        console.log(res);
        if(res.length>0){
            setlastPosts(res);
        }
       })
    },[])
    return(
        <>
            <Header />
            <Navbar />
            <div className={`${Styles.wrapper}`}>
                {
                    lastPosts.map((post)=>{
                        <LastPostCard postdata = {post}/>
                    })
                }
            </div>
        
        
        </>
    );
}

export default Feed;