import Intro from './components/intro/Intro'
import AboutMe from './components/aboutMe/AboutMe'
import ProjectList from './components/projectList/ProjectList'
import ContactForm from './components/contactForm/ContactForm'

function App() {
  return (
    <div className='App'>
      <Intro />
      <AboutMe />
      <ProjectList />
      <ContactForm />
    </div>
  )
}

export default App
