import { isCompositeComponent } from "react-dom/test-utils";
import { createBrowserRouter } from "react-router-dom";

import Author from '../pages/author/index';
import Category from '../pages/category/index';
import Description from '../pages/descriptions/index';
import Feed from '../pages/feed';
import Login from '../pages/login';
import Notfound from '../pages/notFound';
import Post from '../pages/post';
import Register from '../pages/register';
import Tag from '../pages/tag';
 

const Router = createBrowserRouter([
    {
        path:"/author/:id",
        element:<Author />,  
    },
    {
        path:"/category/:id",
        element:<Category/>,  
    },
    {
        path:"/description",
        element:<Description/>,  
    },
    {
        path:"/feed",
        element:<Feed/>,  
    },
    {
        path:"/login",
        element:<Login/>,  
    },
    {
        path:"*",
        element:<Notfound/>,  
    },
    {
        path:"/post/:id",
        element: <Post />  
    },
    {
        path:"/register",
        element:<Register />,  
    },
    {
        path:"/tag/:tagname",
        element:<Tag />,  
    },
])


export default Router;