import Navbar from "./components/Navbar"
import Searchbar from "./components/Searchbar"

const App = () => {
    return(
      <div className = "container">
          <Navbar title="NAVBAR" />
          <Searchbar />
      </div>
    )
}

export default App
