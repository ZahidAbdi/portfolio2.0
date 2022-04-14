import './intro.css'
import Me from '../../assets/me.jpg'
function Intro() {
  return (
    <div className='i'>
      <div className='i-left'>
        <div className='i-left-wrapper'>
          <h2 className='i-intro'>Hello, My name is</h2>
          <h1 className='i-name'>Zahid Abdikadir</h1>
          <div className='i-title'>
            <div className='i-title-wrapper'>
              <div className='i-title-item'>Web Developer</div>
              <div className='i-title-item'>Photographer</div>
              <div className='i-title-item'>Videographer</div>
              <div className='i-title-item'>D&D Enthusiast</div>
            </div>
          </div>
          <p className='i-desc'>
            I design and develop services for business of all sizes,
            specializing in creating modern websites and web services
          </p>
        </div>
      </div>
      <div className='i-right'>
        <div className='i-bg'>
          <img src={Me} alt='of Zahid' className='i-img' />
        </div>
        <img src={Me} alt='of Zahid' className='hidden-img' />
      </div>
    </div>
  )
}

export default Intro
