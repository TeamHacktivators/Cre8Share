import React , {useEffect} from "react"
import "./Welcome.css"
import { Link , useLocation} from 'react-router-dom'
import { useTypewriter} from 'react-simple-typewriter'

const Welcome = () => {
  const [text] = useTypewriter({
    words:['Cre8Share','Cre8Share'],
    loop:{}
  })
  const [value] = useTypewriter({
    words:['Youtube Channel'],
    loop:{}
  })
  return (
    
      <div >      
          <div className='Headings'>
            <h3 style={{fontSize: 45,
                fontWeight: 'bold',color:'white'}}>Welcome to <span style={{fontSize:45,fontFamily:"Jersey 10 Charted",fontWeight:'bold',color:'#2ce8e8'}}>{text}</span><br/>
            A MarketPlace To Sell And Buy <br/><span style={{fontSize:45,fontWeight:'bold',color:'red'}}> {value} </span><br/>
             Stocks</h3> 
          </div>
          
          <div className='main-ui'>
              <div className='Creator-form'>
                  <h4 style={{fontSize:24}}>Hey! Are You A <span style={{color:'red'}}> Youtube </span> <br/>
                  Creator Start Your Journey <br/>
                      By Just One Click
                  </h4>  
                  <a href="http://localhost:8000/creators/auth/youtube" className='button-ui' 
                      type='submit' >Sign Up With Youtube </a><br/>
              </div>

              <div className='User-form'>
                  <h4 style={{fontSize:24}}>Hey! Are You A<span style={{color:'blue'}}> Trader</span><br/>
                      Start Your Trading Journey <br/>
                      By Just One Click
                  </h4>
                  
                  <Link to="/signup" className='button-userui' type='submit' >Sign Up </Link><br/>
                  <Link to="/login" className='button-userui' type='submit' >Sign In </Link>
              </div>
          </div>
          
      </div>
     
    
  )
}

export default Welcome