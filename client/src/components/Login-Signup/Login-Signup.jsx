import React, { useState } from 'react';
import './Login-Signup.css'

function LoginSignup(){
    

    
    function handleclick(){
        alert( 'Your Data  is save now in Hacktivators')
    }
    return (
        <div className='Flex-Box' >
            <div className='Heading'> SIGN UP </div>
                <div className='form-ui'>
                    <form className='form-uidesign '>
                        <label >USERNAME</label><br/>
                        <input className='inputs' type="text"  placeholder='Enter Your Name'  />
                        <br/>
                    </form>
                    <form className='form-uidesign '>
                        <label >EMAIL</label> <br/>
                        <input className='inputs' type="email"  placeholder='Your Mail Id' />
                        <br/>
                    </form >  
                    <form className='form-uidesign '>
                        <label >PASSWORD</label><br/>
                        <input className='inputs' type="password"  placeholder='Your Password'  />
                        <br/>
                    
                    </form > 
                    <form className='next-page '>
                        <p> Alreay an Existing User ?
                        <a href=''>LogIn</a>
                        </p>

                    </form>
                    <button className='buttonui' onClick={handleclick} type='submit' value="submit">SIGNUP</button>
                    
                </div> 
                
            
        </div>
    )
}

export default LoginSignup;

