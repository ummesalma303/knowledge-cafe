import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/Bookmark/Bookmark'
import Header from './components/Header/Header'

function App() {

  return (
    <div className='w-11/12 mx-auto'>
      <Header></Header>
      <div className='md:flex space-x-6'>
        <div className="md:max-w-4xl">
      <Blogs></Blogs>
        </div>
      <Bookmark></Bookmark>
      </div>
    </div>
  )
}

export default App
