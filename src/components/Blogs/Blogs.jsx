import { useState,useEffect } from "react";
import Blog from "../Blog/Blog";
// import Blog from "./Blog";
import PropTypes from "prop-types";

function Blogs({ handleAddToBookmarks,handleMarkAsRead }) {
    // console.log(handleAddToBookmarks);
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
        .then(data=>setBlogs(data))
    }, [])

    // console.log(blogs);
    
    return (
        <div >
            <h2>Total: {blogs.length}</h2>
            {
                blogs.map(blog=><Blog key={blog.id} blog={blog} handleAddToBookmarks={handleAddToBookmarks} handleMarkAsRead={handleMarkAsRead}></Blog>)
            }
        </div>
    );
}
Blogs.propTypes = {
    handleAddToBookmarks: PropTypes.func.isRequired,
    handleMarkAsRead:PropTypes.func.isRequired
};
export default Blogs;