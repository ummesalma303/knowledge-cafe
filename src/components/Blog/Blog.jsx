import PropTypes from 'prop-types';
const Blog = ({ blog }) => {
    const {cover,title,author_img,author_name,posted_date,hashtags} = blog;
    // console.log(blog);
    return (
        <div className='space-y-3 my-5'>
            <img src={cover} alt="" />
            <div className='space-y-3'>
            <div className='flex items-center space-x-3'>
                <img className='w-14 rounded-full' src={author_img} alt="" />
                <div>
                    <h2 className='text-2xl font-bold'>{ author_name}</h2>
                    <p>{ posted_date}</p>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <div>
                {
                    hashtags.map((hashtag, i) => <span className='mx-2 font-medium' key={i}><a href="">{ hashtag}</a></span>)
                }
            </div>
            <button className='underline text-purple-800 font-bold'><a href="">Marks as read</a></button>
            </div>
            
        </div>
    );
};

Blog.propTypes = {
    blog:PropTypes.object.isRequired
};

export default Blog;