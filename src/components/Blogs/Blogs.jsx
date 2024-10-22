import { useState,useEffect } from "react";
import Blog from "../Blog/Blog";
// import Blog from "./Blog";

function Blogs() {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
        .then(data=>setBlogs(data))
    }, [])

    console.log(blogs);
    
    return (
        <div >
            <h2>Total: {blogs.length}</h2>
            {
                blogs.map(blog=><Blog key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
}

export default Blogs;