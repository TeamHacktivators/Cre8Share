import React , {useEffect} from "react"
import "./Welcome.css"
import { Link , useLocation} from 'react-router-dom'
import { useTypewriter} from 'react-simple-typewriter'
import WelcomeLogo from '../Images/welcome.png'
const Welcome = () => {
  const [text] = useTypewriter({
    words:['Cre8Share','Cre8Share'],
    loop:{}
  })
  const [value] = useTypewriter({
    words:['Youtube Channel'],
    loop:{}
  })

  const footerdata = [ 'ContactUs','Social Media','Courses','Jobs','Contests','Offers','']
  return (
    
      <div >      
          <div className='Headings'>
            <h3 style={{fontSize: 65,
                fontWeight: 'bold',color:'black'}}>Welcome to <span style={{fontSize:65,fontFamily:"Jersey 10 Charted",fontWeight:'bold',color:'#4b40da'}}>{text}</span><br/>
            A MarketPlace To Sell And Buy <br/><span style={{fontSize:65,fontWeight:'bold',color:'red'}}> {value} </span><br/>
             Stocks</h3> 
          </div>
          
          <div className='main-ui'>
              <div className='Creator-form'>
                  <h4 style={{fontSize:34,color:'white',marginTop:-25}}>
                    Creator
                    <hr />
                  </h4>
                  <h3 style={{fontSize:24,color:'white'}}>Hey! Are You A <span style={{backgroundColor:'white',color:'red',borderRadius:4,padding:2}}> Youtube </span> <br/>
                  Creator Start Your Journey <br/>
                      By Just One Click
                  </h3>  
                  <a href="http://localhost:8000/creators/auth/youtube" className='button-ui' 
                      type='submit' >Sign Up With Youtube </a>
              </div>

              <div className='User-form'>
                  <h4 style={{fontSize:34,color:'white',textAlign:'left'}}>
                    User
                    <hr style={{width:'100%',color:'white'}}/>
                  </h4>
                  <h3 style={{fontSize:24,color:'white'}}>Hey! Are You A<span style={{color:'#2ce8e8'}}> Trader</span><br/>
                      Start Your Trading Journey <br/>
                      By Just One Click
                  </h3>
                  
                  <Link to="/signup" className='button-userui' type='submit' >Sign Up </Link><br/>
                  <Link to="/login" className='button-userui' type='submit' >Sign In </Link>
              </div>
              <div className="MyImage">
                  <img src={WelcomeLogo} alt="Welcome Logo"/>
              </div>
              
          </div>
          <footer className="footer">
               <ul>
                 {footerdata.map((value,key)=>{
                  return <li key={key}style={{listStyleType:'none'}} >

                    <div style={{color:'white',justifyContent:'center',fontSize:24,
                           textAlign:'center',}} >
                       {value}
                    </div>
                  </li>
                  })}
               </ul>
         </footer>
          
      </div>
     
    
  )
}

export default Welcome