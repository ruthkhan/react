import './App.css'
import PersonCard from './components/PersonCard.jsx'

function App() {

  return (
    <>
      <div>
        <PersonCard 
          firstname = { "Jane" }
          lastname = { "Doe" }
          initialAge = {45}
          hairColor = { "Black" }
        />
        <PersonCard 
          firstname = { "John" }
          lastname = { "Smith" }
          initialAge = {88}
          hairColor = { "Brown" }
        />
        <PersonCard 
          firstname = { "Millard" }
          lastname = { "Fillmore" }
          initialAge = {50}
          hairColor = { "Brown" }
        />
        <PersonCard 
          firstname = { "Maria" }
          lastname = { "Smith" }
          initialAge = {62}
          hairColor = { "Brown" }
        />
      </div>
    </>
  )
}

export default App
