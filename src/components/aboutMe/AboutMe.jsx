import './aboutMe.css'
import Rome from '../../assets/travel.jpg'
import Sitting from '../../assets/profile.jpg'

function AboutMe() {
  return (
    <div className='a'>
      <div className='a-left'>
        <div className='a-card bg'></div>
        <div className='a-card'>
          <img src={Rome} alt='of Zahid in Rome' className='bottom a-img' />
          <img src={Sitting} alt='of Zahid sitting' className='top a-img' />
        </div>
      </div>
      <div className='a-right'>
        <h1 className='a-tittle'>About Me</h1>
        <p className='a-sup'>I'm a Full-stack Developer</p>
        <p className='a-desc'>
          I am a web developer and recent graduate of the Front End Web
          Development Career Path bootcamp at Thinkful. Coding is so interesting
          to me. I can create so much with the skills I've learned. I get to use
          my imagination to create some great applications. The power to make my
          ideas come to life is such an awesome feeling. I want to work on a
          team with great programmers and learn as much as I can.
        </p>
        <br />
        <p className='a-desc'>
          When I'm not coding, I'm usually either reading or out with my camera
          exploring. I also like to dance. From hip-hop to classical. I love
          dancing and expressing myself that way. Getting lost in the music and
          relieving some stress.
        </p>
        <br />
        <hr />
      </div>
    </div>
  )
}

export default AboutMe
