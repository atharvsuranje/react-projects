import './App.css'
import ContactFrom from './components/ContactForm/ContactFrom'
import ContactHeader from './components/ContactHeader/ContactHeader'
import Navigation from './components/Navigation/Navigation'

function App() {
  return (
    <div>
      <Navigation/>
      <main className='main_container'>
        <ContactHeader/>
        <ContactFrom/>
      </main>
    </div>
  )
}

export default App
