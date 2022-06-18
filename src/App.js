import Booklist from './components/Booklist'
import Navbar from './components/Navbar'
import ThemeContextProvider from './contexts/ThemeContext'

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <ThemeContextProvider>
        <Navbar />
        <Booklist />
      </ThemeContextProvider>
    </div>
  )
}

export default App
