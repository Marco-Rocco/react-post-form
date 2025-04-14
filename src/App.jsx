import { useState } from 'react'

function App() {


  const [newPost, setNewPost] = useState({
    author: "",
    title: "",
    body: "",
    public: false,
    id: ""
  })

  function handleNewPost(event) {
    const value =
      event.target.type === "checkbox" ?
        event.target.checked : event.target.value;

    setNewPost((newPost) => ({
      ...newPost,
      [event.target.name]: value,
    }))
    return console.log(newPost)
  }


  return (
    <>
      <form>

        <input type="text" placeholder='inserisci autore' name='author' value={newPost.author} onChange={handleNewPost} /> <br />
        <input type="text" placeholder='inserisci titolo' name='title' value={newPost.title} onChange={handleNewPost} /><br />
        <input type="text" placeholder='inserisci testo del post' name='body' value={newPost.body} onChange={handleNewPost} /><br />
        <span>pubblico</span><input type="checkbox" name='public' value={newPost.public} onChange={handleNewPost} />
        button

      </form>
    </>
  )
}

export default App
