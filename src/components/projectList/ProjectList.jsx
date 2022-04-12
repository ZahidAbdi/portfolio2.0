import './projectList.css'
import Projects from '../projects/Projects'
import { project } from '../../data'

function ProjectList() {
  const projectMap = project.map(item => (
    <div key={item.id} className='container'>
      <h3 className='p-name'>{item.title}</h3>
      <Projects img={item.img} />
      <p className='p-about'>{item.about}</p>
      <br />
      <a href={item.demo} target='_blank' rel='noreferrer' className='btn'>
        Demo
      </a>
      <a href={item.link} target='_blank' rel='noreferrer' className='btn'>
        GitHub
      </a>
      <hr />
      <br />
    </div>
  ))
  return (
    <div className='pl'>
      <div className='pl-text'>
        <h1 className='pl-title'>My Projects</h1>
        <p className='pl-desc'>These are the applications I've made!</p>
      </div>
      <div className='pl-list'>{projectMap}</div>
    </div>
  )
}

export default ProjectList
