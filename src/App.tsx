import './App.css'
import Form from './views/Form'
import List from './views/List'
import { BookmarkContextProvider } from './context/BookmarkContext'

function App() {
  return (
    <div className="App">
      <h1>BeepBeep bookmark</h1>
      <div className="content">
        <BookmarkContextProvider>
          <Form />
          <List />
        </BookmarkContextProvider>
      </div>
    </div>
  )
}

export default App
