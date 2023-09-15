import './App.css'
import Header from './components/header.jsx'
import Navigation from './components/Navigation.jsx'
import Main from './components/Main.jsx'
import SubContents from './components/SubContents.jsx'
import Advertisement from './components/Advertisement.jsx'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="body-content">
        <Navigation />
        <Main bottom = {<Advertisement />}>
          <SubContents />
          <SubContents />
          <SubContents />
        </Main>
      </div>
    </div>
  )
}

export default App
