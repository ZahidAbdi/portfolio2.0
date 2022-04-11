import Typical from 'react-typical'
import Resume from '../assets/myResume.pdf'

function Home() {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
          <div className='socials'>
            <a href='https://www.instagram.com/zablackafro/'>
              <i className='fa fa-instagram'></i>
            </a>
            <a href='https://twitter.com/zablackafro'>
              <i className='fa fa-twitter'></i>
            </a>
            <a href='https://github.com/ZahidAbdi'>
              <i className='fa fa-github-square'></i>
            </a>
            <a href='https://www.linkedin.com/in/zahid-abdikadir/'>
              <i className='fa fa-linkedin-square'></i>
            </a>
          </div>
          <div className='profile-details-name'>
            <span className='primary-text'>
              Hello, I'm <span className='highlighted-text'>Zahid</span>
            </span>
          </div>
          <div className='profile-details-role'>
            <span className='primary-text'>
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    'Enthusiastic Dev 👌',
                    1000,
                    'Full-Stack Developer💻',
                    1000,
                    'MERN Stack Dev 🙌',
                    1000,
                    'Cross Platform Dev 🌏',
                    1000,
                    'React Developer ⚛️',
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className='profile-role-tagline'>
              A passion for building applications with front-end and back-end
              operations.
            </span>
          </div>
          <div className='profile-options'>
            <button className='btn primary-btn'>Hire Me!</button>
            <a href={<Resume />} download='myResume.pdf'>
              <button className='btn highlighted-btn'>Get Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
