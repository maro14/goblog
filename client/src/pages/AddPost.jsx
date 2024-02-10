import axios from 'axios'
import { useState } from 'react'
import { Navbar } from '../components/Navbar'

export const AddPost = () => {
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [author, setAuthor] = useState("")
    const [content, setContent] = useState("")

    const addPost = async(e) => {
        e.preventDefault()

        axios.post("http://localhost:5000", {
            title,
            category,
            author,
            content
        })

        setTitle("")
        setCategory("")
        setAuthor("")
        setContent("")
    }
    return (
    <>
    <Navbar/>
    <div className='add'>
        <div className='post'>
          <form onSubmit={(e) => addPost(e)}>
              <input
                  onChange={(e) => setTitle(e.target.value)}
                  type='text'
                  placeholder='Title'
                  value={title}
              />
              <input
                  onChange={(e) => setCategory(e.target.value)}
                  type='text'
                  placeholder='Category'
                  value={category}/**
 * Function: AddPost
 *
 * Description: This function is responsible for rendering a form to add a new post. It uses the useState hook to manage the state of the form inputs. When the form is submitted, it makes a POST request to the specified endpoint with the form data. After the request is made, it resets the form inputs to their initial values.
 *
 * @returns {JSX.Element} The JSX element representing the form to add a new post.
 */
              />
              <input
                  onChange={(e) => setAuthor(e.target.value)}
                  type='text'
                  placeholder='Author'
                  value={author}
              />
              <textarea
                  onChange={(e) => setContent(e.target.value)}
                  cols="30"
                  rows="10"
                  placeholder='Content'
                  value={content}
              ></textarea>
              <input type='submit' value="Publish"/>
          </form>
        </div>
    </div>
    </>
    )
}
