import React , {useEffect} from "react"
import "./Welcome.css"
import { Link , useLocation} from 'react-router-dom'

const Welcome = () => {

    const location = useLocation();

    useEffect(() => {
      const queryParams = new URLSearchParams(location.search);
      const token = queryParams.get('token');
  
      if (token) {
        localStorage.setItem('token', token);
      }
    }, [location]);
  
  return (
    
    <div >
        <div className='Headings'>
        <h3>Welcome to Cre8Share</h3>
        <h3> A Place To Sell And Buy Youtube Stocks</h3>
        </div>

        <div className='main-ui'>
            <div className='Creator-form'>
                <h4>Hey! Are You A Youtube Creator<br/>
                    Start Your Journey By Just One Click
                </h4>  
                <a href="http://localhost:8000/creators/auth/youtube" className='button-userui' type='submit' >Sign Up </a><br/>
            </div>

            <div className='User-form'>
                <h4>Hey! Are You A Trader<br/>
                    Start Your Trading Journey <br/>By Just One Click
                </h4>
                
                <Link to="/signup" className='button-userui' type='submit' >Sign Up </Link><br/>
                <Link to="/login" className='button-userui' type='submit' >Sign In </Link>
            </div>
        </div> 
    </div>
    
  )
}

export default Welcome