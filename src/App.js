import { useContext } from 'react'
import Intro from './components/intro/Intro'
import AboutMe from './components/aboutMe/AboutMe'
import ProjectList from './components/projectList/ProjectList'
import ContactForm from './components/contactForm/ContactForm'
import DarkMode from './components/toggle/DarkMode'
import { ThemeContext } from './context'

function App() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  return (
    <div
      style={{
        backgroundColor: darkMode ? '#222' : 'white',
        color: darkMode && 'white',
      }}
    >
      <DarkMode />
      <Intro />
      <AboutMe />
      <ProjectList />
      <ContactForm />
    </div>
  )
}

export default App
