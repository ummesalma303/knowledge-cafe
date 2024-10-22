import { useState,useEffect } from "react";
// import Blog from "./Blog";

function Blogs() {
    const [blogs, setBlogs] = useState();
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
        .then(data=>setBlogs(data))
    }, [])
    console.log(blogs);
    
    return (
        <div>
            {/* <h2>total: {blogs.length}</h2> */}
            {
                
       }
        </div>
    );
}

export default Blogs;