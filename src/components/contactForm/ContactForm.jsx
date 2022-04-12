import './contactForm.css'
import Phone from '../../assets/phone.png'
import Email from '../../assets/email.png'
import Address from '../../assets/address.png'
import { useContext, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

function ContactForm() {
  const formRef = useRef()
  const [done, setDone] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_uu5xij8',
        'template_pbskx78',
        formRef.current,
        'jVRDCaezv5IWH7IPA'
      )
      .then(
        result => {
          console.log(result.text)
          setDone(true)
        },
        error => {
          console.log(error.text)
        }
      )
  }

  return (
    <div className='c'>
      <div className='c-bg'></div>
      <div className='c-wrapper'>
        <div className='c-left'>
          <h1 className='c-title'>Lets Talk! Contact Me Below</h1>
          <div className='c-info'>
            <div className='c-info-item'>
              <img src={Phone} alt='my Phone number' className='c-icon' />
              952 283 9219
            </div>
            <div className='c-info-item'>
              <img className='c-icon' src={Email} alt='my email' />
              zahidabdikadir12@gmail.com
            </div>
            <div className='c-info-item'>
              <img className='c-icon' src={Address} alt='my location' />
              Minneapolis, Minnesota
            </div>
          </div>
        </div>
      </div>
      <div className='c-right'>
        <p className='c-desc'>
          <b>What's your story?</b> Get in touch. Always available for
          freelancing if the right project comes along. me.
        </p>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input type='text' placeholder='Name' name='user_name' />
          <input type='text' placeholder='Subject' name='user_subject' />
          <input type='text' placeholder='Email' name='user_email' />
          <textarea rows='5' placeholder='Message' name='message' />
          <button>Submit</button>
          {done && ' Thank you...'}
        </form>
      </div>
    </div>
  )
}

export default ContactForm
