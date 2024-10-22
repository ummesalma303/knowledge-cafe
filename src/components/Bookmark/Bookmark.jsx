
// import PropTypes from 'prop-types';

import PropTypes from "prop-types";

const Bookmark = ({ book}) => {
    const { title} = book;
    return (
        <div >
          <div className="p-6 bg-gray-300">
          {/* <h2>Bookmarked Blogs : 8</h2> */}
              <div  className="p-4 bg-white">
                    <h2>{ title}</h2>
              </div>
          </div>
        </div>
    );
};

Bookmark.propTypes = {
    book: PropTypes.object.isRequired
};

export default Bookmark;