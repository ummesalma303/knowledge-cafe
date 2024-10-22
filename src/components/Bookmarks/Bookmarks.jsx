// import React from 'react'
// import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

import PropTypes from 'prop-types';

function Bookmarks({bookMarks,readingTime}) {
  return (
    <div>
      <div className="bg-[#1111110D] ">
        <button className="bg-[#6047EC1A] text-[#6047EC] p-2 w-full rounded-md">Spent time on read : {readingTime} min</button>
        <h2> Total Bookmarks: {bookMarks.length}</h2>
      </div>
      {
        bookMarks.map(book=><Bookmark key={book.id} book={book}></Bookmark>)
      }
    </div>
  );
}

Bookmarks.propTypes = {
  bookMarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired
};
export default Bookmarks;












// import PropTypes from "prop-types";

// const BookMarks = ({bookMarks}) => {
//   console.log(bookMarks);
//   return (
//     <div className="bg-[#1111110D]">
//             <button className="bg-[#6047EC1A] text-[#6047EC] p-2 w-full rounded-md">Spent time on read : 177 min</button>
//       <h2> Total Bookmarks: {bookMarks.length}</h2>
      
     
//       {/* <Bookmark></Bookmark> */}
//       </div>
//   )
// }

// Bookmarks.propTypes = {
//   bookMarks: PropTypes.object.isRequired
// }

// export default Bookmark

