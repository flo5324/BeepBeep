import './App.css'
import Form from "./views/Form";
import List from "./views/List";

function App() {

    return (
        <div className="App">
            <h1>BeepBeep bookmark</h1>
            <div className="content">
                <Form/>
                <List/>
            </div>
        </div>
    )
}

export default App
