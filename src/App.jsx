import './App.css'
import Header from './components/Header'
import Section from './components/Section'


function App(props){
  return (
    <div>
      <Header />
      <div className='list-items'>
        <Section />
      </div>

    </div>
  )
}

export default App
