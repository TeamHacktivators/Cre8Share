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
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Cre8Share</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Contactus">ContactUs</a>
                </li>
                
                
              </ul>
              <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button class="btn btn-outline-success my-2 my-sm-0 btnonly" type="submit">Search</button>
              </form>
            </div>
          </nav>
          <div className='Headings'>
            <h3 style={{fontSize: 65,
                fontWeight: 'bold',color:'black',fontfamily: "Cabin" }}>Welcome to <span style={{fontSize:65,fontFamily:"Jersey 10 Charted",fontWeight:'bold',color:'#4b40da'}}>{text}</span><br/>
            A MarketPlace To Sell And Buy <br/><span style={{fontSize:65,fontWeight:'bold',color:'red'}}> {value} </span><br/>
             Stocks</h3> 
          </div>
          
          <div className='main-ui'>
              <div className='Creator-form'>
                <div classname='Creator-one' >
                  <h4 style={{fontSize:34,color:'#ededf0',width:367,
                       height:60,backgroundColor:'#4b40da',marginTop:-86,paddingLeft:135}}>
                    Creator
                    <hr />
                  </h4>
                </div>
                <div classname='Creator-two'>
                  <h3 style={{fontSize:24,color:'black'}}>Hey! Are You A <span style={{backgroundColor:'white',color:'red',borderRadius:4,padding:2}}> Youtube </span> <br/>
                  Creator Start Your Journey <br/>
                      By Just One Click
                  </h3>  
                  <a href="http://localhost:8000/creators/auth/youtube" className='button-ui' 
                      type='submit' >Sign Up With Youtube </a>
                </div>
              </div>

              <div className='User-form'>
                <div className="User-one">
                  <h4 style={{fontSize:34,color:'#ededf0',width:367,
                       height:60,backgroundColor:'#4b40da',marginTop:-36,paddingLeft:140,
                       paddingtop:6}}>
                    User
                    <hr style={{width:'100%',color:'white'}}/>

                  </h4>
                  </div>
                  <div className="User-two">
                    <h3 style={{fontSize:24,color:'black'}}>Hey! Are You A <span style={{color:'blue'}}> Trader</span><br/>
                        Start Your Trading Journey <br/>
                        By Just One Click
                    </h3>
                  
                  <Link to="/signup" className='button-userui' type='submit' >Sign Up </Link><br/>
                  <Link to="/login" className='button-userui' type='submit' >Sign In </Link>
                  </div>
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
                           textAlign:'center'}} >
                       <a href="/Contactus" style={{color:'white'}} >{value}</a>
                    </div>
                  </li>
                  })}
               </ul>
         </footer>
          
      </div>
     
    
  )
}

export default Welcome