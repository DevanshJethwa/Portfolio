
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
// import Modal from './components/Modal'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

import Skill from './components/Skill'

function App() {

  return (
    <>
    <div className='font-semibold'> 

      <Navbar/>
      <Home/>
      <About/>
      <Skill/>
      <Projects/>
      <Contact/>
      
    </div>
      {/* <Modal></Modal> */}
    </>
  )
}

export default App
