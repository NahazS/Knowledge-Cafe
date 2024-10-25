import './App.css'
import Header from './components/header'
import Blogs from './components/blogs'
import { useState } from 'react'
import Bookmarks from './components/Bookmarks'

function App() {
  
  const [bookMark, setBookMark] = useState([])
  const handleBookMark = (blog) => {
    const newBookMark = [...bookMark, blog]
    setBookMark(newBookMark)
  }
  const [readTime, setReadTime] = useState(0)
  const handleReadTime = (id, time) => {
    const addReadTime = readTime + time;
    setReadTime(addReadTime)
    const removeBook = bookMark.filter((book) => book.id !== id)
    setBookMark(removeBook)
  }
  return (
    <>
      <Header></Header>
      <div className='flex w-[1280px] gap-x-6'>
        <Blogs handleBookMark={handleBookMark} handleReadTime={handleReadTime}></Blogs>
        <Bookmarks bookMark={bookMark} readTime={readTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
