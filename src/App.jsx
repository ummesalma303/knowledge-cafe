import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const [readingTime,setReadingTime]=useState(0)
  const handleAddToBookmarks = (blog) => {

    const newBookMarks = [...bookMarks, blog]
    setBookMarks(newBookMarks)
  }

  const handleMarkAsRead = (id,reading_time) => {
    const newReadingTime = readingTime+ reading_time
    setReadingTime(newReadingTime);
    // remove the read blog from bookmark
    const remainingBookmark = bookMarks.filter(bookMark=>bookMark.id!==id)
    setBookMarks(remainingBookmark)
  }

  return (
    <div className='w-11/12 mx-auto'>
      <Header></Header>
      <div className='md:flex space-x-6'>
        <div className="md:max-w-4xl">
      <Blogs handleAddToBookmarks={handleAddToBookmarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
        </div>
        
      <Bookmarks bookMarks={bookMarks} readingTime={readingTime}></Bookmarks>
      </div>
    </div>
  )
}

export default App
