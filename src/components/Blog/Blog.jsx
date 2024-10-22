import { CiBookmarkPlus } from "react-icons/ci";
import PropTypes from "prop-types";
const Blog = ({ blog, handleAddToBookmarks, handleMarkAsRead }) => {
    // console.log(handleMarkAsRead);
  const {id, cover,title,author_img,author_name,posted_date,hashtags,reading_time,} = blog;
//   console.log(handleAddToBookmarks);
  return (
      <>
       <div className="space-y-3 my-5">
      <img src={cover} alt="" />
      <div className="space-y-3">
        <div className="flex justify-between">
          <div className="flex items-center space-x-3">
            <img className="w-14 rounded-full" src={author_img} alt="" />
            <div>
              <h2 className="text-2xl font-bold">{author_name}</h2>
              <p>{posted_date}</p>
            </div>
          </div>
          <div className="flex items-center text-xl">
                      <h3> {reading_time} min read </h3>
                      <span onClick={()=>handleAddToBookmarks(blog)}><CiBookmarkPlus /></span>
                  </div> 
          </div>
        </div>
        <h2 className="text-4xl">{title}</h2>
        <div>
          {hashtags.map((hashtag, i) => (
            <span className="mx-2 font-medium" key={i}>
              <a href="">{hashtag}</a>
            </span>
          ))}
        </div>
        <button className="underline text-purple-800 font-bold" >
          <button onClick={()=>handleMarkAsRead(id,reading_time)}>Marks as read</button>
        </button>
      </div>
      </>
  );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
};

export default Blog;
