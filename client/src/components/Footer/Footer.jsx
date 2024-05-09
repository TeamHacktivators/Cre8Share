import React from 'react'
import './Footer.css';
const Footer = () => {
  return (
    <div>
        <div className='contactus'>
            <li id='l1'>
                <h1 style={{color:'black'}}>ContactUs</h1><br/>
                <p style={{color:'grey'}}>Feel free to reach out to us using the contact form below or via email at <br/>
                [insert email address]. We value your input and look forward to hearing from you.</p>
            </li>
        </div>

        <div className='leftout'>
            
            <form className='myform'> 
                <button className='btn1'>
                    Via Email
                </button>
                
                <button className='btn2'>
                    Via Call
                </button><br/>

                <input placeholder='Name' type='text'></input><br/>
                <input placeholder='Email' type='email'></input><br/>
                <input placeholder='Phone no.' type='number'></input><br/>
                <input id='ip' placeholder='Message' type='text'></input><br/>
                <button className='btn3'>
                    Send Message
                </button>
            </form>
        </div>
        <div className='rightout'>
                
        </div>
    </div>
  )
}

export default Footer
