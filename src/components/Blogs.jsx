import { useEffect, useState } from "react";
import Blog from "./blog";

const Blogs = ({handleBookMark, handleReadTime}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data)) 
    },[])

    return (
        <div>
            {
                blogs.map((blog) => <Blog key={blog.id} blog={blog} handleBookMark={handleBookMark} handleReadTime={handleReadTime} ></Blog>)
            }
        </div>
    );
};

export default Blogs;
