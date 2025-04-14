import axios from 'axios';
import { useState } from 'react'
const endpoint = 'https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts'

const initialFormState = {
  author: "",
  title: "",
  body: "",
  public: false,
  id: ""
}

function App() {


  const [newPost, setNewPost] = useState(initialFormState)

  function handleNewPost(event) {
    const value =
      event.target.type === "checkbox" ?
        event.target.checked : event.target.value;

    setNewPost((newPost) => ({
      ...newPost,
      [event.target.name]: value,
    }))
  }

  const handleSubmit = event => {
    event.preventDefault();

    axios.post(endpoint, newPost)
      .then(console.log('post creato'))
      .catch(error(console.log(error)))

    console.log("inviato");
    console.log(newPost);
    console.log(endpoint)
    setNewPost(initialFormState)
  }


  return (
    <>
      <form onSubmit={handleSubmit}>

        <input type="text" placeholder='inserisci autore' name='author' value={newPost.author} onChange={handleNewPost} /> <br />
        <input type="text" placeholder='inserisci titolo' name='title' value={newPost.title} onChange={handleNewPost} /><br />
        <input type="text" placeholder='inserisci testo del post' name='body' value={newPost.body} onChange={handleNewPost} /><br />
        <span>pubblico</span><input type="checkbox" name='public' checked={newPost.public} onChange={handleNewPost} />
        <button>invia</button>

      </form>
    </>
  )
}

export default App
